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
          <p>If you are planning lessons by age group, see our dedicated <Link to="/k12">STEM K‑12</Link> page which contains curated pathways and printable packs for each grade band.</p>
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
