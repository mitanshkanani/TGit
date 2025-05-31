import React from 'react'
import Project from './pages/project/Project'
import Profile from './pages/profile/Profile'
const Main = () => {
  return (
    <>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <main className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900">Welcome to TGit</h1>
                <p className="mt-4 text-lg text-gray-600">
                This is the main page of the application.
                </p>
            </div>
            </main>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Project />
            <Profile />
        </div>
    </>
  )
}

export default Main
