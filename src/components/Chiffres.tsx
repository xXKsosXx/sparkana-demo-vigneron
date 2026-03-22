import FadeInSection from "./FadeInSection";

const stats = [
  { chiffre: "45 ha", label: "de vignes" },
  { chiffre: "3", label: "cépages nobles" },
  { chiffre: "1978", label: "fondé en" },
  { chiffre: "Bio", label: "depuis 2012" },
];

export default function Chiffres() {
  return (
    <section className="bg-primary py-14">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif italic text-4xl md:text-5xl text-secondary-accent mb-2">
                {stat.chiffre}
              </p>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
