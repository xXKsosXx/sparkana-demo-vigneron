"use client";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white/70 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:pl-12 md:pr-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo + Bio */}
          <div>
            <p className="font-serif italic text-white text-lg mb-4">
              Domaine Terre de Galets
            </p>
            <p className="font-sans text-sm leading-relaxed">
              Agriculture biologique certifi&eacute;e depuis 2012. Tradition et
              durabilit&eacute;.
            </p>
          </div>

          {/* Le Domaine */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white mb-6">
              Le Domaine
            </p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Les Vignobles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  D&eacute;veloppement durable
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Grossistes
                </a>
              </li>
            </ul>
          </div>

          {/* L&eacute;gal */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white mb-6">
              L&eacute;gal
            </p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Politique de confidentialit&eacute;
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentions l&eacute;gales
                </a>
              </li>
            </ul>
          </div>

          {/* R&eacute;seaux & Newsletter */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white mb-6">
              R&eacute;seaux &amp; Newsletter
            </p>
            <ul className="space-y-3 font-sans text-sm mb-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/5 border border-white/10 text-white font-sans text-sm px-4 py-2.5 placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-white/10 text-white font-sans text-xs tracking-[0.1em] uppercase px-4 py-2.5 border border-white/10 border-l-0 hover:bg-white/20 transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 space-y-3">
          <p className="font-sans text-xs text-white/50">
            &copy; 2025 Domaine Terre de Galets &middot; Bellegarde, Gard
          </p>
          <p className="font-sans text-[10px] text-white/30">
            L&rsquo;abus d&rsquo;alcool est dangereux pour la sant&eacute;.
            &Agrave; consommer avec mod&eacute;ration.
          </p>
          <p className="font-sans text-[10px] text-white/30">
            Site r&eacute;alis&eacute; par{" "}
            <a
              href="https://sparkana.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline"
            >
              sparkana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
