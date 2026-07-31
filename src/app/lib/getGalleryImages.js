import fs from "fs";
import path from "path";

const altTemplates = [
  "Proiect container modular finalizat de SmartContainer",
  "Container de vânzare complet echipat - exemplu din galeria SmartContainer",
  "Configurație casă din containere realizată de SmartContainer",
  "Container pentru șantier echipat cu birou și grup sanitar",
  "Container toaletă / sanitar modular instalat pe șantier",
  "Detaliu interior container modular personalizat",
  "Container modular - finisaje și accesorii exterioare",
];

export function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  const files = fs.readdirSync(galleryPath);

  return files.map((file, index) => ({
    src: `/gallery/${file}`,
    alt: `${altTemplates[index % altTemplates.length]} (${index + 1})`,
  }));
}
