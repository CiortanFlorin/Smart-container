"use client";

import Image from "next/image";
import Link from "next/link";
import FaqList from "./components/faqList";
import { faqItems } from "./data/faqData";
import ContactForm from "./components/contactForm";
export default function HomePage() {
  const products = [
    {
      title: "Container Standard",
      link: "/produse/container-standard",
      size: "6000X3000X2500",
      foto: "/products/landscape/standard-1.jpg",
      description:
        "Echipat cu o ușă și un geam. Construcție solidă, potrivită pentru birouri, spații de lucru sau depozitare.",
      price: "3150€ + TVA",
    },
    {
      title: "Container Compact",
      link: "/produse/container-compact",
      size: "2400X2400X2500",
      foto: "/products/landscape/compact-1.jpg",
      description:
        "Include o ușă și un geam mic de 500X500. Ideal pentru spații restrânse și utilizări multiple.",
      price: "1400€ + TVA",
    },
    {
      title: "Container Sanitar",
      link: "/produse/container-sanitar",
      size: "2400X2400X2500",
      foto: "/products/landscape/sanitar-2.jpg",
      description:
        "Dotat cu WC, chiuvetă, o ușă și un geam mic. Perfect pentru șantiere sau zone fără utilități.",
      price: "1600€ + TVA",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-32 pb-6 md:pb-16 bg-(--color-primary) text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Text section */}
          <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Containere modulare pentru orice nevoie
            </h2>
            <p className="mb-8 text-lg">
              Construite pentru a rezista și configurate după nevoile tale,
              containerele noastre modulare oferă o soluție rapidă, flexibilă și
              eficientă pentru orice tip de proiect.
            </p>
            <Link
              className="bg-(--color-accent) text-xl hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
              href="/contact"
            >
              Coamnda acum
            </Link>
          </div>

          {/* Image (only on desktop) */}
          <div className="hidden md:block md:ml-12 shrink-0">
            <div className="relative w-[500px] lg:w-[650px] xl:w-[800px] h-auto">
              <Image
                src="/foto-container.jpg"
                alt="Container modular"
                width={1200}
                height={800}
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produse Section */}
      <section id="produse" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12 text-(--color-primary)">
          Produsele Noastre
        </h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {products.map((product) => (
            <Link key={product.title} href={product.link}>
              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={product.foto}
                    alt="Container modular"
                    fill
                    className="object-cover rounded-t-xl"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10 text-(--color-primary)">
            Întrebări Frecvente
          </h3>
          <FaqList items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-white">
        <h3 className="text-3xl font-bold mb-8 text-(--color-primary) mx-auto text-center">
          Contactează-ne
        </h3>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
