// Content checks: the activity catalog, the pages and the printables agree
// with each other, and the claims the lesson text makes about generated
// materials are true. Run with `npm run check`.
import { readFileSync } from 'node:fs'
import { ACTIVITIES, BIG_IDEAS, GRADE_BANDS, LESSONS } from '../src/lib/catalog.js'
import { TRAINING, EXTRA_TRAINING, TEST, perfectFeatures } from '../src/lib/fruit.js'
import { buildNextWordTable } from '../src/lib/nextword.js'

const errors = []
const check = (ok, msg) => { if (!ok) errors.push(msg) }
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8')

// Routes and the page component each one renders, from App.jsx.
const app = read('src/App.jsx')
const routes = new Map(
  [...app.matchAll(/path: '([^']+)',[^\n]*element: <(\w+)/g)].map(([, path, el]) => [path, el]),
)
const pageSource = (path) => read(`src/pages/${routes.get(path)}.jsx`)
const printables = read('src/pages/PrintableSheet.jsx')

// Catalog integrity.
const ids = new Set()
for (const a of ACTIVITIES) {
  check(!ids.has(a.id), `duplicate activity id ${a.id}`)
  ids.add(a.id)
  check(routes.has(a.lesson), `${a.id}: lesson route ${a.lesson} does not exist`)
  if (routes.has(a.lesson)) {
    check(pageSource(a.lesson).includes(`id="${a.id}"`), `${a.id}: no element with id="${a.id}" on ${a.lesson}`)
  }
  for (const b of a.bigIdeas) check(BIG_IDEAS.some((x) => x.id === b), `${a.id}: unknown big idea ${b}`)
  for (const g of a.grades) check(GRADE_BANDS.some((x) => x.id === g), `${a.id}: unknown grade band ${g}`)
  if (a.printable) {
    check(printables.includes(`slug: '${a.printable}'`), `${a.id}: printable ${a.printable} not in PrintableSheet.jsx`)
    check(routes.has(`/printables/${a.printable}`), `${a.id}: no route /printables/${a.printable}`)
  }
}
for (const l of LESSONS) check(routes.has(l.path), `lesson ${l.path} has no route`)
for (const g of GRADE_BANDS) check(routes.has(g.path), `grade band ${g.path} has no route`)
for (const b of BIG_IDEAS) check(ACTIVITIES.some((a) => a.bigIdeas.includes(b.id)), `big idea ${b.id} has no activities`)
for (const g of GRADE_BANDS) check(ACTIVITIES.some((a) => a.grades.includes(g.id)), `grade band ${g.id} has no activities`)

// Biased Fruit Sorter: the lesson text says colour is the only front-of-card
// rule on the training cards, nothing on the front works after adding the
// extra cards, and skin (on the back) then works.
const front = ['colour', 'shape']
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b)
check(same(perfectFeatures(TRAINING, front), ['colour']), 'fruit: colour should be the only perfect front feature in training')
check(same(perfectFeatures([...TRAINING, ...EXTRA_TRAINING], front), []), 'fruit: no front feature should work after extra cards')
check(same(perfectFeatures([...TRAINING, ...EXTRA_TRAINING]), ['skin']), 'fruit: skin should be the only perfect feature after extra cards')
const colourRule = (c) => ({ red: 'apple', yellow: 'lemon' })[c.colour]
check(TEST.some((c) => colourRule(c) === undefined), 'fruit: a test card should have no answer under the colour rule')
check(TEST.some((c) => colourRule(c) && colourRule(c) !== c.fruit), 'fruit: a test card should be mislabelled by the colour rule')

// Next-Word Machine: the NLP page says "cat" is in the "the" cup four times,
// and gives two example sentences the machine can write.
const table = new Map(buildNextWordTable().map((r) => [r.word, r.next]))
check(table.get('the').find((n) => n.word === 'cat')?.count === 4, 'next-word: "the" cup should hold "cat" four times')
const canWrite = (sentence) => {
  const words = sentence.replace('.', ' .').split(' ')
  return words.every((w, i) => i === words.length - 1 || table.get(w)?.some((n) => n.word === words[i + 1]))
}
for (const s of ['the cat sat on the log.', 'the cat saw the cat.']) check(canWrite(s), `next-word: machine can't write "${s}"`)

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'))
  process.exit(1)
}
console.log(`content OK: ${ACTIVITIES.length} activities, ${routes.size} routes, all claims hold`)
