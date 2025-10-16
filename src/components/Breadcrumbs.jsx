import { Link } from 'react-router-dom'

export default function Breadcrumbs({ trail }) {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {trail ? ` / ${trail}` : null}
    </div>
  )
}
