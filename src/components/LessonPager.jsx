import { Link } from 'react-router-dom'
import { LESSONS } from '../lib/catalog'

// Previous / next lesson links, in the order lessons appear in catalog.js.
export default function LessonPager({ current }) {
  const i = LESSONS.findIndex((l) => l.path === current)
  const prev = LESSONS[i - 1]
  const next = LESSONS[i + 1]
  return (
    <nav className="lesson-pager" aria-label="More lessons">
      {prev ? <Link to={prev.path} className="pager-link">← {prev.icon} {prev.title}</Link> : <span />}
      <Link to="/lessons" className="pager-all">All lessons</Link>
      {next ? <Link to={next.path} className="pager-link pager-next">{next.icon} {next.title} →</Link> : <span />}
    </nav>
  )
}
