import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ChattingPage from './pages/ChattingPage'

const App = () => {
  return (
    <div className='bg-[url("/src/assets/wallpaper.jpg")] bg-cover h-screen'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChattingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
