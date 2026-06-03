import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import SkillBarter from './pages/Marketplace'
import OAUBrain from './pages/OAUBrain'
import SpaceGrid from './pages/SpaceGrid'
import Marketplace from './pages/Store'
import StudentProfile from './pages/StudentProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barter" element={<SkillBarter />} />
        <Route path="/brain" element={<OAUBrain />} />
        <Route path="/grid" element={<SpaceGrid />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
