import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function K9to12() {
  return (
    <>
      <div className="header"><h1>K 9–12 — AI‑Powered</h1></div>
      <Breadcrumbs trail="K 9–12" />
      <div className="container">
        <div className="lesson-content">
          <h1>Advanced pathway: ages 9–12</h1>
          <p>Deeper activities exploring models, ethics, and creative AI — suitable for older learners preparing for further study.</p>

          <h2>Recommended lessons</h2>
          <ul>
            <li><Link to="/ai-ethics">AI Ethics</Link> — discuss bias, fairness and social impact.</li>
            <li><Link to="/generative-ai">Generative AI</Link> — creative projects and controlled experiments.</li>
            <li><Link to="/robotics">Robotics</Link> — design challenges that combine sensing and rules.</li>
          </ul>

          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 9–12)</button>

          <p className="muted">Print-ready teacher guides and challenge sheets for secondary-level classes.</p>

          <Link to="/how-to-teach" className="back-link">Back to How to Teach</Link>
        </div>
      </div>
    </>
  )
}
