import { Link } from 'react-router-dom'
import { activityById, bigIdeaById, gradeById } from '../lib/catalog'

// Title plus the same at-a-glance facts for every activity: grade bands, time,
// AI4K12 big ideas, and the printable if there is one. Reads from catalog.js.
export default function ActivityHeader({ id }) {
  const a = activityById(id)
  return (
    <div className="activity-header">
      <h3>
        <span aria-hidden="true">{a.icon}</span> {a.title}
      </h3>
      <ul className="activity-meta" aria-label="About this activity">
        <li>
          <span className="meta-label">Grades</span>
          {a.grades.map((g) => (
            <Link key={g} to={gradeById(g).path} className="chip">{gradeById(g).label}</Link>
          ))}
        </li>
        <li>
          <span className="meta-label">Time</span>
          <span className="chip chip-plain">{a.minutes} min</span>
        </li>
        <li>
          <span className="meta-label">Big ideas</span>
          {a.bigIdeas.map((b) => (
            <Link key={b} to={`/big-ideas?a=${b}`} className="chip chip-idea">
              {bigIdeaById(b).number}. {bigIdeaById(b).name}
            </Link>
          ))}
        </li>
        {a.printable && (
          <li>
            <Link to={`/printables/${a.printable}`} className="chip chip-print">🖨️ Printable</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
