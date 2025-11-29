import Image from "next/image";
import Link from "next/link";
import FaqList from "./components/faqList";
import { faqItems } from "./data/faqData";
import ContactForm from "./components/contactForm";

export const metadata = {
  title: "Containere modulare – SmartContainer | Containere locuință, birou, șantier",
  description:
    "SmartContainer produce și vinde containere modulare pentru locuințe, birouri, șantiere și spații comerciale. Dimensiuni la cerere, containere unite, termoizolate, cu transport în toată țara.",
  keywords: [
    "containere",
    "containere modulare",
    "containere de vanzare",
    "case din containere",
    "container birou",
    "container locuinta",
    "container sanitar",
    "container modular",
    "containere România",
  ],
  openGraph: {
    title: "Containere modulare – SmartContainer",
    description:
      "Containere modulare pentru orice proiect: locuințe, șantiere, birouri, spații tehnice. Transport în toată țara.",
    url: "https://smartcontainer.ro",
    siteName: "SmartContainer",
    images: [
      {
        url: "/foto-container.jpg",
        width: 1200,
        height: 800,
        alt: "Container modular produs de SmartContainer",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
};


export default function HomePage() {
  const products = [
    {
      title: "Container Standard",
      link: "/produse/container-standard",
      size: "6m X 2,4m X 2,5m",
      foto: "/products/landscape/standard-1.jpg",
      description:
        "Echipat cu o ușă și un geam. Construcție solidă, potrivită pentru birouri, spații de lucru sau depozitare.",
    },
    {
      title: "Container Dublu",
      link: "/produse/container-dublu",
      size: "6m X 4,8m X 2,5m",
      foto: "/products/landscape/dublu-1.jpg",
      description:
        "Container modular dublu, termoizolat, cu zonă principală spațioasă și grup sanitar complet echipat.",
    },
    {
      title: "Container Sanitar",
      link: "/produse/container-sanitar",
      size: "2,4m X 2,4m X 2,5m",
      foto: "/products/landscape/sanitar-2.jpg",
      description:
        "Dotat cu WC, chiuvetă, o ușă și un geam mic. Perfect pentru șantiere sau zone fără utilități.",
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
                alt="Container modular modern produs de SmartContainer"
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
                    alt={`Imagine ${product.title} – ${product.description}`}
                    fill
                    className="object-cover rounded-t-xl"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-600 md:max-w-72 text-center mx-auto">
                    {product.description}
                  </p>
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
