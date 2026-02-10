import React from 'react'

const UVDisplay = ({ uvData }) => {
  if (!uvData || !uvData.result) return null

  const uv = uvData.result.uv
  const uvMax = uvData.result.uv_max
  const safeExposureTime = uvData.result.safe_exposure_time

  // Determine UV level and color
  const getUVLevel = (index) => {
    if (index <= 2) return { level: 'Low', color: 'green', emoji: '✅' }
    if (index <= 5) return { level: 'Moderate', color: 'yellow', emoji: '⚠️' }
    if (index <= 7) return { level: 'High', color: 'orange', emoji: '🔶' }
    return { level: 'Very High', color: 'red', emoji: '🔴' }
  }

  const currentLevel = getUVLevel(uv)
  const maxLevel = getUVLevel(uvMax)

  return (
    <div className="mt-6 p-6 bg-linear-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">UV Index Report</h2>

      {/* Current UV Index */}
      <div className={`bg-${currentLevel.color}-100 border-l-4 border-${currentLevel.color}-500 p-4 rounded-lg mb-4`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Current UV Index</span>
          <span className="text-2xl">{currentLevel.emoji}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-800">{uv.toFixed(1)}</span>
          <span className={`text-lg font-semibold text-${currentLevel.color}-700`}>{currentLevel.level}</span>
        </div>
      </div>

      {/* Max UV Index */}
      <div className={`bg-${maxLevel.color}-100 border-l-4 border-${maxLevel.color}-500 p-4 rounded-lg mb-6`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Max UV Today</span>
          <span className="text-2xl">{maxLevel.emoji}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-800">{uvMax.toFixed(1)}</span>
          <span className={`text-lg font-semibold text-${maxLevel.color}-700`}>{maxLevel.level}</span>
        </div>
      </div>

      {/* Safe Exposure Time */}
      {safeExposureTime && safeExposureTime.st1 && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Safe Exposure Time (Without Protection)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-xs">Skin Type I-II</p>
              <p className="text-lg font-bold text-blue-700">{Math.round(safeExposureTime.st1)} min</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs">Skin Type VI</p>
              <p className="text-lg font-bold text-blue-700">{Math.round(safeExposureTime.st6)} min</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UVDisplay