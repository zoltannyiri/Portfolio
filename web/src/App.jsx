import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import ProjectsScreen from './pages/ProjectsScreen/ProjectScreen'
import ContactScreen from './pages/ContactScreen/ContactScreen'
import AboutScreen from './pages/AboutScreen/AboutScreen'
import ResumeScreen from './pages/ResumeScreen/ResumeScreen'
import PricesScreen from './pages/PricesScreen/PricesScreen'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/resume" element={<ResumeScreen />} />
        <Route path="/prices" element={<PricesScreen />} />
        {/* <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} /> */}
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
