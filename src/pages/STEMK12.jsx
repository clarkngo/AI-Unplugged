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
              <h3 id="k1-4">K 1–4 — AI‑Unplugged</h3>
              <p>Hands-on, play-based activities that introduce core ideas with minimal reading — perfect for early learners.</p>
              <h4>Activity ideas</h4>
              <ul>
                <li>What is AI? — read-aloud and class discussion using images and emojis.</li>
                <li>Story Dice — roll and create short stories with AI prompts.</li>
                <li>Face Features — paper collage to explore how computers see features.</li>
              </ul>
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Simple drag-and-drop games (block-based) to sort images by color or shape.</li>
                <li>Interactive slides with clickable examples and teacher-controlled prompts.</li>
              </ul>
              <Link to="/k-1-4" className="back-link">Printable pack (K 1–4)</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🔧</div>
              <h3 id="k5-8">K 5–8 — AI‑Infused</h3>
              <p>Projects that mix unplugged tasks with simple tools or group challenges to explore how AI appears in familiar tech.</p>
              <h4>Activity ideas</h4>
              <ul>
                <li>Brain-in-a-Bag — sampling and simple reinforcement ideas.</li>
                <li>Hexapawn / Intelligent Paper — games that show learning from feedback.</li>
                <li>I Spy with feature questions — designing yes/no feature trees.</li>
              </ul>
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Use block-based programming (Scratch) to build simple rule-based agents.</li>
                <li>Lightweight data collection: record observations and visualize counts in a spreadsheet.</li>
              </ul>
              <Link to="/k-5-8" className="back-link">Printable pack (K 5–8)</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🚀</div>
              <h3 id="k9-12">K 9–12 — AI‑Powered</h3>
              <p>Deeper explorations of models, ethics, and creative AI — activities that prepare students for advanced study.</p>
              <h4>Activity ideas</h4>
              <ul>
                <li>Design a Robot — systems thinking, sensors and actions.</li>
                <li>AI Ethics scenarios — case studies and debate.</li>
                <li>Generative projects — controlled experiments with prompts and outputs.</li>
              </ul>
              <h4>Blended / Digital options</h4>
              <ul>
                <li>Guided projects using Python Notebooks or web-based APIs for experiments (teacher-led).</li>
                <li>Data literacy tasks: small datasets, basic visualization and bias checks.</li>
              </ul>
              <Link to="/k-9-12" className="back-link">Printable pack (K 9–12)</Link>
            </div>
          </div>

          <p className="muted">Each tier links to curated lessons and printable teacher packs; below are quick 'how to use' suggestions and learning outcomes to help planning.</p>

          <h2>How to use these pathways</h2>
          <ul>
            <li><strong>Duration:</strong> pick 20–40 minute activities for single lessons; combine for multi-lesson units.</li>
            <li><strong>Materials:</strong> most unplugged activities need simple counters, paper, and markers; blended options may need a single device per group.</li>
            <li><strong>Learning outcomes:</strong> pattern recognition, hypothesis testing, simple algorithmic thinking, and ethical reflection (older students).</li>
          </ul>

          <Link to="/how-to-teach" className="back-link">Back to How to Teach</Link>
        </div>
      </div>
    </>
  )
}
