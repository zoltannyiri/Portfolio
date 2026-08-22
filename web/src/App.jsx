import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SeoManager from './components/SeoManager'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import ProjectsScreen from './pages/ProjectsScreen/ProjectScreen'
import ContactScreen from './pages/ContactScreen/ContactScreen'
import AboutScreen from './pages/AboutScreen/AboutScreen'
import ResumeScreen from './pages/ResumeScreen/ResumeScreen'
import PricesScreen from './pages/PricesScreen/PricesScreen'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SeoManager />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/resume" element={<ResumeScreen />} />
          <Route path="/prices" element={<PricesScreen />} />
        </Routes>
        <Analytics />
      </Router>
    </LanguageProvider>
  )
}

export default App
