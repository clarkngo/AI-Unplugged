// Printable activity materials, shared by the lesson pages and the
// /printables pages so both always show the same, generated content.
import HexapawnBoard from './HexapawnBoard'
import { computerPositions, MOVE_COLORS } from '../lib/hexapawn'
import { STORY_DICE } from '../lib/storydice'
import { RULES } from '../lib/tictactoe'
import { buildNextWordTable, TRAINING_STORY, END } from '../lib/nextword'

const TURN_LABEL = { 2: "Computer's 1st move", 4: "Computer's 2nd move", 6: "Computer's 3rd move" }

export function HexapawnMatchboxCards() {
  const positions = computerPositions()
  const candies = positions.reduce((sum, p) => sum + p.moves.length, 0)
  return (
    <>
      <p>
        You need <strong>{positions.length} cups or matchboxes</strong> and{' '}
        <strong>{candies} candies</strong> in four colours. Cut out each card, stick it on a box, and put one
        candy of each arrow&apos;s colour inside. Dark pawns belong to the computer; light pawns are yours.
      </p>
      <p className="muted">
        Mirror images share a card. If the board looks like a card flipped left-to-right, use that card and
        flip the move the same way.
      </p>
      <div className="card-grid">
        {positions.map((p, i) => (
          <figure className="print-card" key={i}>
            <figcaption>
              <strong>Box {i + 1}</strong> · {TURN_LABEL[p.turn]}
            </figcaption>
            <HexapawnBoard
              board={p.board}
              moves={p.moves}
              label={`Box ${i + 1}: ${p.moves.length} possible moves`}
            />
            <div className="candy-key">
              {p.moves.map((_, n) => (
                <span key={n} className="candy-chip" style={{ '--chip': MOVE_COLORS[n].hex }}>
                  {n + 1} {MOVE_COLORS[n].name}
                </span>
              ))}
            </div>
          </figure>
        ))}
      </div>
    </>
  )
}

export function IntelligentPaperRules() {
  return (
    <div className="rule-sheet">
      <div className="rule-sheet-grid" aria-label="Square numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div>
        <p>
          <strong>On every turn, start at rule 1 and go down the list. Do the first rule that fits — then stop.</strong>
        </p>
        <ol className="rule-list">
          {RULES.map((r) => (
            <li key={r.title}>
              <strong>{r.title}:</strong> {r.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function StoryDiceTables() {
  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>
            <th scope="col">Roll</th>
            {STORY_DICE.map((d) => (
              <th scope="col" key={d.name}>{d.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <tr key={i}>
              <th scope="row"><span aria-hidden="true">{'⚀⚁⚂⚃⚄⚅'[i]}</span> {i + 1}</th>
              {STORY_DICE.map((d) => (
                <td key={d.name}>{d.faces[i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function NextWordTrainingStory() {
  return (
    <blockquote className="training-story">
      {TRAINING_STORY.map((s) => (
        <p key={s}>{s}</p>
      ))}
    </blockquote>
  )
}

export function NextWordTable() {
  const rows = buildNextWordTable()
  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>
            <th scope="col">Cup label</th>
            <th scope="col">Slips inside (one slip each time that word came next)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.word}>
              <th scope="row">{r.word}</th>
              <td>
                {r.next.flatMap((n) => Array.from({ length: n.count }, (_, k) => (
                  <span key={`${n.word}-${k}`} className="word-slip">
                    {n.word === END ? '. (stop)' : n.word}
                  </span>
                )))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// A worked example of the Learning Bag, simulated from the rules on the page
// so the counts in the table always follow them.
const BAG_ROUNDS = [
  { guess: 'black' },
  { guess: 'red' },
  { guess: 'red' },
  { guess: 'black' },
  { guess: 'red' },
  { guess: 'red' },
]

export function LearningBagExample({ secret = 'red', start = 4 }) {
  let bag = { red: start, black: start }
  const rows = [{ label: 'Start', bag: { ...bag }, note: 'Equal chance of each colour.' }]
  BAG_ROUNDS.forEach((round, i) => {
    const correct = round.guess === secret
    bag = { ...bag, [round.guess]: bag[round.guess] + (correct ? 1 : -1) }
    rows.push({
      label: `Round ${i + 1}`,
      bag: { ...bag },
      note: correct
        ? `Drew ${round.guess} — "Yes!" Put it back and add another ${round.guess}.`
        : `Drew ${round.guess} — "No!" Leave that bead out of the bag.`,
    })
  })
  const chance = (b) => Math.round((b[secret] / (b.red + b.black)) * 100)
  return (
    <div className="table-scroll">
      <table className="data-table bag-table">
        <caption>Example: your friend secretly picked {secret}.</caption>
        <thead>
          <tr>
            <th scope="col">When</th>
            <th scope="col">Beads in the bag</th>
            <th scope="col">Chance of guessing right</th>
            <th scope="col">What happened</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              <td>
                <span className="beads" aria-label={`${r.bag.red} red, ${r.bag.black} black`}>
                  {Array.from({ length: r.bag.red }, (_, k) => <span key={`r${k}`} className="bead bead-red" />)}
                  {Array.from({ length: r.bag.black }, (_, k) => <span key={`b${k}`} className="bead bead-black" />)}
                </span>{' '}
                <span className="muted">{r.bag.red} red · {r.bag.black} black</span>
              </td>
              <td>{chance(r.bag)}%</td>
              <td>{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
