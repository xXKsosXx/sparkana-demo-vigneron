'use client'

import { useEffect, useState } from 'react'

interface Props {
  temperature: number
  vin: 'rouge' | 'blanc' | 'rose'
}

export default function TemperatureService({ temperature, vin }: Props) {
  const [animated, setAnimated] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const color = {
    rouge: '#8B0000',
    blanc: '#4a90d9',
    rose: '#FF6B6B',
  }[vin]

  const mercureHeight = Math.min((temperature / 20) * 100, 100)

  return (
    <div
      className="inline-flex items-center gap-3 px-3 py-2 cursor-help"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}40`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thermometre SVG */}
      <svg width="16" height="32" viewBox="0 0 16 32">
        <rect
          x="6" y="2" width="4" height="20"
          rx="2" ry="2"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <circle
          cx="8" cy="26" r="4"
          fill={color}
          opacity={animated ? 1 : 0}
          style={{ transition: 'opacity 0.5s ease' }}
        />
        <rect
          x="7"
          y={22 - (18 * mercureHeight) / 100}
          width="2"
          height={animated ? (18 * mercureHeight) / 100 + 4 : 4}
          rx="1"
          fill={color}
          style={{ transition: 'height 1.5s ease, y 1.5s ease' }}
        />
        {[0, 6, 12, 18].map((yPos, i) => (
          <line
            key={i}
            x1="10" y1={4 + yPos}
            x2="12" y2={4 + yPos}
            stroke={color}
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
      </svg>

      <div>
        <div
          className="text-xs font-bold tracking-widest"
          style={{ color }}
        >
          {temperature}&deg;C
        </div>
        <div
          className="text-[9px] tracking-wider uppercase"
          style={{ color: `${color}90` }}
        >
          {isHovered ? getConseil(vin) : 'Temp\u00e9rature de service'}
        </div>
      </div>
    </div>
  )
}

function getConseil(vin: 'rouge' | 'blanc' | 'rose'): string {
  const conseils = {
    rouge: 'Cave fra\u00eeche 1h avant',
    blanc: 'Sortir 15min du frigo',
    rose: 'Bien frais, pas glac\u00e9',
  }
  return conseils[vin]
}
