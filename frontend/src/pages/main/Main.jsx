import React from 'react'
import Project from './pages/project/Project'
import Profile from './pages/profile/Profile'
import Start from './pages/start/Start'
import Navbar from './components/Navbar'
import Details from './pages/detail/Details'
import Chat from './pages/chat/Chat'
import { Routes,Route } from 'react-router-dom'
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </div>
        
    </>
  )
}

export default Main
