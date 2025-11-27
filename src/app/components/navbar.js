"use client";

import { Menu, X} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-1">
            <Image
              src="/logo_transparent.png"
              alt="Container logo"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold text-(--color-primary)">
              SmartContainer
            </h1>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-(--color-primary) font-medium relative">
          {/* DESKTOP DROPDOWN: PRODUSE */}
          <div className="group relative">
            <a className="flex items-center gap-1 hover:text-(--color-accent)">
              Produse
            </a>

            {/* Dropdown menu */}
            <div className="invisible absolute left-1/2 w-42 -translate-x-1/2 translate-y-[-10px] space-y-2 rounded-lg bg-white px-4 pt-2 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="/produse/container-standard"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container Standard
              </a>
              <a
                href="/produse/container-compact"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container Compact
              </a>
              <a
                href="/produse/container-sanitar"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container Sanitar
              </a>
            </div>
          </div>

          <a href="/contact" className="hover:text-(--color-accent)">
            Contact
          </a>
          <a href="/galerie" className="hover:text-(--color-accent)">
            Galerie
          </a>
          <a href="#articole" className="hover:text-(--color-accent)">
            Articole
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* OVERLAY (mobile click outside) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-(--color-primary) text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="mb-8" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>

        <nav className="flex flex-col gap-6 text-lg">
          {/* MOBILE DROPDOWN */}
          <div className="flex flex-col">
            <a
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-40"
            >
              Produse
            </a>

            {/* mobile dropdown items */}
            {dropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-3 ">
                <a
                  href="/produse/container-standard"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container Standard
                </a>
                <a
                  href="/produse/container-compact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container Compact
                </a>
                <a
                  href="/produse/container-sanitar"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container Sanitar
                </a>
              </div>
            )}
          </div>

          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="/galerie" onClick={() => setMenuOpen(false)}>
            Galerie
          </a>
          <a href="#articole" onClick={() => setMenuOpen(false)}>
            Articole
          </a>
        </nav>
      </div>
    </div>
  );
}
