import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Topics() {
  return (
    <>
      <div className="header"><h1>📚 AI Topics</h1><p>A friendly map of the big ideas behind AI — pick a topic and jump into the activities that bring it to life.</p></div>
      <Breadcrumbs trail="Topics" />
      <div className="container">
        <div className="lesson-content">
          <p>Not sure where to start? These are the core ideas we come back to again and again. Use them to plan a lesson sequence, or just follow your curiosity.</p>

          <ul className="topics-list">
            <li>
              <h3>🧩 Algorithms &amp; Decomposition</h3>
              <p>Breaking a big problem into small, clear steps — start with <Link to="/what-is-ai">What is AI?</Link></p>
            </li>

            <li>
              <h3>🗂️ Data &amp; Representation</h3>
              <p>How we describe the world so a computer can use it: counts, images, words, and labels.</p>
            </li>

            <li>
              <h3>🔎 Patterns &amp; Models</h3>
              <p>Spotting patterns and turning them into rules — the foundation of <Link to="/machine-learning">Machine Learning</Link>.</p>
            </li>

            <li>
              <h3>🧭 Search &amp; Strategy</h3>
              <p>Games and puzzles where a computer weighs its options and picks a move.</p>
            </li>

            <li>
              <h3>💡 Machine Learning</h3>
              <p>Learning from examples instead of instructions — try the <Link to="/machine-learning">Machine Learning</Link> activity.</p>
            </li>

            <li>
              <h3>👀 Perception: Vision &amp; Language</h3>
              <p>How machines make sense of pictures and words — see <Link to="/computer-vision">Computer Vision</Link> and <Link to="/nlp">NLP</Link>.</p>
            </li>

            <li>
              <h3>🤖 Sensing &amp; Robotics</h3>
              <p>Connecting what a robot senses to what it does — explore <Link to="/robotics">Robotics</Link>.</p>
            </li>

            <li>
              <h3>🤝 Ethics &amp; Society</h3>
              <p>Fairness, privacy, and the real-world impact of AI — see <Link to="/ai-ethics">AI Ethics</Link>.</p>
            </li>

            <li>
              <h3>🎨 Creativity &amp; Generative Models</h3>
              <p>Using AI to make new art, music, and stories — see <Link to="/generative-ai">Generative AI</Link>.</p>
            </li>

            <li>
              <h3>⚖️ Evaluation &amp; Bias</h3>
              <p>Checking a model's work and watching for unfair or unexpected results.</p>
            </li>
          </ul>

          <p className="muted">Teachers and parents: pair these topics with <Link to="/how-to-teach">How to Teach AI Unplugged</Link> or the <Link to="/k12">STEM K‑12</Link> pathways to build a full lesson sequence.</p>
        </div>
      </div>
    </>
  )
}
