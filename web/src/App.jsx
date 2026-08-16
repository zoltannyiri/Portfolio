import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import ProjectsScreen from './pages/ProjectsScreen/ProjectScreen'
import ContactScreen from './pages/ContactScreen/ContactScreen'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        {/* <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} /> */}
      </Routes>
    </Router>
  )
}

export default App
