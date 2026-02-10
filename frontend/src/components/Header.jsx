import React from 'react'

const Header = () => {
  return (
    <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">☀️</span>
          <h1 className="text-2xl font-bold">SunSense</h1>
        </div>
        <p className="text-blue-100">Smart UV Protection Guide</p>
      </div>
    </header>
  )
}

export default Header