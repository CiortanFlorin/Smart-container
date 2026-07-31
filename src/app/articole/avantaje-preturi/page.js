import Link from "next/link";
import { breadcrumbJsonLd } from "@/app/lib/jsonld";

export const metadata = {
  title: "Case din Containere: Avantaje, Prețuri și Modele Populare în România | SmartContainer",
  description:
    "Află tot ce trebuie să știi despre casele din containere: avantaje, dezavantaje, prețuri reale, modele populare în România și opțiuni de configurare modulară.",
  keywords: [
    "case din containere",
    "casa din containere pret",
    "container locuinta",
    "locuinte modulare",
    "case modulare romania",
    "containere de locuit"
  ],
  alternates: {
    canonical: "/articole/avantaje-preturi",
  },
  openGraph: {
    title: "Case din Containere: Avantaje, Prețuri și Modele Populare în România",
    description:
      "Ghid complet despre casele din containere: avantaje, prețuri, modele și tot ce trebuie să știi înainte să cumperi.",
    type: "article",
    url: "/articole/avantaje-preturi",
    images: [
      "/og/case-din-containere.webp"
    ]
  }
};

export default function CaseDinContainerePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Acasă", url: "/" },
    { name: "Case din Containere", url: "/articole/avantaje-preturi" },
  ]);

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1 className="text-4xl font-bold mb-6 text-(--color-primary)">
        Case din Containere: Avantaje, Prețuri și Modele Populare în România
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Casele din containere au devenit o soluție modernă, accesibilă și rapidă
        pentru cei care își doresc o locuință durabilă, eficientă și ușor de
        configurat. În România, interesul pentru locuințele modulare este în
        continuă creștere, datorită flexibilității, costurilor reduse și
        posibilităților variate de personalizare.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Avantajele caselor din containere
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>
          <strong>Construcție rapidă</strong> – Casele modulare pot fi livrate și
          montate în câteva zile, comparativ cu lunile necesare unei construcții
          tradiționale.
        </li>
        <li>
          <strong>Preț redus</strong> – Costurile sunt mult mai mici decât la o
          casă clasică, deoarece materialele, manopera și timpul sunt reduse.
        </li>
        <li>
          <strong>Flexibilitate totală</strong> – Modulele pot fi unite orizontal
          sau vertical, permițând crearea unor locuințe de orice dimensiune.
        </li>
        <li>
          <strong>Durabilitate</strong> – Structura metalică oferă rezistență
          ridicată la vreme, impact și uzură.
        </li>
        <li>
          <strong>Eficiență energetică</strong> – Panourile termoizolante,
          împreună cu izolația din vată minerală, oferă confort termic excelent.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cât costă o casă din containere în România?
      </h2>
      <p className="text-gray-700 mb-4">
        Prețurile caselor modulare diferă în funcție de dimensiune, numărul de
        module, nivelul de izolație și dotările interioare. În general:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>
            <Link href="/produse/container-standard" className="text-(--color-primary) underline">
              Containere locuibile standard
            </Link>{" "}
            (6m × 2.4m)
          </strong>
          : de la 2500€ + TVA
        </li>
        <li>
          <strong>Module unite orizontal</strong>: de la 5000€ – 8000€ în funcție
          de echipare
        </li>
        <li>
          <strong>
            <Link href="/produse/container-dublu" className="text-(--color-primary) underline">
              Case container cu baie și bucătărie
            </Link>
          </strong>
          : 7000€ – 15.000€
        </li>
        <li>
          <strong>Case mari (3–6 module)</strong>: între 15.000€ și 35.000€
        </li>
      </ul>
      <p className="text-gray-700 mb-8">
        Prețurile diferă în funcție de cerințele clientului. Pentru o ofertă
        exactă, cel mai bine este să{" "}
        <Link href="/contact" className="text-(--color-accent) underline">
          ne contactezi
        </Link>{" "}
        sau să consulți{" "}
        <Link href="/galerie" className="text-(--color-accent) underline">
          galeria
        </Link>{" "}
        pentru modele reale construite de noi.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Modele populare de case din containere
      </h2>
      <p className="text-gray-700 mb-6">
        În România, cele mai solicitate configurații sunt:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li>Case din două containere unite orizontal (open-space mare)</li>
        <li>Case cu etaj (containere suprapuse)</li>
        <li>Case modulare cu baie și bucătărie integrate</li>
        <li>Containere rezidențiale cu terasă aplicată</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Sunt casele din containere potrivite pentru locuire permanentă?
      </h2>
      <p className="text-gray-700 mb-6">
        Da, dacă sunt construite corect, containerele modulare pot oferi confort
        termic și rezistență comparabile cu o casă tradițională. Izolația, panourile
        termoizolante și finisajele moderne transformă aceste structuri într-o
        soluție ideală pentru locuire permanentă sau vacanțe.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Concluzie
      </h2>
      <p className="text-gray-700 mb-6">
        Casele din containere reprezintă o alternativă accesibilă, rapidă și
        modernă la construcțiile clasice. Dacă îți dorești un proiect
        personalizat, modular și adaptat nevoilor tale, nu ezita să{" "}
        <Link href="/contact" className="text-(--color-accent) underline">
          ne contactezi
        </Link>{" "}
        pentru o ofertă sau să vizitezi{" "}
        <Link href="/galerie" className="text-(--color-accent) underline">
          galeria
        </Link>{" "}
        pentru a vedea modele realizate.
      </p>
    </main>
  );
}