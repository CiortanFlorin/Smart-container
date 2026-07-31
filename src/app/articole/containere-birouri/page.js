import Link from "next/link";
import { breadcrumbJsonLd } from "@/app/lib/jsonld";

export const metadata = {
  title:
    "Containere pentru Birouri: Soluții Modulare Rapide pentru Companii | SmartContainer",
  description:
    "Container birou de vânzare: soluții modulare rapide pentru companii, șantiere sau spații administrative temporare. Configurații, dotări și prețuri orientative.",
  keywords: [
    "containere birou",
    "container birou de vanzare",
    "birouri modulare",
    "container birou santier",
    "containere modulare Romania",
  ],
  alternates: {
    canonical: "/articole/containere-birouri",
  },
  openGraph: {
    title: "Containere pentru Birouri: Soluții Modulare Rapide pentru Companii",
    description:
      "Container birou modular de vânzare: configurații, dotări, cost comparativ cu un birou clasic și opțiuni de extindere.",
    url: "/articole/containere-birouri",
    type: "article",
  },
};

export default function ContainereBirouriPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Acasă", url: "/" },
    { name: "Containere pentru Birouri", url: "/articole/containere-birouri" },
  ]);

  return (
    <main className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1 className="text-4xl font-bold mb-6 text-(--color-primary)">
        Containere pentru Birouri: Soluții Modulare Rapide și Eficiente pentru Companii
      </h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Un container birou este soluția rapidă pentru companiile care au nevoie
        de spațiu administrativ suplimentar, un punct de lucru temporar sau un
        birou de șantier — fără termenii lungi și costurile unei construcții
        clasice. Un container modular de birou poate fi livrat, echipat și pus
        în funcțiune în câteva zile, spre deosebire de lunile necesare unei
        clădiri tradiționale.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-(--color-primary)">
        Birou single sau open-space — două opțiuni de configurare
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Pentru un birou individual, o cabină de pază sau un spațiu administrativ
        compact,{" "}
        <Link href="/produse/container-standard" className="text-(--color-accent) underline">
          Containerul Standard
        </Link>{" "}
        (6m x 2,4m) oferă suficient spațiu pentru birou, dulapuri și zonă de
        primire. Când echipa are nevoie de mai mult spațiu — sală de ședințe,
        birou open-space pentru mai mulți angajați sau birou cu grup sanitar
        propriu —{" "}
        <Link href="/produse/container-dublu" className="text-(--color-accent) underline">
          Containerul Dublu
        </Link>{" "}
        (6m x 4,8m) oferă aproape dublul suprafeței, cu opțiunea unui grup
        sanitar complet echipat inclus.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-(--color-primary)">
        Dotări disponibile pentru un container birou
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Un container birou modular poate fi echipat integral pentru lucru zilnic:
        instalație electrică cu tablou de siguranțe, prize și iluminat LED, aer
        condiționat, izolație termică din panouri sandwich, mobilier de birou,
        geamuri termopan pentru lumină naturală și, la nevoie, un grup sanitar
        propriu. Toate dotările pot fi personalizate în funcție de numărul de
        angajați și de destinația exactă a spațiului.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-(--color-primary)">
        Container birou de șantier
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Pe șantiere, containerul birou este de obicei primul element instalat —
        aici se coordonează echipele, se țin ședințele și se gestionează
        documentația proiectului. Poate fi amplasat lângă un{" "}
        <Link href="/produse/container-sanitar" className="text-(--color-accent) underline">
          container sanitar
        </Link>{" "}
        pentru a forma un punct administrativ complet echipat. Poți vedea mai
        multe despre acest tip de configurare în articolul despre{" "}
        <Link href="/articole/containere-santier" className="text-(--color-accent) underline">
          containere pentru șantiere
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-(--color-primary)">
        Cost comparativ cu un birou tradițional
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Închirierea sau construirea unui spațiu de birou clasic implică timpi
        lungi de execuție și costuri greu de anticipat. Un container birou
        modular, în schimb, are un preț fix, cunoscut de la început, iar
        instalarea durează câteva zile — un avantaj important pentru companiile
        care au nevoie rapid de spațiu operațional sau care preferă o investiție
        ce poate fi ulterior relocată sau extinsă prin unirea mai multor module.
      </p>

      <p className="text-gray-700 mt-10 leading-relaxed font-medium">
        Ai nevoie de un container birou configurat exact după cerințele
        companiei tale?{" "}
        <Link href="/contact" className="text-(--color-accent) underline">
          Contactează-ne
        </Link>{" "}
        — îți oferim producție rapidă, consultanță și opțiuni variate de
        personalizare.
      </p>
    </main>
  );
}
