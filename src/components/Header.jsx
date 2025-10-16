import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <h1>� AI Unplugged</h1>
      <p>Welcome to a world of fun and learning about Artificial Intelligence!</p>
      <div className="cta-group">
        <Link to="/what-is-ai" className="btn">Start with "What is AI?"</Link>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            const el = document.getElementById('activities')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          Browse Activities
        </button>
      </div>
    </div>
  )
}
