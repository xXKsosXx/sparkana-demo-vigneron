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

  const cx = 120
  const cy = 120
  const r = 80
  const rInner = 35

  return (
    <div className="relative flex flex-col items-center">
      <svg width="240" height="240" viewBox="0 0 240 240">
        {/* Cercle central */}
        <circle
          cx={cx} cy={cy} r={rInner}
          fill="#2a0002"
          stroke="#c5a059"
          strokeWidth="1"
        />
        <text
          x={cx} y={cy - 6}
          textAnchor="middle"
          fill="#c5a059"
          fontSize="8"
          fontFamily="Noto Serif"
          fontStyle="italic"
        >
          {nomVin.split(' ')[0]}
        </text>
        <text
          x={cx} y={cy + 8}
          textAnchor="middle"
          fill="#c5a059"
          fontSize="7"
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
          const rActive = isActive ? r + 12 : r

          const x1 = cx + rInner * Math.cos(startAngle)
          const y1 = cy + rInner * Math.sin(startAngle)
          const xa2 = cx + rActive * Math.cos(startAngle)
          const ya2 = cy + rActive * Math.sin(startAngle)
          const xa3 = cx + rActive * Math.cos(endAngle)
          const ya3 = cy + rActive * Math.sin(endAngle)
          const x4 = cx + rInner * Math.cos(endAngle)
          const y4 = cy + rInner * Math.sin(endAngle)

          const labelR = r + 22
          const lx = cx + labelR * Math.cos(midAngle)
          const ly = cy + labelR * Math.sin(midAngle)

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
                x={lx} y={ly + 4}
                textAnchor="middle"
                fontSize={isActive ? '14' : '11'}
                style={{ transition: 'font-size 0.3s ease' }}
              >
                {arome.icon}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Label arome actif */}
      <div className="h-8 flex items-center justify-center">
        {activeArome !== null ? (
          <span className="text-[#c5a059] text-xs tracking-widest uppercase font-medium">
            {aromes[activeArome].label}
          </span>
        ) : (
          <span className="text-[#9c8e89] text-[10px] tracking-widest uppercase">
            Survolez pour d&eacute;couvrir
          </span>
        )}
      </div>
    </div>
  )
}
