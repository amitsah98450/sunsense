import React from 'react'

const SunscreenRecommendation = ({ uvIndex, latitude, longitude }) => {
  if (uvIndex === null || uvIndex === undefined) return null

  const getRecommendation = (uv) => {
    if (uv <= 2) {
      return {
        spf: 'SPF 15+',
        category: 'Low Protection',
        description: 'Minimal sun protection needed',
        tips: [
          'You can safely stay in the sun',
          'Wear light clothing if spending extended time outside',
          'Sunscreen is optional but recommended'
        ],
        icon: '☀️'
      }
    } else if (uv <= 5) {
      return {
        spf: 'SPF 30+',
        category: 'Moderate Protection',
        description: 'Standard sun protection recommended',
        tips: [
          'Apply sunscreen SPF 30+ generously',
          'Reapply every 2 hours',
          'Wear a hat and sunglasses',
          'Seek shade during peak hours (10am-4pm)'
        ],
        icon: '⚠️'
      }
    } else if (uv <= 7) {
      return {
        spf: 'SPF 50+',
        category: 'High Protection',
        description: 'Strong sun protection essential',
        tips: [
          'Use SPF 50+ sunscreen',
          'Apply 15 minutes before sun exposure',
          'Reapply every 1.5 hours, especially after swimming',
          'Wear protective clothing, hat, and UV sunglasses',
          'Limit time in direct sun',
          'Use sun-protective swimwear if swimming'
        ],
        icon: '🔶'
      }
    } else {
      return {
        spf: 'SPF 50+ Mineral',
        category: 'Very High Protection',
        description: 'Maximum sun protection required',
        tips: [
          'Apply mineral sunscreen SPF 50+ (zinc oxide/titanium dioxide)',
          'Apply generously and reapply every hour',
          'Avoid sun exposure between 10am-4pm if possible',
          'Wear long-sleeved shirts, wide-brimmed hat',
          'Use umbrella or seek shade',
          'Consider staying indoors during peak hours'
        ],
        icon: '🔴'
      }
    }
  }

  const recommendation = getRecommendation(uvIndex)

  return (
    <div className="mt-6 p-6 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-300 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{recommendation.icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sunscreen Recommendation</h2>
          <p className="text-gray-600">{recommendation.description}</p>
        </div>
      </div>

      {/* SPF Recommendation Box */}
      <div className="bg-white border-2 border-orange-400 rounded-lg p-4 mb-6 text-center">
        <p className="text-gray-600 font-semibold mb-1">Recommended SPF</p>
        <p className="text-4xl font-bold text-orange-600">{recommendation.spf}</p>
        <p className="text-gray-700 font-semibold mt-2">{recommendation.category}</p>
      </div>

      {/* Tips */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">☑️ Tips & Guidelines</h3>
        <ul className="space-y-2">
          {recommendation.tips.map((tip, index) => (
            <li key={index} className="flex gap-3 text-gray-700">
              <span className="text-orange-500 font-bold">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Location Info */}
      <div className="mt-6 pt-4 border-t border-orange-200 text-sm text-gray-600">
        <p>📍 <strong>Your Location:</strong> {latitude?.toFixed(4)}, {longitude?.toFixed(4)}</p>
      </div>
    </div>
  )
}

export default SunscreenRecommendation