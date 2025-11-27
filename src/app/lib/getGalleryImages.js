import fs from "fs";
import path from "path";

export function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  const files = fs.readdirSync(galleryPath);

  // Return full paths for Next/Image
  return files.map((file) => `/gallery/${file}`);
}
