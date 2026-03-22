import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { images } from "@/lib/images";

const experiences = [
  {
    titre: "Le Caveau du Maître",
    description:
      "Un voyage privé à travers nos plus vieux millésimes, guidé par notre sommelier dans le c\u0153ur de notre cave du XIXe siècle.",
    image: images.cave,
  },
  {
    titre: "Déjeuner dans les Vignes",
    description:
      "Déjeuner en plein air parmi les vignes. Une sélection de délices provençaux locaux associés à nos cuvées signatures.",
    image: images.dejeuner,
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative bg-surface py-20 md:py-32 noise-texture"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:pl-24 md:pr-12">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-primary">
              Vivre le Domaine
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((exp) => (
            <FadeInSection key={exp.titre}>
              <div className="sommelier-card relative overflow-hidden h-80 md:h-96 group">
                <Image
                  src={exp.image}
                  alt={exp.titre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Magazine overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(42,0,2,0.85) 0%, rgba(42,0,2,0.2) 50%, transparent 100%)",
                  }}
                />
                {/* Content positioned over image */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif italic text-2xl text-white mb-4">
                    {exp.titre}
                  </h3>
                  <a
                    href="#contact"
                    className="inline-block border border-white/60 text-white font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-primary transition-colors"
                  >
                    Réserver l&#39;expérience
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
