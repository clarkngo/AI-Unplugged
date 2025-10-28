import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function K5to8() {
  return (
    <>
      <div className="header"><h1>K 5–8 — AI‑Infused</h1></div>
      <Breadcrumbs trail="K 5–8" />
      <div className="container">
        <div className="lesson-content">
          <h1>Intermediate pathway: ages 5–8</h1>
          <p>Blend unplugged activities with simple tools and mini-projects that reveal how everyday tech uses AI.</p>

          <h2>Recommended lessons</h2>
          <ul>
            <li><Link to="/machine-learning">Machine Learning</Link> — experiments with simple learning games.</li>
            <li><Link to="/nlp">Natural Language Processing</Link> — games that explore guessing, patterns and language.</li>
            <li><Link to="/computer-vision">Computer Vision</Link> — expanded activities with observation and feature rules.</li>
          </ul>

          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 5–8)</button>

          <p className="muted">Printable teacher notes and activity sheets targeted to upper-primary / lower-secondary learners.</p>

          <Link to="/how-to-teach" className="back-link">Back to How to Teach</Link>
        </div>
      </div>
    </>
  )
}
