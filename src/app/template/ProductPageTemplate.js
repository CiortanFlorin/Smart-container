"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductPageTemplate({ product }) {
  const [selectedImage, setSelectedImage] = useState({
  landscape: product.images.landscape[0],
  portrait: product.images.portrait[0],
});
  return (
    <section className="pt-32 pb-20 bg-white wave-bg-desktop min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* PRODUCT CONTAINER */}
        <div className="relative bg-(--color-primary) md:bg-white p-8 md:p-0 rounded-2xl shadow-xl md:shadow-none overflow-hidden">
          {/* --- MAIN IMAGE (LANDSCAPE DESKTOP / PORTRAIT MOBILE) --- */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-6">
            {/* MOBILE → PORTRAIT */}
            <div className="relative w-full aspect-[3/4] md:hidden">
              <Image
                src={selectedImage.portrait}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* DESKTOP → LANDSCAPE */}
            <div className="relative w-full aspect-video hidden md:block">
              <Image
                src={selectedImage.landscape}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* --- THUMBNAILS --- */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {product.images.landscape.map((img, index) => (
              <div
                key={img}
                onClick={() =>
                  setSelectedImage({
                    landscape: product.images.landscape[index],
                    portrait: product.images.portrait[index],
                  })
                }
                className="relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all aspect-3/4 md:aspect-video "
                style={{
                  borderColor:
                    selectedImage.landscape === product.images.landscape[index]
                      ? "var(--color-accent)"
                      : "var(--color-primary)",
                }}
              >
                {/* MOBILE THUMBNAIL (PORTRAIT) */}
                <div className="relative w-full h-full md:hidden">
                  <Image
                    src={product.images.portrait[index]}
                    alt="Thumbnail portrait"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DESKTOP THUMBNAIL (LANDSCAPE) */}
                <div className="relative w-full h-full hidden md:block">
                  <Image
                    src={product.images.landscape[index]}
                    alt="Thumbnail landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* --- PRODUCT INFO --- */}
          <div className="flex flex-col md:flex-row text-center md:align-middle md:items-center md:text-left max-w-3xl mx-auto relative z-10">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-white md:text-(--color-primary) mb-6">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-(--color-accent) mb-8">
                {product.price}
              </p>
              <p className="text-xl font-bold text-white md:text-(--color-primary) mb-8">
                Marime: {product.size}cm
              </p>
              <p className="text-white md:text-(--color-primary) text-xl leading-relaxed">
                {product.description}
              </p>
            </div>

            <a
              href="/contact"
              className="md:h-26 bg-(--color-accent) hover:bg-orange-600 text-white px-10 py-5 md:mb-18 rounded-xl text-2xl font-semibold inline-block text-center transition shadow-lg"
            >
              Comandă acum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
