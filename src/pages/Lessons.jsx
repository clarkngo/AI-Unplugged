import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { LESSONS, ACTIVITIES, activityLink } from '../lib/catalog'

export default function Lessons() {
  return (
    <>
      <div className="header">
        <h1>📚 Lessons</h1>
        <p>Seven short lessons, each with hands-on activities. Start with &quot;What is AI?&quot;, then go in any order.</p>
      </div>
      <Breadcrumbs trail="Lessons" />
      <div className="container">
        <div className="lesson-grid">
          {LESSONS.map((lesson) => (
            <div key={lesson.path} className="lesson-card lesson-card-static">
              <div className="icon" aria-hidden="true">{lesson.icon}</div>
              <h2 className="card-title"><Link to={lesson.path}>{lesson.title}</Link></h2>
              <p>{lesson.blurb}</p>
              <ul className="card-activity-list">
                {ACTIVITIES.filter((a) => a.lesson === lesson.path).map((a) => (
                  <li key={a.id}><Link to={activityLink(a)}>{a.icon} {a.title}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
