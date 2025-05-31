import React from 'react'

const Login = () => {
  return (
    <>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <main className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900">Login to TGit</h1>
                <p className="mt-4 text-lg text-gray-600">
                Please enter your credentials to access your account.
                </p>
            </div>
            </main>
        </div>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            {/* Login form goes here */}
        </div>
    </>
  )
}

export default Login
