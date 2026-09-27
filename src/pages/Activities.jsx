import { useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityCard from '../components/ActivityCard'
import { ACTIVITIES, BIG_IDEAS, GRADE_BANDS } from '../lib/catalog'

// Filters live in the URL (?grade=k4&idea=learning) so a filtered list can be
// bookmarked or shared with other teachers.
export default function Activities() {
  const [params, setParams] = useSearchParams()
  const grade = params.get('grade') || ''
  const idea = params.get('idea') || ''

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const shown = ACTIVITIES.filter(
    (a) => (!grade || a.grades.includes(grade)) && (!idea || a.bigIdeas.includes(idea)),
  )

  return (
    <>
      <div className="header">
        <h1>🧰 Activities</h1>
        <p>Every hands-on activity on the site. Filter by grade band or by AI4K12 big idea.</p>
      </div>
      <Breadcrumbs trail="Activities" />
      <div className="container">
        <div className="filters" role="group" aria-label="Filter activities">
          <label>
            Grade band
            <select value={grade} onChange={(e) => setFilter('grade', e.target.value)}>
              <option value="">All grades</option>
              {GRADE_BANDS.map((g) => <option key={g.id} value={g.id}>{g.label}</option>)}
            </select>
          </label>
          <label>
            Big idea
            <select value={idea} onChange={(e) => setFilter('idea', e.target.value)}>
              <option value="">All big ideas</option>
              {BIG_IDEAS.map((b) => <option key={b.id} value={b.id}>{b.number}. {b.name}</option>)}
            </select>
          </label>
          <p className="muted" aria-live="polite">{shown.length} of {ACTIVITIES.length} activities</p>
        </div>
        <div className="activity-list">
          {shown.map((a) => <ActivityCard key={a.id} activity={a} />)}
        </div>
      </div>
    </>
  )
}
