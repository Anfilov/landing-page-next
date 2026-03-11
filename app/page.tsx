import { getHomepageData } from "@/lib/queries";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const defaults = {
  heroSubtitle: "Od strategie po design.",
  heroTitle: "Grafické design & branding studio",
  heroDescription:
    "Tvoříme vizuální identity, logotypy, tiskoviny a komunikační systémy. Pracujeme s přesností — každý detail má svůj důvod.",
  marqueeItems: [
    "Vizuální identita",
    "Branding",
    "Logotypy",
    "Tiskoviny",
    "Strategie",
    "Design systémy",
    "Naming",
    "Komunikace",
  ],
  servicesLabel: "Co děláme",
  servicesTitle: "Služby",
  services: [
    { num: "01", title: "Vizuální identita", text: "Kompletní vizuální systém. Logo, typografie, barvy, pravidla použití." },
    { num: "02", title: "Tiskoviny a komunikace", text: "Katalogy, vizitky, letáky, prezentace. Tiskový i digitální formát." },
    { num: "03", title: "Strategie značky", text: "Positioning, tón komunikace, naming. Základ celého systému." },
  ],
  stats: [
    { value: 30, suffix: "+", label: "Let zkušeností" },
    { value: 500, suffix: "+", label: "Projektů" },
    { value: 120, suffix: "+", label: "Spokojených klientů" },
  ],
  aboutLabel: "O studiu",
  aboutHeading: "Simon Anfilov",
  aboutParagraphs: [
    "Brand Designer s více jak 30 letou zkušeností v reklamě a marketingu. Pomůže vdechnout život vaší značce a nastartovat marketing.",
    "Věnuje se strategické tvorbě značek pro firmy i jednotlivce. Design, který funguje.",
  ],
  aboutQuote: "3 dekády. Stovky projektů. Jeden přístup — přesnost.",
  aboutEstablished: "Est. 1996",
  contactLabel: "Začněme spolupráci",
  contactHeading: "Máte projekt, který potřebuje silnou značku?",
  contactDescription: "Ozvěte se. Probereme, co potřebujete, a navrhneme řešení.",
  footerTagline: "Od strategie po design.",
  footerEmail: "info@anfilov.cz",
  footerPhone: "+420 777 000 000",
};

export default async function Home() {
  const data = await getHomepageData();

  const d = { ...defaults, ...Object.fromEntries(
    Object.entries(data ?? {}).filter(([, v]) => v != null)
  )};

  return (
    <div className="grain">
      <Navbar />
      <Hero
        subtitle={d.heroSubtitle}
        title={d.heroTitle}
        description={d.heroDescription}
        marqueeItems={d.marqueeItems}
        servicesLabel={d.servicesLabel}
        servicesTitle={d.servicesTitle}
        services={d.services}
        stats={d.stats}
        aboutLabel={d.aboutLabel}
        aboutHeading={d.aboutHeading}
        aboutParagraphs={d.aboutParagraphs}
        aboutQuote={d.aboutQuote}
        aboutEstablished={d.aboutEstablished}
      />
      <ContactForm
        label={d.contactLabel}
        heading={d.contactHeading}
        description={d.contactDescription}
      />
      <Footer
        tagline={d.footerTagline}
        email={d.footerEmail}
        phone={d.footerPhone}
      />
    </div>
  );
}
