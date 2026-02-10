import React from 'react'
import { useState } from 'react'
import LocationMap from '../components/locationMap'

const Home = () => {
  const [showUVChecker, setShowUVChecker] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      
      {!showUVChecker ? (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <span className="text-7xl">☀️</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Protect Your Skin from UV Rays
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get real-time UV index recommendations for your location and know exactly how much sun protection you need today.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <span className="text-4xl mb-2">📍</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Location Based</h3>
              <p className="text-gray-600">Get UV data for your exact location using geolocation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <span className="text-4xl mb-2">🛡️</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">Personalized sunscreen SPF recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <span className="text-4xl mb-2">📊</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Real-Time Data</h3>
              <p className="text-gray-600">Current and maximum UV index for today</p>
            </div>
          </div>

          
          <button
            onClick={() => setShowUVChecker(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Check UV Index Now
          </button>
        </div>
      ) : (
        <div className="py-8">
          <div className="max-w-md mx-auto mb-6">
            <button
              onClick={() => setShowUVChecker(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold w-full ml-1"
            >
              ← Back to Home
            </button>
          </div>
          <LocationMap />
        </div>
      )}
    </div>
  )
}

export default Home