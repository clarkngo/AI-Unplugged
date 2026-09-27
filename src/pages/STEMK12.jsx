import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import GradeActivities from '../components/GradeActivities'

export default function STEMK12() {
  return (
    <>
      <div className="header"><h1>🧭 Grade Pathways</h1><p>Activities and printable lesson plans for each grade band, K–12.</p></div>
      <Breadcrumbs trail="Grade Pathways" />
      <div className="container">
        <div className="lesson-content">
          <h2 className="lesson-title">STEM pathways by grade band</h2>
          <p>Use these entry points to choose lessons and printable teacher packs tailored to your students' age and stage.</p>

          <div className="k12-grid">
            <div className="k12-card">
              <div className="k12-icon">🧩</div>
              <h3 id="k1-4">K 1–4 — AI‑Unplugged</h3>
              <p>Hands-on, play-based activities that introduce core ideas with minimal reading — perfect for early learners.</p>
              <h4>Activities</h4>
              <GradeActivities grade="k4" />
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Simple drag-and-drop games (block-based) to sort images by color or shape.</li>
                <li>Interactive slides with clickable examples and teacher-controlled prompts.</li>
              </ul>
              <Link to="/k-1-4" className="back-link">Lesson plans (K 1–4)</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🔧</div>
              <h3 id="k5-8">K 5–8 — AI‑Infused</h3>
              <p>Projects that mix unplugged tasks with simple tools or group challenges to explore how AI appears in familiar tech.</p>
              <h4>Activities</h4>
              <GradeActivities grade="58" />
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Use block-based programming (Scratch) to build simple rule-based agents.</li>
                <li>Lightweight data collection: record observations and visualize counts in a spreadsheet.</li>
              </ul>
              <Link to="/k-5-8" className="back-link">Lesson plans (K 5–8)</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🚀</div>
              <h3 id="k9-12">K 9–12 — AI‑Powered</h3>
              <p>Deeper explorations of models, ethics, and creative AI — activities that prepare students for advanced study.</p>
              <h4>Activities</h4>
              <GradeActivities grade="912" />
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Code the Next-Word Machine in Python — a short program that runs offline (<Link to="/nlp?a=next-word-python">see the activity</Link>).</li>
                <li>Data literacy tasks: small datasets, basic visualization and bias checks.</li>
              </ul>
              <Link to="/k-9-12" className="back-link">Lesson plans (K 9–12)</Link>
            </div>
          </div>

          <p className="muted">Each tier links to printable lesson plans; activity cut-outs and rule sheets are on the <Link to="/printables">Printables</Link> page. Below are quick 'how to use' suggestions and learning outcomes to help planning.</p>

          <h2>How to use these pathways</h2>
          <ul>
            <li><strong>Duration:</strong> pick 20–40 minute activities for single lessons; combine for multi-lesson units.</li>
            <li><strong>Materials:</strong> most unplugged activities need simple counters, paper, and markers; blended options may need a single device per group.</li>
            <li><strong>Learning outcomes:</strong> pattern recognition, hypothesis testing, simple algorithmic thinking, and ethical reflection (older students).</li>
          </ul>

          <Link to="/activities" className="back-link">Browse all activities</Link>
        </div>
      </div>
    </>
  )
}
