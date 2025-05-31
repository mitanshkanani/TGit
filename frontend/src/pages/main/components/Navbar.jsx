import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                <div className="text-xl font-bold text-gray-900">MyApp</div>
                </div>
                <div className="flex items-center space-x-4">
                <a href="/main/" className="text-gray-900 hover:text-blue-600">Home</a>
                <a href="/main/profile" className="text-gray-900 hover:text-blue-600">Profile</a>
                <a href="/main/project" className="text-gray-900 hover:text-blue-600">Projects</a>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
