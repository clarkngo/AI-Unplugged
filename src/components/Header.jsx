import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <h1><span className="emoji" aria-hidden="true">🔌</span> AI Unplugged</h1>
      <p>Welcome to a world of fun and learning about Artificial Intelligence!</p>
      <div className="cta-group">
        <Link to="/what-is-ai" className="btn">Start with "What is AI?"</Link>
        <Link to="/activities" className="btn btn-secondary">Browse Activities</Link>
      </div>
    </div>
  )
}
