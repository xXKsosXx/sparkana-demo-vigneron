"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const souhaits = [
  "Dégustation",
  "Commande",
  "Visite",
  "Autre",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telephone: (form.elements.namedItem("telephone") as HTMLInputElement).value,
      souhait: (form.elements.namedItem("souhait") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-surface py-20 md:py-32 noise-texture">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
              Nous rendre visite
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-10">
              Visitez le Domaine
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom complet"
                  required
                  className="w-full bg-transparent border-b border-outline-variant py-3 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-outline-variant py-3 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Téléphone"
                  className="w-full bg-transparent border-b border-outline-variant py-3 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <select
                  name="souhait"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-outline-variant py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Souhait
                  </option>
                  {souhaits.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-outline-variant py-3 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-white font-sans text-xs tracking-[0.2em] uppercase py-4 hover:bg-primary-container transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status === "success" && (
                <p className="font-sans text-sm text-secondary">
                  Votre message a bien été envoyé. Nous vous
                  recontacterons très rapidement.
                </p>
              )}
              {status === "error" && (
                <p className="font-sans text-sm text-primary">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>

          {/* Info + Image */}
          <div className="flex flex-col justify-between">
            <div className="relative h-64 md:h-80 mb-8 overflow-hidden shadow-[0_8px_32px_rgba(42,0,2,0.08)]">
              <Image
                src={images.domaine}
                alt="Domaine Terre de Galets, vue extérieure"
                fill
                className="object-cover"
                style={{ filter: "grayscale(1) sepia(0.2)" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            <div className="space-y-4 font-sans text-sm text-on-surface-variant">
              <p>Route des Garrigues</p>
              <p>30127 Bellegarde, Gard</p>
              <p className="mt-4">
                <a
                  href="mailto:contact@terredegalets.fr"
                  className="hover:text-primary transition-colors"
                >
                  contact@terredegalets.fr
                </a>
              </p>
              <p>
                <a
                  href="tel:+33466000000"
                  className="hover:text-primary transition-colors"
                >
                  +33 4 66 00 00 00
                </a>
              </p>
              <p className="mt-4 text-xs text-on-surface-variant/70">
                Mar-Sam 10h-18h · Sur RDV uniquement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
