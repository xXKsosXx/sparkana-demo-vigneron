'use client'

import { useEffect, useState } from 'react'
import { Wind, Sun, Cloud, CloudRain } from 'lucide-react'

interface MeteoData {
  temp: number
  windSpeed: number
  description: string
  code: number
}

export default function MeteoTerroir() {
  const [meteo, setMeteo] = useState<MeteoData | null>(null)
  const [loading, setLoading] = useState(true)

  const LAT = 43.7667
  const LON = 4.5167

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh`
    )
      .then((r) => r.json())
      .then((data) => {
        const current = data.current
        setMeteo({
          temp: Math.round(current.temperature_2m),
          windSpeed: Math.round(current.wind_speed_10m),
          code: current.weather_code,
          description: getDescription(
            current.weather_code,
            current.wind_speed_10m
          ),
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  function getDescription(code: number, wind: number): string {
    if (wind > 50) return 'Mistral soufflant \u00b7 Vendanges en pause'
    if (wind > 30) return 'Tramontane \u00b7 Bonne a\u00e9ration des vignes'
    if (code <= 1) return 'Conditions id\u00e9ales pour la vigne'
    if (code <= 3) return 'Ciel voil\u00e9 \u00b7 Maturation douce'
    if (code >= 61) return 'Pluie bienfaisante \u00b7 Vignes hydrat\u00e9es'
    return 'Conditions favorables au terroir'
  }

  function getIcon(code: number, wind: number) {
    if (wind > 40) return <Wind size={20} className="text-[#c5a059]" />
    if (code <= 1) return <Sun size={20} className="text-[#c5a059]" />
    if (code <= 45) return <Cloud size={20} className="text-[#c5a059]" />
    return <CloudRain size={20} className="text-[#c5a059]" />
  }

  if (loading) {
    return <div className="animate-pulse h-16 bg-[#1a2234] w-full" />
  }

  if (!meteo) return null

  return (
    <div className="flex items-center gap-6 px-8 py-5 bg-[#1a2234] border border-[#1E2D45]">
      {/* Localisation */}
      <div className="text-[10px] tracking-[0.2em] uppercase text-[#9c8e89] hidden md:block">
        Bellegarde, Gard
      </div>
      <div className="w-px h-8 bg-[#1E2D45] hidden md:block" />

      {/* Icone + Temp */}
      <div className="flex items-center gap-2">
        {getIcon(meteo.code, meteo.windSpeed)}
        <span className="text-[#c5a059] font-serif italic text-xl">
          {meteo.temp}&deg;
        </span>
      </div>

      {/* Vent */}
      {meteo.windSpeed > 20 && (
        <div className="flex items-center gap-1.5">
          <Wind size={14} className="text-[#9c8e89]" />
          <span className="text-[#9c8e89] text-xs">
            {meteo.windSpeed} km/h
          </span>
        </div>
      )}

      <div className="w-px h-8 bg-[#1E2D45]" />

      {/* Message terroir */}
      <div className="text-[#c5a059] text-xs tracking-wide font-medium italic flex-1">
        {meteo.description}
      </div>

      {/* Indicateur vigne */}
      <div
        className={`text-[10px] tracking-widest uppercase px-3 py-1 hidden lg:block ${
          meteo.windSpeed > 50
            ? 'bg-orange-900/30 text-orange-400 border border-orange-800/40'
            : 'bg-[#1b3022]/60 text-[#34D399] border border-[#1b3022]'
        }`}
      >
        {meteo.windSpeed > 50 ? 'Pause vendanges' : 'Vigne en forme'}
      </div>
    </div>
  )
}
