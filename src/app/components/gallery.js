"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function GalerieClient({ images }) {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="pt-32 md:pt-12 pb-20 bg-gray-100 min-h-screen wave-bg-desktop md:mt-20">
      <div className="max-w-7xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-(--color-primary) md:text-white mb-6 text-center">
          Galerie Foto
        </h1>

        <p className="text-center text-lg text-gray-700 md:text-white mb-10">
          Acestea este o galerie a tuturor opțiunilor ce le putem instala pe containerele noastre.
        </p>

        {/* GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img}
              className={`w-full overflow-hidden rounded-xl 
                ${!isMobile ? "cursor-pointer group" : "pointer-events-none"}
              `}
              onClick={!isMobile ? () => setSelected(img) : undefined}
            >
              <Image
                src={img}
                alt="Container"
                width={400}
                height={400}
                className={`rounded-xl object-cover w-full mb-4
                  ${!isMobile ? "transition-transform duration-300 group-hover:scale-105" : ""}
                `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* POPUP — also disable entirely on mobile */}
      {!isMobile && selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={selected}
              alt="Preview"
              width={800}
              height={600}
              className="rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
