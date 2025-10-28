import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function K1to4() {
  return (
    <>
      <div className="header"><h1>K 1–4 — AI‑Unplugged</h1></div>
      <Breadcrumbs trail="K 1–4" />
      <div className="container">
        <div className="lesson-content">
          <h1>Introductory pathway: ages K–4</h1>
          <p>Short, playful lessons that introduce core ideas through games, stories and simple group activities.</p>

          <h2>Recommended lessons</h2>
          <ul>
            <li><Link to="/what-is-ai">What is AI?</Link> — gentle intro to the idea of 'smart' behaviour.</li>
            <li><Link to="/computer-vision">Computer Vision</Link> — simple visual games and pattern recognition activities.</li>
            <li><Link to="/generative-ai">Generative AI</Link> — creative activities like story dice to spark imagination.</li>
          </ul>

          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 1–4)</button>

          <p className="muted">The printable pack contains worksheets and teacher notes tailored for early years. Use your browser's print dialog to save as PDF or print to paper.</p>

          <Link to="/how-to-teach" className="back-link">Back to How to Teach</Link>
        </div>
      </div>
    </>
  )
}
