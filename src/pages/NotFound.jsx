import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container">
      <div className="not-found">
        <div className="icon" aria-hidden="true">🔍</div>
        <h1>Page not found</h1>
        <p>We couldn't find that lesson. Let's get you back on track.</p>
        <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
      </div>
    </div>
  )
}
