import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { organizationJsonLd } from "./lib/jsonld";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://smartcontainer.ro"),
  title: "SmartContainer",
  description: "Containere modulare pentru locuit, birou și construcții",
  verification: {
    google: 'NwyrlOkVjCCchUDyGmCNyhlf6qmz1IV-m5o4ni314t4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-gray-800 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
