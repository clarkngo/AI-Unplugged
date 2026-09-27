import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityCard from '../components/ActivityCard'
import { ACTIVITIES, BIG_IDEAS } from '../lib/catalog'

export default function BigIdeas() {
  return (
    <>
      <div className="header">
        <h1>🧭 The Five Big Ideas</h1>
        <p>How every activity maps to the AI4K12 &quot;Five Big Ideas in AI&quot; — the framework many AI curricula are built on.</p>
      </div>
      <Breadcrumbs trail="Big Ideas" />
      <div className="container">
        <div className="lesson-content">
          <p>
            The <a href="https://ai4k12.org/" target="_blank" rel="noopener noreferrer">AI4K12 Initiative</a> (a joint project of
            AAAI and CSTA) describes five big ideas every student should understand about AI. Use this page to plan a unit that
            covers all five, or to show how a lesson fits your standards.
          </p>
          <ol className="big-idea-toc">
            {BIG_IDEAS.map((b) => (
              <li key={b.id}><Link to={`/big-ideas?a=${b.id}`}>{b.icon} {b.name}</Link></li>
            ))}
          </ol>
          {BIG_IDEAS.map((b) => {
            const activities = ACTIVITIES.filter((a) => a.bigIdeas.includes(b.id))
            return (
              <section key={b.id} id={b.id} className="big-idea">
                <h2>{b.icon} {b.number}. {b.name}</h2>
                <p>{b.summary}</p>
                <div className="activity-list">
                  {activities.map((a) => <ActivityCard key={a.id} activity={a} />)}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
