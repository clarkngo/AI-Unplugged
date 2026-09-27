import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { PRINTABLES } from './PrintableSheet'

export default function Printables() {
  return (
    <>
      <div className="header">
        <h1>🖨️ Printables</h1>
        <p>Cut-out cards, rule sheets and tables for the activities — print them, or use your browser&apos;s print dialog to save a PDF.</p>
      </div>
      <Breadcrumbs trail="Printables" />
      <div className="container">
        <div className="lesson-grid">
          {PRINTABLES.map((p) => (
            <Link key={p.slug} to={`/printables/${p.slug}`} className="lesson-card">
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
