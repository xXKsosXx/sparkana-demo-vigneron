'use client'

import { useState } from 'react'

interface Arome {
  label: string
  angle: number
  color: string
  icon: string
}

interface Props {
  aromes: Arome[]
  nomVin: string
}

export default function RoueAromes({ aromes, nomVin }: Props) {
  const [activeArome, setActiveArome] = useState<number | null>(null)

  const cx = 160
  const cy = 150
  const r = 100
  const rInner = 42

  return (
    <div className="relative flex flex-col items-center">
      <svg width="320" height="320" viewBox="0 0 320 320">
        {/* Cercle central */}
        <circle
          cx={cx} cy={cy} r={rInner}
          fill="#2a0002"
          stroke="#c5a059"
          strokeWidth="1.5"
        />
        <text
          x={cx} y={cy - 6}
          textAnchor="middle"
          fill="#c5a059"
          fontSize="11"
          fontFamily="Noto Serif"
          fontStyle="italic"
        >
          {nomVin.split(' ')[0]}
        </text>
        <text
          x={cx} y={cy + 10}
          textAnchor="middle"
          fill="#c5a059"
          fontSize="9"
          fontFamily="Noto Serif"
          fontStyle="italic"
        >
          {nomVin.split(' ').slice(1).join(' ')}
        </text>

        {/* Segments aromes */}
        {aromes.map((arome, i) => {
          const angleStep = (2 * Math.PI) / aromes.length
          const startAngle = i * angleStep - Math.PI / 2
          const endAngle = (i + 1) * angleStep - Math.PI / 2
          const midAngle = (startAngle + endAngle) / 2

          const isActive = activeArome === i
          const rActive = isActive ? r + 14 : r

          const x1 = cx + rInner * Math.cos(startAngle)
          const y1 = cy + rInner * Math.sin(startAngle)
          const xa2 = cx + rActive * Math.cos(startAngle)
          const ya2 = cy + rActive * Math.sin(startAngle)
          const xa3 = cx + rActive * Math.cos(endAngle)
          const ya3 = cy + rActive * Math.sin(endAngle)
          const x4 = cx + rInner * Math.cos(endAngle)
          const y4 = cy + rInner * Math.sin(endAngle)

          // Place icon at center of segment (between inner and outer radius)
          const iconR = (rInner + rActive) / 2
          const ix = cx + iconR * Math.cos(midAngle)
          const iy = cy + iconR * Math.sin(midAngle)

          return (
            <g
              key={i}
              onMouseEnter={() => setActiveArome(i)}
              onMouseLeave={() => setActiveArome(null)}
              style={{ cursor: 'pointer' }}
            >
              <path
                d={`M ${x1} ${y1} L ${xa2} ${ya2} A ${rActive} ${rActive} 0 0 1 ${xa3} ${ya3} L ${x4} ${y4} A ${rInner} ${rInner} 0 0 0 ${x1} ${y1}`}
                fill={isActive ? arome.color : `${arome.color}80`}
                stroke="#210f07"
                strokeWidth="1.5"
                style={{ transition: 'all 0.3s ease' }}
              />
              <text
                x={ix} y={iy + 5}
                textAnchor="middle"
                fontSize={isActive ? '22' : '18'}
                style={{ transition: 'font-size 0.3s ease', pointerEvents: 'none' }}
              >
                {arome.icon}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Label arome actif */}
      <div className="h-6 flex items-center justify-center -mt-2">
        {activeArome !== null ? (
          <span className="text-[#c5a059] text-sm tracking-widest uppercase font-medium">
            {aromes[activeArome].label}
          </span>
        ) : (
          <span className="text-[#9c8e89] text-xs tracking-widest uppercase">
            Survolez pour d&eacute;couvrir
          </span>
        )}
      </div>
    </div>
  )
}
