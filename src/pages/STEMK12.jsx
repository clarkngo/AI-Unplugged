import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function STEMK12() {
  return (
    <>
      <div className="header"><h1>STEM K‑12</h1></div>
      <Breadcrumbs trail="STEM K-12" />
      <div className="container">
        <div className="lesson-content">
          <h1>STEM pathways by grade band</h1>
          <p>Use these entry points to choose lessons and printable teacher packs tailored to your students' age and stage.</p>

          <div className="k12-grid">
            <div className="k12-card">
              <div className="k12-icon">🧩</div>
              <h3>K 1–4 — AI‑Unplugged</h3>
              <p>Hands-on, play-based activities that introduce core ideas with minimal reading — perfect for early learners.</p>
              <Link to="/k-1-4" className="back-link">Explore K 1–4</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🔧</div>
              <h3>K 5–8 — AI‑Infused</h3>
              <p>Projects that mix unplugged tasks with simple tools or group challenges to explore how AI appears in familiar tech.</p>
              <Link to="/k-5-8" className="back-link">Explore K 5–8</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🚀</div>
              <h3>K 9–12 — AI‑Powered</h3>
              <p>Deeper explorations of models, ethics, and creative AI — activities that prepare students for advanced study.</p>
              <Link to="/k-9-12" className="back-link">Explore K 9–12</Link>
            </div>
          </div>

          <p className="muted">Each tier links to a curated set of lessons and printable teacher packs. Use the printable packs to prepare materials for class, or adapt activities to your own learning goals.</p>

          <Link to="/how-to-teach" className="back-link">Back to How to Teach</Link>
        </div>
      </div>
    </>
  )
}
