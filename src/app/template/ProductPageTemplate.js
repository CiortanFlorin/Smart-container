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
            <div className="relative w-full aspect-3/4 md:hidden">
              <Image
                src={selectedImage.portrait.src}
                alt={selectedImage.portrait.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* DESKTOP → LANDSCAPE */}
            <div className="relative w-full aspect-video hidden md:block">
              <Image
                src={selectedImage.landscape.src}
                alt={selectedImage.landscape.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* --- THUMBNAILS --- */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {product.images.landscape.map((img, index) => (
              <div
                key={img.alt}
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
                    src={product.images.portrait[index].src}
                    alt={product.images.portrait[index].alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DESKTOP THUMBNAIL (LANDSCAPE) */}
                <div className="relative w-full h-full hidden md:block">
                  <Image
                    src={product.images.landscape[index].src}
                    alt={product.images.landscape[index].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* --- PRODUCT INFO --- */}
          <div className="flex flex-col md:flex-row text-center mb-6 md:mb-18 md:align-middle md:items-center md:text-left max-w-3xl mx-auto relative z-10">
            <div className="mb-8 md:mb-0 md:mr-10">
              <h1 className="text-4xl font-bold text-white md:text-(--color-primary) mb-6">
                {product.name}
              </h1>
              <h2 className="text-3xl font-bold text-(--color-accent) mb-8">
                Pret: {product.price}
              </h2>
              <h3 className="text-xl font-bold text-white md:text-(--color-primary) mb-8">
                Dimensiuni: {product.size}
              </h3>
              <h4 className="text-white md:text-(--color-primary) text-xl leading-relaxed">
                {product.description}
              </h4>
            </div>
            <a
              href="/contact"
              className="md:h-26 bg-(--color-accent) hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-2xl font-semibold inline-block text-center transition shadow-lg"
            >
              Comandă acum
            </a>
          </div>
          <p className="text-white md:text-(--color-primary) text-xl leading-relaxed mx-auto text-center md:text-left mb-10">
            {product.longDescription}
          </p>
          <p className="text-white md:text-(--color-primary) text-xl leading-relaxed mx-auto text-center md:text-left mb-10">
            Transportul containerelor nu este inclus în prețul afișat. Livrarea
            se calculează separat, în funcție de distanța până la locația
            finală, tipul containerului și accesibilitatea zonei. Oferim
            transport în toată țara, iar costul este comunicat transparent
            înainte de confirmarea comenzii.
          </p>
          <p className="text-white md:text-(--color-primary) text-xl leading-relaxed mx-auto text-center md:text-left mb-10">
            Pentru confirmarea comenzii este necesar un avans de 30–50%,
            procentul variind în funcție de numărul de containere comandate și
            de configurațiile solicitate. Restul sumei se achită la livrare sau
            la ridicarea containerului din punctul nostru de lucru. Acceptăm mai
            multe metode de plată, pentru a facilita procesul de achiziție.
          </p>
          <p className="text-white md:text-(--color-primary) text-xl leading-relaxed mx-auto text-center md:text-left mb-10">
            Containerele noastre sunt complet modulare și pot fi realizate în
            orice dimensiune, după cerințele clientului. Pot fi unite atât
            orizontal, cât și vertical, pentru a forma spații mari, birouri
            complexe, locuințe modulare sau construcții tehnice. De asemenea,
            putem instala numeroase accesorii și echipări suplimentare — sisteme
            electrice personalizate, panouri termoizolante, ferestre
            suplimentare, aer condiționat, pardoseli speciale și multe altele.
            Te invităm să consulți galeria foto pentru a vedea exemple reale de
            configurări și accesorizări realizate pentru clienții noștri.
          </p>
        </div>
      </div>
    </section>
  );
}
