'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from './FadeInSection'
import RoueAromes from './RoueAromes'
import TemperatureService from './TemperatureService'
import { images } from '@/lib/images'

const aromesRouge = [
  { label: 'Fruits rouges', angle: 0, color: '#8B0000', icon: '\uD83C\uDF52' },
  { label: 'Garrigue', angle: 60, color: '#4a7c59', icon: '\uD83C\uDF3F' },
  { label: '\u00c9pices', angle: 120, color: '#8B4513', icon: '\uD83C\uDF36\uFE0F' },
  { label: 'Olive noire', angle: 180, color: '#2d4a1e', icon: '\uD83C\uDF43' },
  { label: 'Cuir', angle: 240, color: '#6B3A2A', icon: '\uD83C\uDF42' },
  { label: 'Min\u00e9ral', angle: 300, color: '#708090', icon: '\uD83D\uDC8E' },
]

const aromesBlancVin = [
  { label: 'Abricot', angle: 0, color: '#FFA07A', icon: '\uD83C\uDF51' },
  { label: 'Fleurs blanches', angle: 60, color: '#F5F5DC', icon: '\uD83C\uDF38' },
  { label: 'Miel', angle: 120, color: '#DAA520', icon: '\uD83C\uDF6F' },
  { label: 'Agrumes', angle: 180, color: '#FFD700', icon: '\uD83C\uDF4B' },
  { label: 'Min\u00e9ral', angle: 240, color: '#B0C4DE', icon: '\uD83D\uDCA7' },
  { label: 'Vanille', angle: 300, color: '#F3E5AB', icon: '\uD83C\uDF3E' },
]

const aromesRose = [
  { label: 'P\u00eache blanche', angle: 0, color: '#FFDAB9', icon: '\uD83C\uDF51' },
  { label: 'Fraise', angle: 60, color: '#FF6B6B', icon: '\uD83C\uDF53' },
  { label: 'Fleurs', angle: 120, color: '#FFB6C1', icon: '\uD83C\uDF3A' },
  { label: 'Agrumes', angle: 180, color: '#FFA500', icon: '\uD83C\uDF4A' },
  { label: 'Garrigue', angle: 240, color: '#90EE90', icon: '\uD83C\uDF3F' },
  { label: 'Fra\u00eecheur', angle: 300, color: '#E0F7FA', icon: '\u2744\uFE0F' },
]

const vins = [
  {
    nom: 'La Terre des Galets Rouge 2021',
    cepage: 'Syrah & Mourvèdre',
    prix: '42\u20ac',
    badge: '94 Points \u2014 RP',
    note: 'Robe profonde aux reflets violets. Nez complexe de garrigue, olive noire et \u00e9pices douces. Bouche ample, tanins soyeux, longue finale min\u00e9rale.',
    image: images.vinRouge,
    bgColor: '#2a0002',
    aromes: aromesRouge,
    tempVin: 'rouge' as const,
    temperature: 16,
  },
  {
    nom: "L\u2019Aube Dor\u00e9e Blanc 2023",
    cepage: 'Viognier & Roussanne',
    prix: '38\u20ac',
    badge: '\u00c9dition Limit\u00e9e',
    note: 'Nez floral et abricot\u00e9, bouche grasse et fra\u00eeche, belle min\u00e9ralit\u00e9 calcaire en finale.',
    image: images.vinBlanc,
    bgColor: '#c5a059',
    aromes: aromesBlancVin,
    tempVin: 'blanc' as const,
    temperature: 12,
  },
  {
    nom: 'Mistral Ros\u00e9 2023',
    cepage: 'Grenache & Cinsault',
    prix: '29\u20ac',
    badge: null,
    note: 'Robe p\u00e2le aux reflets saumon\u00e9s. Fra\u00eecheur imm\u00e9diate, notes de p\u00eache blanche et fleurs de garrigue.',
    image: images.vinRose,
    bgColor: '#fed488',
    aromes: aromesRose,
    tempVin: 'rose' as const,
    temperature: 10,
  },
]

export default function CollectionClient() {
  return (
    <section
      id="collection"
      className="relative bg-surface-container-low py-20 md:py-32 noise-texture"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:pl-12 md:pr-24">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">
                La Collection 2024
              </h2>
              <p className="font-serif italic text-on-surface-variant text-base md:text-lg max-w-xl leading-relaxed">
                Nos vins sont le reflet direct du climat m&eacute;diterran&eacute;en
                et de notre terroir unique en galets roul&eacute;s.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 md:mt-0 font-sans text-xs tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors"
            >
              Voir toute la cave
            </a>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {vins.map((vin, i) => (
            <VinCard key={vin.nom} vin={vin} offset={i === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VinCard({
  vin,
  offset,
}: {
  vin: (typeof vins)[number]
  offset: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <FadeInSection className={offset ? 'md:mt-12' : ''}>
      <div
        className="sommelier-card shadow-[0_4px_24px_rgba(42,0,2,0.06)] transition-transform duration-300 hover:-translate-y-1"
        style={{ backgroundColor: `${vin.bgColor}08` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative h-80 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: `${vin.bgColor}0a` }}
        >
          <Image
            src={vin.image}
            alt={vin.nom}
            fill
            className={`object-contain py-8 px-4 transition-opacity duration-500 ${
              isHovered ? 'opacity-20' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Roue des aromes au hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <RoueAromes aromes={vin.aromes} nomVin={vin.nom} />
          </div>
        </div>
        <div className="p-6 md:p-8">
          {vin.badge && (
            <span className="inline-block bg-secondary-container text-on-secondary-container font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 mb-4">
              {vin.badge}
            </span>
          )}
          <h3 className="font-serif text-xl text-primary mb-1">{vin.nom}</h3>
          <p className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-3">
            {vin.cepage}
          </p>
          <p className="font-serif italic text-2xl text-primary mb-3">
            {vin.prix}
          </p>

          {/* Badge temperature */}
          <div className="mb-4">
            <TemperatureService
              temperature={vin.temperature}
              vin={vin.tempVin}
            />
          </div>

          <p className="font-sans text-sm font-light italic text-on-surface-variant leading-relaxed mb-6">
            {vin.note}
          </p>
          <button className="w-full border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase py-3 hover:bg-primary hover:text-white transition-colors">
            Commander
          </button>
        </div>
      </div>
    </FadeInSection>
  )
}
