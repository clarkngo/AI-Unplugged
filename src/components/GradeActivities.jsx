import { Link } from 'react-router-dom'
import { ACTIVITIES, activityLink } from '../lib/catalog'

// Every activity tagged for a grade band, from catalog.js.
export default function GradeActivities({ grade }) {
  return (
    <ul className="grade-activities">
      {ACTIVITIES.filter((a) => a.grades.includes(grade)).map((a) => (
        <li key={a.id}>
          <Link to={activityLink(a)}>{a.icon} {a.title}</Link> — {a.summary}
        </li>
      ))}
    </ul>
  )
}
