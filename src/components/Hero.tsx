import Image from "next/image";
import { images } from "@/lib/images";

const badges = [
  "45 ha de vignes",
  "Bio depuis 2012",
  "Fondé en 1978",
  "AOC Costières de Nîmes",
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <Image
        src={images.hero}
        alt="Vignoble au coucher de soleil, Domaine Terre de Galets"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/15 to-transparent" />

      {/* Content — asymmetric layout */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 pl-6 md:pl-16 pr-6">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/70 mb-4">
          AOC Costières de Nîmes · Bellegarde, Gard
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-tight mb-6 drop-shadow-lg"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          Là où le Soleil{" "}
          <em className="italic">Embrasse</em> les Galets.
        </h1>
        <p
          className="font-sans text-base md:text-lg text-white/80 max-w-lg mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
        >
          Des vins expressifs nés des galets roulés du Gard. Un
          héritage familial versé dans chaque verre.
        </p>
        <div>
          <a
            href="#collection"
            className="inline-block bg-secondary-accent text-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-secondary-container transition-colors"
          >
            Explorer le Millésime
          </a>
        </div>

        {/* Floating badges — desktop only */}
        <div className="hidden md:flex absolute bottom-24 right-16 gap-3 flex-wrap justify-end max-w-md">
          {badges.map((badge) => (
            <span
              key={badge}
              className="backdrop-blur-sm bg-white/15 border border-white/40 text-white font-sans text-xs tracking-widest uppercase px-3 py-1"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
