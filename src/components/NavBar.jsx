import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">AI Adventures</Link>
        <div className="nav-links">
          <Link to="/what-is-ai">What is AI?</Link>
          <Link to="/machine-learning">Machine Learning</Link>
          <Link to="/computer-vision">Computer Vision</Link>
          <Link to="/nlp">NLP</Link>
        </div>
      </div>
    </nav>
  )
}
