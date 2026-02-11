"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + tagline */}
        <div>
          <div className="relative mb-4 h-10 w-36">
            <Image
              src="/images/logos/fanatiek-bouw-logo-wit.jpeg"
              alt="Fanatiek Bouw logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mb-4 text-sm text-gray-400">
            Fanatiek Bouw — Timmerwerken
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/fanatiek_bouw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Diensten */}
        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
            Diensten
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/diensten/verbouwingen" className="transition-colors hover:text-primary">
                Verbouwingen
              </Link>
            </li>
            <li>
              <Link href="/diensten/renovatie-onderhoud" className="transition-colors hover:text-primary">
                Renovatie
              </Link>
            </li>
            <li>
              <Link href="/diensten/overkappingen" className="transition-colors hover:text-primary">
                Overkappingen
              </Link>
            </li>
            <li>
              <Link href="/diensten/onderhoud-beheer" className="transition-colors hover:text-primary">
                Onderhoud &amp; Beheer
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Pagina's */}
        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
            Pagina&apos;s
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/over-ons" className="transition-colors hover:text-primary">
                Over Ons
              </Link>
            </li>
            <li>
              <Link href="/ons-werk" className="transition-colors hover:text-primary">
                Ons Werk
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="tel:+31625333780" className="transition-colors hover:text-primary">
                06 253 337 80
              </a>
            </li>
            <li>
              <a href="mailto:info@fanatiekbouw.nl" className="transition-colors hover:text-primary">
                info@fanatiekbouw.nl
              </a>
            </li>
            <li>Gemeenteweg 25, Staphorst</li>
            <li>Regio Overijssel &amp; Drenthe</li>
            <li className="pt-2 text-xs">
              KvK: 93047592
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-6 py-4 text-xs text-gray-500 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Fanatiek Bouw. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacyverklaring" className="transition-colors hover:text-primary">
              Privacyverklaring
            </Link>
            <Link href="/algemene-voorwaarden" className="transition-colors hover:text-primary">
              Algemene Voorwaarden
            </Link>
            <Link href="/cookiebeleid" className="transition-colors hover:text-primary">
              Cookiebeleid
            </Link>
            <button
              className="transition-colors hover:text-primary"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }
              }}
              type="button"
            >
              Cookie-instellingen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
