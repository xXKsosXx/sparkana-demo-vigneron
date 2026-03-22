import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { images } from "@/lib/images";

export default function Terroir() {
  return (
    <section id="terroir" className="relative bg-surface py-20 md:py-32 noise-texture overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Image — full-bleed left */}
            <div className="lg:col-span-7 relative -ml-4 md:-ml-8 lg:-ml-16 overflow-hidden">
              <div
                className="relative h-[400px] md:h-[560px]"
                style={{
                  maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
                }}
              >
                <Image
                  src={images.galets}
                  alt="Vignoble avec galets roulés au sol"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Floating quote overlapping image */}
              <div className="absolute -bottom-8 right-4 md:right-8 lg:right-0 bg-surface-container-lowest/90 p-6 md:p-8 shadow-[0_4px_24px_rgba(42,0,2,0.04)] max-w-sm z-10">
                <p className="font-serif italic text-sm md:text-base text-primary leading-relaxed">
                  {"\u00ab\u00a0"}Les racines plongent profond à travers les galets,
                  trouvant une eau ancienne pour équilibrer la chaleur de
                  notre soleil du Midi.{"\u00a0\u00bb"}
                </p>
              </div>
            </div>

            {/* Text — 45% */}
            <div className="lg:col-span-5 lg:pl-16 xl:pl-24 pt-12 lg:pt-0">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
                Notre héritage
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
                Un Terroir de{" "}
                <em className="italic">Galets Roulés</em>
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">
                Le terroir Terre de Galets est unique aux Costières de
                Nîmes. Les galets roulés absorbent la chaleur intense
                du soleil gardois le jour et la restituent aux vignes la nuit.
                Cette régulation thermique naturelle crée des vins
                d&#39;une concentration incroyable, d&#39;une élégance
                structurelle et d&#39;un caractère minéral distinctif
                qui reflète l&#39;âme même du paysage
                méditerranéen.
              </p>
              <a
                href="#"
                className="inline-block border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-primary hover:text-white transition-colors"
              >
                Découvrir notre terroir
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
