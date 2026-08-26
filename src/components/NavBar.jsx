import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/what-is-ai', label: 'What is AI?' },
  { to: '/how-to-teach', label: 'How to Teach' },
  { to: '/topics', label: 'Topics' },
  { to: '/k12', label: 'STEM K‑12' },
  { to: '/machine-learning', label: 'Machine Learning' },
  { to: '/computer-vision', label: 'Computer Vision' },
  { to: '/nlp', label: 'NLP' },
  { to: '/generative-ai', label: 'Generative AI' },
  { to: '/ai-ethics', label: 'AI Ethics' },
  { to: '/robotics', label: 'Robotics' },
]

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
  } catch {
    // ignore storage access errors (e.g. private browsing)
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore storage access errors
    }
  }, [theme])

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="emoji" aria-hidden="true">🔌</span> AI Unplugged
        </NavLink>
        <div className="nav-controls">
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
          <div className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
