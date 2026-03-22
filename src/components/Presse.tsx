import FadeInSection from "./FadeInSection";

const awards = [
  {
    citation: "Complexité époustouflante",
    source: "Decanter Magazine",
  },
  {
    citation: "95 Points",
    source: "Wine Spectator",
  },
  {
    citation: "Joyau caché du Rhône",
    source: "Robert Parker",
  },
  {
    citation: "Médaille d&#39;Or",
    source: "Concours de Paris",
  },
];

export default function Presse() {
  return (
    <section
      id="presse"
      className="relative bg-surface-container py-20 md:py-24 noise-texture"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
              Presse &amp; Distinctions
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">
              Reconnus par les meilleurs
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award) => (
            <FadeInSection key={award.source}>
              <div className="py-8 md:py-12 px-6">
                <div className="w-[2px] h-10 bg-secondary-accent mb-3" />
                <p className="font-serif italic text-xl text-primary mb-4 leading-snug">
                  {"\u00ab\u00a0"}{award.citation}{"\u00a0\u00bb"}
                </p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
                  {award.source}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
