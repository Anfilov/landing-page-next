"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sluzby", label: "Služby" },
    { href: "#o-nas", label: "O nás" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-neutral-200/40 bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 lg:px-12">
        <a
          href="#"
          className="relative z-10 transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src={scrolled ? "/ANFILOV-Logo.svg" : "/ANFILOV-Logo-White.svg"}
            alt="ANFILOV"
            width={140}
            height={36}
            unoptimized
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled
                  ? "text-neutral-400 hover:text-neutral-800"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[1.5px] w-full transition-all duration-300 origin-center ${
                scrolled ? "bg-neutral-800" : "bg-white"
              } ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-full transition-all duration-300 ${
                scrolled ? "bg-neutral-800" : "bg-white"
              } ${menuOpen ? "scale-x-0 opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-full transition-all duration-300 origin-center ${
                scrolled ? "bg-neutral-800" : "bg-white"
              } ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-transition md:hidden ${
          menuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="border-t border-neutral-200/30 bg-white/95 px-8 pb-6 pt-2 backdrop-blur-xl">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3.5 text-[12px] font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors duration-300 hover:text-neutral-800"
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-8px)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, color 0.3s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
