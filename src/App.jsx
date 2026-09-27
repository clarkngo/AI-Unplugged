import { useEffect } from 'react'
import { Routes, Route, Outlet, Navigate, Link, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import WhatIsAI from './pages/WhatIsAI'
import HowToTeach from './pages/HowToTeach'
import Lessons from './pages/Lessons'
import Activities from './pages/Activities'
import BigIdeas from './pages/BigIdeas'
import Credits from './pages/Credits'
import MachineLearning from './pages/MachineLearning'
import ComputerVision from './pages/ComputerVision'
import NLP from './pages/NLP'
import GenerativeAI from './pages/GenerativeAI'
import AIEthics from './pages/AIEthics'
import Robotics from './pages/Robotics'
import STEMK12 from './pages/STEMK12'
import K1to4 from './pages/K1to4';
import K5to8 from './pages/K5to8';
import K9to12 from './pages/K9to12';
import Printables from './pages/Printables'
import PrintableSheet from './pages/PrintableSheet'
import NotFound from './pages/NotFound'

const SITE_NAME = 'AI Unplugged'

const ROUTES = [
  { path: '/', title: null, element: <Home /> },
  { path: '/what-is-ai', title: 'What is AI?', element: <WhatIsAI /> },
  { path: '/how-to-teach', title: 'How to Teach', element: <HowToTeach /> },
  { path: '/lessons', title: 'Lessons', element: <Lessons /> },
  { path: '/activities', title: 'Activities', element: <Activities /> },
  { path: '/big-ideas', title: 'The Five Big Ideas', element: <BigIdeas /> },
  { path: '/credits', title: 'Credits & License', element: <Credits /> },
  // Old URL: the Topics page became Big Ideas.
  { path: '/topics', title: 'The Five Big Ideas', element: <Navigate to="/big-ideas" replace /> },
  { path: '/machine-learning', title: 'Machine Learning', element: <MachineLearning /> },
  { path: '/computer-vision', title: 'Computer Vision', element: <ComputerVision /> },
  { path: '/nlp', title: 'Natural Language Processing', element: <NLP /> },
  { path: '/generative-ai', title: 'Generative AI', element: <GenerativeAI /> },
  { path: '/ai-ethics', title: 'AI Ethics', element: <AIEthics /> },
  { path: '/robotics', title: 'Robotics', element: <Robotics /> },
  { path: '/k12', title: 'Grade Pathways', element: <STEMK12 /> },
  { path: '/k-1-4', title: 'K 1–4', element: <K1to4 /> },
  { path: '/k-5-8', title: 'K 5–8', element: <K5to8 /> },
  { path: '/k-9-12', title: 'K 9–12', element: <K9to12 /> },
  { path: '/printables', title: 'Printables', element: <Printables /> },
  { path: '/printables/hexapawn', title: 'Sweet Learning Computer cards', element: <PrintableSheet slug="hexapawn" /> },
  { path: '/printables/intelligent-paper', title: 'Intelligent Paper rule sheet', element: <PrintableSheet slug="intelligent-paper" /> },
  { path: '/printables/story-dice', title: 'Story Dice tables', element: <PrintableSheet slug="story-dice" /> },
  { path: '/printables/next-word', title: 'Next-Word Machine cups', element: <PrintableSheet slug="next-word" /> },
  { path: '/printables/pixel-pictures', title: 'Pixel Pictures puzzle', element: <PrintableSheet slug="pixel-pictures" /> },
  { path: '/printables/fruit-sorter', title: 'Biased Fruit Sorter cards', element: <PrintableSheet slug="fruit-sorter" /> },
]

// HashRouter keeps the previous scroll position across navigations, and every
// page shares one <title>; reset both whenever the route changes. A `?a=<id>`
// query scrolls to that element instead (used to link to one activity).
function useRouteChangeEffects() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const route = ROUTES.find((r) => r.path === pathname)
    const title = route ? route.title : 'Page not found'
    document.title = title ? `${title} · 🔌 ${SITE_NAME}` : `🔌 ${SITE_NAME}`

    const target = new URLSearchParams(search).get('a')
    const el = target && document.getElementById(target)
    if (el) el.scrollIntoView({ block: 'start' })
    else window.scrollTo(0, 0)
  }, [pathname, search])
}

function AppLayout() {
  useRouteChangeEffects()

  return (
    <>
      <NavBar />
      <Outlet />
      <footer className="site-footer">
        <nav className="footer-links" aria-label="Site">
          <Link to="/lessons">Lessons</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/k12">Grade Pathways</Link>
          <Link to="/printables">Printables</Link>
          <Link to="/big-ideas">Big Ideas</Link>
          <Link to="/how-to-teach">How to Teach</Link>
          <Link to="/credits">Credits &amp; License</Link>
        </nav>
        <p>Made with 🔌 for curious minds, everywhere.</p>
        <p>
          Built by{' '}
          <a href="https://github.com/clarkngo" target="_blank" rel="noopener noreferrer">
            Clark Ngo
          </a>
        </p>
      </footer>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
