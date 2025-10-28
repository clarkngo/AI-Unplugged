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
            <h2>What is AI?</h2>
            <p>Discover the secrets of what makes a computer "smart"!</p>
          </Link>
          <Link to="/how-to-teach" className="lesson-card">
            <div className="icon">🎓</div>
            <h2>How to Teach AI Unplugged</h2>
            <p>A guide for educators and parents.</p>
          </Link>
        </div>

        <h2 className="section-title">STEM K‑12 Pathways</h2>
        <div className="lesson-grid">
          <Link to="/k12" className="lesson-card">
            <div className="icon">🧭</div>
            <h2>STEM K‑12</h2>
            <p>Curated pathways and printable packs for K–12 teachers and facilitators.</p>
          </Link>
          <Link to="/k-1-4" className="lesson-card">
            <div className="icon">🧩</div>
            <h2>K 1–4</h2>
            <p>Playful, unplugged introductions for early learners.</p>
          </Link>
          <Link to="/k-5-8" className="lesson-card">
            <div className="icon">🔧</div>
            <h2>K 5–8</h2>
            <p>Hands-on projects that mix unplugged and simple digital tools.</p>
          </Link>
          <Link to="/k-9-12" className="lesson-card">
            <div className="icon">🚀</div>
            <h2>K 9–12</h2>
            <p>Deeper explorations of models, ethics and creative AI.</p>
          </Link>
        </div>

        <h2 id="activities" className="section-title">Activities</h2>
        <div className="lesson-grid">
          <Link to="/machine-learning" className="lesson-card">
            <div className="icon">💡</div>
            <h2>Machine Learning</h2>
            <p>Learn how computers can learn from mistakes, just like you!</p>
          </Link>
          <Link to="/computer-vision" className="lesson-card">
            <div className="icon">👀</div>
            <h2>Computer Vision</h2>
            <p>How do computers see and understand the world around them?</p>
          </Link>
          <Link to="/nlp" className="lesson-card">
            <div className="icon">🗣️</div>
            <h2>Natural Language Processing</h2>
            <p>Ever wonder how your tablet understands what you say? Let's find out!</p>
          </Link>
          <Link to="/generative-ai" className="lesson-card">
            <div className="icon">🎨</div>
            <h2>Generative AI</h2>
            <p>Can a computer be creative? Let's explore how AI can create art, music, and stories.</p>
          </Link>
          <Link to="/ai-ethics" className="lesson-card">
            <div className="icon">🤝</div>
            <h2>AI Ethics</h2>
            <p>With great power comes great responsibility. Let's learn how to use AI fairly.</p>
          </Link>
          <Link to="/robotics" className="lesson-card">
            <div className="icon">🤖</div>
            <h2>Robotics</h2>
            <p>Discover how AI gives robots their "brains" and brings them to life.</p>
          </Link>
        </div>
      </div>
    </>
  )
}
