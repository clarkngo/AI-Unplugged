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
import K1to4 from './pages/K1to4'
import K5to8 from './pages/K5to8'
import K9to12 from './pages/K9to12'
import STEMK12 from './pages/STEMK12'

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
  <Route path="/k-1-4" element={<K1to4 />} />
  <Route path="/k-5-8" element={<K5to8 />} />
  <Route path="/k-9-12" element={<K9to12 />} />
    <Route path="/k12" element={<STEMK12 />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ethics" element={<AIEthics />} />
        <Route path="/robotics" element={<Robotics />} />
      </Route>
    </Routes>
  )
}

export default App
