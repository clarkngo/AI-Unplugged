import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import WhatIsAI from './pages/WhatIsAI'
import HowToTeach from './pages/HowToTeach'
import MachineLearning from './pages/MachineLearning'
import ComputerVision from './pages/ComputerVision'
import NLP from './pages/NLP'
import GenerativeAI from './pages/GenerativeAI'
import AIEthics from './pages/AIEthics'
import Robotics from './pages/Robotics'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/what-is-ai" element={<WhatIsAI />} />
        <Route path="/how-to-teach" element={<HowToTeach />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/nlp" element={<NLP />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ethics" element={<AIEthics />} />
        <Route path="/robotics" element={<Robotics />} />
      </Route>
    </Routes>
  )
}

export default App
