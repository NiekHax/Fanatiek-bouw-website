"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Diensten",
    href: "/diensten",
    children: [
      { label: "Verbouwingen", href: "/diensten/verbouwingen" },
      { label: "Renovatie", href: "/diensten/renovatie-onderhoud" },
      { label: "Overkappingen", href: "/diensten/overkappingen" },
      { label: "Onderhoud & Beheer", href: "/diensten/onderhoud-beheer" },
    ],
  },
  {
    label: "Ons Werk",
    href: "/ons-werk",
  },
  { label: "Over Ons", href: "/over-ons" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <a href="#main-content" className="skip-to-content">
        Ga naar inhoud
      </a>
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-0"
        style={{ height: "80px" }}
        aria-label="Hoofdnavigatie"
      >
        {/* Logo */}
        <Link href="/" className="relative h-12 w-40 shrink-0">
          <Image
            src="/images/logos/fanatiek-bouw-logo-donker.png"
            alt="Fanatiek Bouw logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                href={link.href}
                className="font-heading text-sm font-semibold tracking-wide text-dark transition-colors hover:text-primary"
              >
                {link.label}
                {link.children && (
                  <svg className="ml-1 inline-block h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.children && dropdownOpen === link.label && (
                <div className="absolute top-full left-0 mt-0 w-56 rounded-md bg-white py-2 shadow-lg">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-dark transition-colors hover:bg-light hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="rounded bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-3 font-heading text-sm font-semibold text-dark"
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 block rounded bg-primary py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
