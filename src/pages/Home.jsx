import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { LESSONS, GRADE_BANDS, ACTIVITIES } from '../lib/catalog'

const BAND_BLURBS = {
  k4: 'Playful, unplugged introductions for early learners.',
  58: 'Hands-on projects that mix unplugged and simple digital tools.',
  912: 'Deeper explorations of models, ethics and creative AI.',
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="section-title">Start here</h2>
        <div className="lesson-grid">
          <Link to="/how-to-teach" className="lesson-card">
            <div className="icon">🎓</div>
            <h3>How to Teach</h3>
            <p>Pacing, materials and tips for educators and parents.</p>
          </Link>
          <Link to="/activities" className="lesson-card">
            <div className="icon">🧰</div>
            <h3>All {ACTIVITIES.length} Activities</h3>
            <p>Find an activity by grade band or big idea.</p>
          </Link>
          <Link to="/printables" className="lesson-card">
            <div className="icon">🖨️</div>
            <h3>Printables</h3>
            <p>Cut-out cards, rule sheets and tables for the activities.</p>
          </Link>
        </div>

        <h2 id="lessons" className="section-title">Lessons</h2>
        <div className="lesson-grid">
          {LESSONS.map((lesson) => (
            <Link key={lesson.path} to={lesson.path} className="lesson-card">
              <div className="icon">{lesson.icon}</div>
              <h3>{lesson.title}</h3>
              <p>{lesson.blurb}</p>
            </Link>
          ))}
        </div>

        <h2 className="section-title">Grade Pathways</h2>
        <div className="lesson-grid">
          {GRADE_BANDS.map((band) => (
            <Link key={band.id} to={band.path} className="lesson-card">
              <div className="icon">{{ k4: '🧩', 58: '🔧', 912: '🚀' }[band.id]}</div>
              <h3>{band.label}</h3>
              <p>{BAND_BLURBS[band.id]}</p>
            </Link>
          ))}
          <Link to="/big-ideas" className="lesson-card">
            <div className="icon">🧭</div>
            <h3>The Five Big Ideas</h3>
            <p>See how every activity maps to the AI4K12 framework.</p>
          </Link>
        </div>
      </div>
    </>
  )
}
