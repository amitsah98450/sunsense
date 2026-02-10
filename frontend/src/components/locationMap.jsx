import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import UVDisplay from './UVDisplay'
import SunscreenRecommendation from './SunscreenRecommendation'

const LocationMap = () => {
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [uvData, setUvData] = useState(null)

    const fetchUVData = async (lat, lng) => {
        try {
            setLoading(true)
            setError("")

            const response = await axios.get('http://localhost:3000/api/uv', {
                params: {
                    lat: lat,
                    lng: lng
                }
            })

            setUvData(response.data)
            setLoading(false)
            console.log("UV Data received:", response.data)

        } catch (err) {
            setError(err.response?.data?.error || err.message)
            setLoading(false)
            console.error("Error fetching UV data:", err)
        }
    }

    function clickHandler() {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            console.log(latitude, longitude)
            setLatitude(latitude)
            setLongitude(longitude)
            setError("")

            fetchUVData(latitude, longitude)

        }, (error) => {
            console.error(error)
            setLoading(false)
            setError(error.message)
        })
    }

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-blue-600 to-blue-800 p-6">
                    <h1 className="text-3xl font-bold text-white text-center">UV Index Checker</h1>
                    <p className="text-blue-100 text-center mt-2">Get real-time UV data for your location</p>
                </div>

                {/* Content */}
                <div className="p-6">
                    <button
                        className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full disabled:opacity-50 transition-colors'
                        onClick={clickHandler}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "📍 Get UV Recommendation"}
                    </button>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-lg">
                            <p className="text-red-700 font-semibold">❌ Error</p>
                            <p className="text-red-600 mt-1">{error}</p>
                        </div>
                    )}

                    {latitude && longitude && !loading && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Your Location</h2>
                            <p className="text-gray-700"><strong>Latitude:</strong> {latitude.toFixed(4)}</p>
                            <p className="text-gray-700"><strong>Longitude:</strong> {longitude.toFixed(4)}</p>
                        </div>
                    )}

                    {loading && (
                        <div className="mt-6 text-center">
                            <div className="inline-block">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                            </div>
                            <p className="text-gray-600 mt-4 font-semibold">Fetching UV data...</p>
                        </div>
                    )}

                    {uvData && !loading && (
                        <>
                            <UVDisplay uvData={uvData} />
                            <SunscreenRecommendation 
                                uvIndex={uvData.result.uv}
                                latitude={latitude}
                                longitude={longitude}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LocationMap