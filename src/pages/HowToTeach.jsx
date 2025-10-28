import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function HowToTeach() {
  return (
    <>
      <div className="header">
        <h1>🎓 How to Teach AI Unplugged 🎒</h1>
        <p>A guide for educators and parents.</p>
      </div>
      <Breadcrumbs trail="How to Teach AI Unplugged" />
      <div className="container">
        <div className="lesson-content">
          <h2 id="stem-k12">STEM K‑12</h2>
          <p>Curriculum pathways and ideas by age group — three entry points to plan lessons and choose activities that fit your students.</p>
          <div className="k12-grid">
            <div className="k12-card">
              <div className="k12-icon">🧩</div>
              <h3>K 1–4 — AI‑Unplugged</h3>
              <p>Hands-on, play-based activities that introduce core ideas with minimal reading — perfect for early learners.</p>
              <Link to="/what-is-ai" className="back-link">Explore K 1–4</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🔧</div>
              <h3>K 5–8 — AI‑Infused</h3>
              <p>Projects that mix unplugged tasks with simple tools or group challenges to explore how AI appears in familiar tech.</p>
              <Link to="/machine-learning" className="back-link">Explore K 5–8</Link>
            </div>

            <div className="k12-card">
              <div className="k12-icon">🚀</div>
              <h3>K 9–12 — AI‑Powered</h3>
              <p>Deeper explorations of models, ethics, and creative AI — activities that prepare students for advanced study.</p>
              <Link to="/ai-ethics" className="back-link">Explore K 9–12</Link>
            </div>
          </div>

          <h1>Why Teach AI Without a Computer?</h1>
          <p>AI Unplugged activities are designed to teach the core concepts of Artificial Intelligence without using computers. This approach has several benefits:</p>
          <ul>
            <li><strong>Accessible to Everyone:</strong> No need for expensive hardware or high-speed internet.</li>
            <li><strong>Focus on Concepts:</strong> By removing the technical jargon and code, learners can focus on the fundamental ideas behind AI.</li>
            <li><strong>Engaging and Fun:</strong> Activities are hands-on, collaborative, and often feel like playing a game.</li>
            <li><strong>Develops Computational Thinking:</strong> These activities build skills like problem-solving, decomposition, and algorithmic thinking.</li>
          </ul>

          <div className="interactive-activity">
            <h3>Getting Started: Core Principles</h3>
            <p>The best way to start is by exploring the fundamental questions. What does it mean for a machine to be "intelligent"? How can we give instructions to a computer? Our "What is AI?" lesson is a great starting point.</p>
            <Link to="/what-is-ai" className="back-link">Explore "What is AI?"</Link>
          </div>

          <p>If you want short, hands-on activities to try in class, visit the Activities section (or the All Lessons page) where each lesson contains a focused activity and clear instructions for teachers.</p>
          <p>By using imagination and simple materials, you can unlock the complex world of AI for learners of all ages!</p>
        </div>
        <Link to="/" className="back-link">Back to All Lessons</Link>
      </div>
    </>
  )
}
