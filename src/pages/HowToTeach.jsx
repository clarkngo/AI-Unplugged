import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function HowToTeach() {
  return (
    <>
      <div className="header">
        <h1>🎓 How to Teach AI Unplugged 🎒</h1>
        <p>A practical guide for educators and parents — classroom-ready tips, pacing, differentiation and safety notes inspired by proven unplugged teaching practice.</p>
      </div>
      <Breadcrumbs trail="How to Teach AI Unplugged" />
      <div className="container">
        <div className="lesson-content">
          <p>If you are planning lessons by age group, see our dedicated <Link to="/k12">STEM K‑12</Link> page which contains curated pathways and printable packs for each grade band.</p>

          <h2>Why teach AI without a computer?</h2>
          <p>Unplugged activities help learners focus on ideas — representation, rules, examples, and feedback — without getting bogged down by syntax or devices. They are inclusive, low-cost, and ideal for classrooms with limited technology.</p>

          <h2>Before you teach — quick checklist</h2>
          <ul>
            <li><strong>Learning goals:</strong> pick 1–2 clear outcomes (pattern recognition, hypothesis testing, or ethical reflection).</li>
            <li><strong>Materials:</strong> prepare counters, paper, markers, and any printables from the printable pack.</li>
            <li><strong>Group size:</strong> many activities work best in pairs or small groups (3–5 students).</li>
            <li><strong>Time:</strong> 20–45 minutes per activity; combine two for a longer lesson.</li>
            <li><strong>Space:</strong> tabletop or floor space for sorting and movement activities.</li>
          </ul>

          <h2>Lesson structure (recommended)</h2>
          <ol>
            <li><strong>Intro (5 min):</strong> present the question or problem and the learning goal.</li>
            <li><strong>Activity (15–30 min):</strong> run the main hands-on task with clear roles and timing.</li>
            <li><strong>Reflection (5–10 min):</strong> discuss observations, patterns, and what a computer would need to 'see' the same thing.</li>
            <li><strong>Extension (optional):</strong> add a blended activity or small experiment if time allows.</li>
          </ol>

          <h2>Classroom tips & differentiation</h2>
          <ul>
            <li><strong>For younger learners:</strong> use concrete examples, short rounds, and many demonstration runs.</li>
            <li><strong>For older learners:</strong> add explicit mapping to models, introduce simple data tables, or include an ethics discussion.</li>
            <li><strong>Support learners with access needs:</strong> provide larger printables, tactile counters, or use pair roles that match strengths.</li>
            <li><strong>Assessment:</strong> use quick exit tickets: one sentence describing what the 'model' learned or one pattern observed.</li>
          </ul>

          <h2>Managing materials and prints</h2>
          <p>Printable packs are formatted for classroom reuse; print pages with multiple copies per sheet when possible. Reuse counters and laminates to save time and paper.</p>

          <h2>Safety, behaviour and group management</h2>
          <ul>
            <li>Set clear rules for sharing materials and speaking turns.</li>
            <li>Encourage a constructive culture: mistakes are data for learning.</li>
            <li>When activities involve sensitive topics (faces, identity), prompt students to think about privacy and respectful behaviour.</li>
          </ul>

          <div className="interactive-activity">
            <h3>Getting started: core principles</h3>
            <p>Start by asking questions: What does it mean for a machine to be "intelligent"? How can we write simple rules that let a machine classify or decide? Use the "What is AI?" lesson as the opener.</p>
            <Link to="/what-is-ai" className="back-link">Explore "What is AI?"</Link>
          </div>

          <p>By using imagination and simple materials, you can help learners explore how data, rules and feedback combine to make systems that behave 'intelligently'.</p>
        </div>
        <Link to="/" className="back-link">Back to All Lessons</Link>
      </div>
    </>
  )
}
