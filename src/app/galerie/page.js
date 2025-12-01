import Gallery from "../components/gallery";
import { getGalleryImages } from "../lib/getGalleryImages";

export const metadata = {
  title: "Galerie Containere Modulare – Modele, Configurații și Proiecte",
  description:
    "Galerie foto cu containere modulare: containere standard, duble, sanitare și configurații personalizate. Vezi exemple reale de proiecte și accesorii disponibile.",
  keywords: [
    "galerie containere",
    "containere modulare",
    "containere birou",
    "containere șantier",
    "containere personalizate",
    "containere dublu",
    "containere sanitar",
    "proiecte containere",
    "imagini containere",
  ],
  openGraph: {
    title: "Galerie Containere Modulare – Modele și Proiecte Realizate",
    description:
      "Explorează galeria noastră cu containere modulare: modele standard, duble, sanitare și configurații speciale.",
    images: [
      {
        url: "/products/landscape/standard-1.webp",
        width: 1200,
        height: 630,
        alt: "Galerie containere modulare",
      },
    ],
    type: "website",
  },
};

export default function GaleriePage() {
  const images = getGalleryImages()

  return <Gallery images={images} />;
}
