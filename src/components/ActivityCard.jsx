import { Link } from 'react-router-dom'
import { activityLink, bigIdeaById, gradeById } from '../lib/catalog'

export default function ActivityCard({ activity: a }) {
  return (
    <Link to={activityLink(a)} className="activity-card">
      <span className="activity-card-icon" aria-hidden="true">{a.icon}</span>
      <span className="activity-card-body">
        <strong>{a.title}</strong>
        <span className="activity-card-summary">{a.summary}</span>
        <span className="activity-card-meta">
          {a.grades.map((g) => gradeById(g).label).join(' · ')} · {a.minutes} min
          {a.printable ? ' · 🖨️' : ''}
        </span>
        <span className="activity-card-ideas">
          {a.bigIdeas.map((b) => bigIdeaById(b).name).join(' · ')}
        </span>
      </span>
    </Link>
  )
}
