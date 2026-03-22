import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { images } from "@/lib/images";

const vins = [
  {
    nom: "La Terre des Galets Rouge 2021",
    cepage: "Syrah & Mourvèdre",
    prix: "42\u20ac",
    badge: "94 Points — RP",
    note: "Robe profonde aux reflets violets. Nez complexe de garrigue, olive noire et épices douces. Bouche ample, tanins soyeux, longue finale minérale.",
    image: images.vinRouge,
    bgColor: "#2a0002",
  },
  {
    nom: "L\u2019Aube Dorée Blanc 2023",
    cepage: "Viognier & Roussanne",
    prix: "38\u20ac",
    badge: "Édition Limitée",
    note: "Nez floral et abricoté, bouche grasse et fraîche, belle minéralité calcaire en finale.",
    image: images.vinBlanc,
    bgColor: "#c5a059",
  },
  {
    nom: "Mistral Rosé 2023",
    cepage: "Grenache & Cinsault",
    prix: "29\u20ac",
    badge: null,
    note: "Robe pâle aux reflets saumonés. Fraîcheur immédiate, notes de pêche blanche et fleurs de garrigue.",
    image: images.vinRose,
    bgColor: "#fed488",
  },
];

export default function Collection() {
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
                Nos vins sont le reflet direct du climat méditerranéen
                et de notre terroir unique en galets roulés.
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
            <FadeInSection
              key={vin.nom}
              className={i === 1 ? "md:mt-12" : ""}
            >
              <div
                className="sommelier-card shadow-[0_4px_24px_rgba(42,0,2,0.06)]"
                style={{ backgroundColor: `${vin.bgColor}08` }}
              >
                <div
                  className="relative h-80 flex items-center justify-center"
                  style={{ backgroundColor: `${vin.bgColor}0a` }}
                >
                  <Image
                    src={vin.image}
                    alt={vin.nom}
                    fill
                    className="object-contain py-8 px-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  {vin.badge && (
                    <span className="inline-block bg-secondary-container text-on-secondary-container font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 mb-4">
                      {vin.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-primary mb-1">
                    {vin.nom}
                  </h3>
                  <p className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-3">
                    {vin.cepage}
                  </p>
                  <p className="font-serif italic text-2xl text-primary mb-4">
                    {vin.prix}
                  </p>
                  <p className="font-sans text-sm font-light italic text-on-surface-variant leading-relaxed mb-6">
                    {vin.note}
                  </p>
                  <button className="w-full border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase py-3 hover:bg-primary hover:text-white transition-colors">
                    Commander
                  </button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
