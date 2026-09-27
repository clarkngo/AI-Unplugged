import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// `trail` is a string for a single level, or an array whose items are either
// a string (the current page, not linked) or { label, to } for a parent page.
export default function Breadcrumbs({ trail }) {
  const items = trail ? (Array.isArray(trail) ? trail : [trail]) : []

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <Fragment key={index}>
            {' / '}
            {typeof item === 'string' ? (
              <span aria-current={isLast ? 'page' : undefined}>{item}</span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
