import Breadcrumbs from '../components/Breadcrumbs'

const SOURCES = [
  {
    what: 'The Sweet Learning Computer',
    credit: <>Adapted from <a href="https://www.cs4fn.org/machinelearning/sweetlearningcomputer.php" target="_blank" rel="noopener noreferrer">cs4fn&apos;s The Sweet Learning Computer</a> (Queen Mary University of London), a tastier version of Donald Michie&apos;s MENACE matchbox computer (1961). Using it for Hexapawn was Martin Gardner&apos;s idea (<em>Scientific American</em>, March 1962).</>,
  },
  {
    what: 'Intelligent Paper',
    credit: <>Inspired by <a href="https://teachinglondoncomputing.org/free-workshops/invisible-palming-intelligent-paper-so-what-is-an-algorithm/" target="_blank" rel="noopener noreferrer">cs4fn&apos;s Intelligent Paper</a> activity. The rule sheet on this site is original and checked by computer to never lose.</>,
  },
  {
    what: 'Pixel Pictures',
    credit: <>Inspired by CS Unplugged&apos;s <a href="https://www.csunplugged.org/en/topics/image-representation/" target="_blank" rel="noopener noreferrer">Colour by Numbers</a> image representation activity.</>,
  },
  {
    what: 'The Biased Fruit Sorter',
    credit: <>Original activity. The real-world example is Joy Buolamwini and Timnit Gebru, <a href="https://proceedings.mlr.press/v81/buolamwini18a.html" target="_blank" rel="noopener noreferrer">&quot;Gender Shades&quot;</a> (2018).</>,
  },
  {
    what: 'The Five Big Ideas',
    credit: <>The <a href="https://ai4k12.org/" target="_blank" rel="noopener noreferrer">AI4K12 Initiative</a>, a joint project of AAAI and CSTA.</>,
  },
  {
    what: 'Neural networks',
    credit: <>For a neural-network activity, see <a href="https://www.cs4fn.org/teachers/activities/braininabag/" target="_blank" rel="noopener noreferrer">cs4fn&apos;s Brain-in-a-bag</a>, a different activity from this site&apos;s Learning Bag.</>,
  },
]

export default function Credits() {
  return (
    <>
      <div className="header">
        <h1>🙏 Credits &amp; License</h1>
        <p>Where the ideas come from, and how you can reuse them.</p>
      </div>
      <Breadcrumbs trail="Credits" />
      <div className="container">
        <div className="lesson-content">
          <h2>Sources</h2>
          <dl className="credits-list">
            {SOURCES.map((s) => (
              <div key={s.what}>
                <dt>{s.what}</dt>
                <dd>{s.credit}</dd>
              </div>
            ))}
          </dl>
          <p>All lesson text and all other activities on this site are original.</p>
          <h2>License</h2>
          <p>
            Lesson content is licensed{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> — use,
            adapt, print and share it in your own classroom materials, with attribution. The site&apos;s code is MIT licensed.
            Source is on <a href="https://github.com/clarkngo/AI-Unplugged" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </div>
    </>
  )
}
