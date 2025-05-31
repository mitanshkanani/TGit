import React from 'react'

const Friends = () => {
  return (
    <>
        <div className="min-h-screen bg-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-black mb-6">Friends</h1>
            <p className="text-gray-600 mb-4">Your friends list is currently empty.</p>
            <button
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                onClick={() => alert('Feature coming soon!')}
            >
                Add Friends
            </button>
            </div>
        </div>
    </>
  )
}

export default Friends
