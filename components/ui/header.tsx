"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/profile",     label: "Profil" },
    { href: "/visi-misi",   label: "Visi & Misi" },
    { href: "/produk",      label: "Produk" },
    { href: "/portofolio",  label: "Portofolio" },
    { href: "/our-team",    label: "Tim Kami" },
    { href: "/pemesanan",   label: "Pesan Jasa" },
  ];

  return (
    <>
      {/* ===== HEADER BAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger — visible on < lg */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Buka menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content starts below the fixed header */}
      <div className="h-16" />
    </>
  );
}

