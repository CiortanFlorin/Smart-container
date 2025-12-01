"use client";

import { Menu, X} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownProduseOpen, setDropdownProduseOpen] = useState(false);
  const [dropdownArticoleOpen, setDropdownArticoleOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

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
            <div className="invisible absolute left-1/2 w-42 -translate-x-1/2 -translate-y-2.5 space-y-2 rounded-lg bg-white px-4 pt-2 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="/produse/container-standard"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container Standard
              </a>
              <a
                href="/produse/container-dublu"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container Dublu
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
          <div className="group relative">
            <a className="flex items-center gap-1 hover:text-(--color-accent)">
              Articole
            </a>

            {/* Dropdown menu */}
            <div className="invisible absolute left-1/2 w-86 -translate-x-1/2 -translate-y-2.5 space-y-2 rounded-lg bg-white px-4 pt-2 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="/articole/avantaje-preturi"
                className="block py-2 hover:text-(--color-accent)"
              >
                Avantaje, Prețuri și Modele Populare în România
              </a>
              <a
                href="/articole/container-potrivit"
                className="block py-2 hover:text-(--color-accent)"
              >
                Cum Alegi Containerul Potrivit?
              </a>
              <a
                href="/articole/container-vs-traditional"
                className="block py-2 hover:text-(--color-accent)"
              >
                Container vs. Construcție Tradițională
              </a>
              <a
                href="/articole/containere-birouri"
                className="block py-2 hover:text-(--color-accent)"
              >
                Containere Pentru Birouri
              </a>
              <a
                href="/articole/containere-santier"
                className="block py-2 hover:text-(--color-accent)"
              >
                Containere pentru Șantiere
              </a>
              <a
                href="/articole/modularitatea-containerelor"
                className="block py-2 hover:text-(--color-accent)"
              >
                Cum se Pot Uni Orizontal și Vertical
              </a>
            </div>
          </div>
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
        className={`fixed inset-0 top-0 left-0 overflow-y-auto h-full w-64 bg-(--color-primary) text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
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
              onClick={() => setDropdownProduseOpen(!dropdownProduseOpen)}
              className="flex items-center justify-between w-40"
            >
              Produse
            </a>

            {/* mobile dropdown items */}
            {dropdownProduseOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-3 ">
                <a
                  href="/produse/container-standard"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container Standard
                </a>
                <a
                  href="/produse/container-dublu"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container Dublu
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
          <div className="flex flex-col">
            <a
              onClick={() => setDropdownArticoleOpen(!dropdownArticoleOpen)}
              className="flex items-center justify-between w-40"
            >
              Articole
            </a>

            {/* mobile dropdown items */}
            {dropdownArticoleOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-3 ">
                <a
                  href="/articole/avantaje-preturi"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Avantaje, Prețuri și Modele Populare în România
                </a>
                <a
                  href="/articole/container-potrivit"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Cum Alegi Containerul Potrivit?
                </a>
                <a
                  href="/articole/container-vs-traditional"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Container vs. Construcție Tradițională
                </a>
                <a
                  href="/articole/containere-birouri"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Containere Pentru Birouri
                </a>
                <a
                  href="/articole/containere-santier"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Containere pentru Șantiere
                </a>
                <a
                  href="/articole/modularitatea-containerelor"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-(--color-accent)"
                >
                  Cum se Pot Uni Orizontal și Vertical
                </a>
                
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
