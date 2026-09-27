import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="section-title">Getting Started</h2>
        <div className="lesson-grid">
          <Link to="/what-is-ai" className="lesson-card">
            <div className="icon">🧠</div>
            <h3>What is AI?</h3>
            <p>Discover the secrets of what makes a computer "smart"!</p>
          </Link>
          <Link to="/how-to-teach" className="lesson-card">
            <div className="icon">🎓</div>
            <h3>How to Teach AI Unplugged</h3>
            <p>A guide for educators and parents.</p>
          </Link>
        </div>

        <h2 className="section-title">STEM K‑12 Pathways</h2>
        <div className="lesson-grid">
          <Link to="/k12" className="lesson-card">
            <div className="icon">🧭</div>
            <h3>STEM K‑12</h3>
            <p>Curated pathways and printable packs for K–12 teachers and facilitators.</p>
          </Link>
          <Link to="/k-1-4" className="lesson-card">
            <div className="icon">🧩</div>
            <h3>K 1–4</h3>
            <p>Playful, unplugged introductions for early learners.</p>
          </Link>
          <Link to="/k-5-8" className="lesson-card">
            <div className="icon">🔧</div>
            <h3>K 5–8</h3>
            <p>Hands-on projects that mix unplugged and simple digital tools.</p>
          </Link>
          <Link to="/k-9-12" className="lesson-card">
            <div className="icon">🚀</div>
            <h3>K 9–12</h3>
            <p>Deeper explorations of models, ethics and creative AI.</p>
          </Link>
        </div>

        <h2 id="activities" className="section-title">Activities</h2>
        <div className="lesson-grid">
          <Link to="/machine-learning" className="lesson-card">
            <div className="icon">💡</div>
            <h3>Machine Learning</h3>
            <p>Learn how computers can learn from mistakes, just like you!</p>
          </Link>
          <Link to="/computer-vision" className="lesson-card">
            <div className="icon">👀</div>
            <h3>Computer Vision</h3>
            <p>How do computers see and understand the world around them?</p>
          </Link>
          <Link to="/nlp" className="lesson-card">
            <div className="icon">🗣️</div>
            <h3>Natural Language Processing</h3>
            <p>Ever wonder how your tablet understands what you say? Let's find out!</p>
          </Link>
          <Link to="/generative-ai" className="lesson-card">
            <div className="icon">🎨</div>
            <h3>Generative AI</h3>
            <p>Can a computer be creative? Let's explore how AI can create art, music, and stories.</p>
          </Link>
          <Link to="/ai-ethics" className="lesson-card">
            <div className="icon">🤝</div>
            <h3>AI Ethics</h3>
            <p>With great power comes great responsibility. Let's learn how to use AI fairly.</p>
          </Link>
          <Link to="/robotics" className="lesson-card">
            <div className="icon">🤖</div>
            <h3>Robotics</h3>
            <p>Discover how AI gives robots their "brains" and brings them to life.</p>
          </Link>
        </div>
      </div>
    </>
  )
}
