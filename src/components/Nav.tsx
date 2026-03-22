"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Wine Collection", href: "#collection" },
  { label: "Notre Terroir", href: "#terroir" },
  { label: "Visites Cave", href: "#experiences" },
  { label: "Presse", href: "#presse" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-glass fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-xl shadow-sm"
          : "bg-surface-container/70 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-serif italic text-primary text-base lg:text-lg whitespace-nowrap">
          Domaine Terre de Galets
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-primary-container transition-colors"
          >
            R&eacute;server une d&eacute;gustation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-on-surface transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-on-surface transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-on-surface transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-xl border-t border-outline-variant/20 px-6 pb-6 pt-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-sm tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-primary text-white text-center font-sans text-xs tracking-[0.2em] uppercase px-6 py-3"
          >
            R&eacute;server une d&eacute;gustation
          </a>
        </div>
      )}
    </nav>
  );
}
