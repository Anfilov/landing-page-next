import Image from "next/image";
import type { EntryFieldTypes } from "contentful";
import { contentfulClient } from "@/lib/contentful";
import Navigation from "./components/Navigation";
import ScrollReveal from "./components/ScrollReveal";
import HeroBackground from "./components/HeroBackground";
import MarqueeStrip from "./components/MarqueeStrip";
import AnimatedNumber from "./components/AnimatedNumber";
import GoldOrb from "./components/GoldOrb";

interface LandingPageSkeleton {
  contentTypeId: "landingpage";
  fields: {
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
}

async function getLandingPageData() {
  const entries = await contentfulClient.getEntries<LandingPageSkeleton>({
    content_type: "landingpage",
    limit: 1,
  });

  return entries.items[0]?.fields;
}

export default async function Home() {
  const data = await getLandingPageData();

  const title =
    (data?.title as string) ?? "Grafické design & branding studio";
  const subtitle = (data?.subtitle as string) ?? "Od strategie po design.";
  const description =
    (data?.description as string) ??
    "Tvoříme vizuální identity, logotypy, tiskoviny a komunikační systémy. Pracujeme s přesností — každý detail má svůj důvod.";

  const services = [
    {
      num: "01",
      title: "Vizuální identita",
      text: "Kompletní vizuální systém. Logo, typografie, barvy, pravidla použití.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Tiskoviny a komunikace",
      text: "Katalogy, vizitky, letáky, prezentace. Tiskový i digitální formát.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Strategie značky",
      text: "Positioning, tón komunikace, naming. Základ celého systému.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: 30, suffix: "+", label: "Let zkušeností" },
    { value: 500, suffix: "+", label: "Projektů" },
    { value: 120, suffix: "+", label: "Spokojených klientů" },
  ];

  return (
    <div className="grain">
      <Navigation />

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-900">
        <HeroBackground />

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-transparent to-neutral-900" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(214,189,104,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-[2] mx-auto max-w-5xl px-8 text-center">
          <div className="animate-fade-up delay-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-400/70">
              {subtitle}
            </p>
          </div>

          <div className="animate-fade-up delay-2 mt-3">
            <div className="gold-rule mx-auto w-12 opacity-40" />
          </div>

          <h1 className="animate-fade-up delay-3 hero-title mt-10 text-white">
            {title}
          </h1>

          <p className="animate-fade-up delay-4 mx-auto mt-8 max-w-[520px] text-[15px] leading-[1.7] text-white/40">
            {description}
          </p>

          <div className="animate-fade-up delay-5 mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#sluzby" className="btn-primary" style={{ color: "#1A1A1A" }}>
              Zobrazit služby
            </a>
            <a href="#kontakt" className="btn-ghost-dark">
              Kontakt
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-8 absolute bottom-10 left-1/2 z-[2] -translate-x-1/2">
          <a
            href="#marquee"
            className="scroll-indicator flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/20">
              Scroll
            </span>
            <svg
              className="h-4 w-4 text-white/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────── */}
      <section id="marquee" className="marquee-section bg-neutral-900 py-6 border-y border-white/5">
        <MarqueeStrip
          items={[
            "Vizuální identita",
            "Branding",
            "Logotypy",
            "Tiskoviny",
            "Strategie",
            "Design systémy",
            "Naming",
            "Komunikace",
          ]}
          speed={40}
        />
      </section>

      {/* ── SLUŽBY ───────────────────────────── */}
      <section id="sluzby" className="relative overflow-hidden bg-neutral-50 py-32">
        <GoldOrb className="-top-40 -right-40 opacity-30" size={500} delay={0} />

        <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
          <ScrollReveal>
            <div className="mb-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                Co děláme
              </p>
              <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-tight text-neutral-800">
                Služby
              </h2>
              <div className="gold-rule mt-6 w-20" />
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 150}>
                <div className="service-card-v2 group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-10">
                  <div className="service-card-glow" />

                  <span className="relative z-[1] inline-block text-gold-400/60 transition-colors duration-500 group-hover:text-gold-400">
                    {s.icon}
                  </span>

                  <span className="relative z-[1] mt-6 block font-mono text-[12px] text-gold-400/50">
                    {s.num}
                  </span>

                  <h3 className="relative z-[1] mt-2 text-[22px] font-semibold leading-[1.3] tracking-tight text-neutral-800 transition-colors duration-500 group-hover:text-gold-800">
                    {s.title}
                  </h3>

                  <p className="relative z-[1] mt-4 text-[15px] leading-[1.65] text-neutral-500">
                    {s.text}
                  </p>

                  <div className="service-card-line" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-900 py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(214,189,104,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="stat-value-large text-gold-400">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── O NÁS ────────────────────────────── */}
      <section id="o-nas" className="relative overflow-hidden bg-neutral-50 py-32">
        <GoldOrb className="-bottom-60 -left-60 opacity-20" size={600} delay={2} />

        <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid items-start gap-20 lg:grid-cols-12">
            {/* Text */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                  O studiu
                </p>
                <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-tight text-neutral-800">
                  Simon Anfilov
                </h2>
                <div className="gold-rule mt-6 w-16" />
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="mt-10 max-w-[540px] space-y-6">
                  <p className="text-[16px] leading-[1.7] text-neutral-500">
                    Brand Designer s více jak 30 letou zkušeností v reklamě a
                    marketingu. Pomůže vdechnout život vaší značce a nastartovat
                    marketing.
                  </p>
                  <p className="text-[16px] leading-[1.7] text-neutral-500">
                    Věnuje se strategické tvorbě značek pro firmy i jednotlivce.
                    Design, který funguje.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <blockquote className="quote-accent mt-14">
                  <p className="text-[22px] font-semibold leading-[1.35] tracking-tight text-neutral-800">
                    3 dekády. Stovky projektů.
                    <br />
                    Jeden přístup —{" "}
                    <span className="text-gold-500">přesnost</span>.
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Animated geometric pattern instead of photo */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={200}>
                <div className="geometric-card relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200/80 bg-white">
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 grid-pattern" />

                  {/* Floating geometric shapes */}
                  <div className="geo-shape geo-shape-1" />
                  <div className="geo-shape geo-shape-2" />
                  <div className="geo-shape geo-shape-3" />
                  <div className="geo-shape geo-shape-4" />

                  {/* Center emblem */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="emblem-ring">
                      <div className="emblem-ring-inner">
                        <span className="text-[48px] font-semibold tracking-tight text-gold-400/80">
                          A
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="gold-rule opacity-30" />
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                      Est. 1996
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-900 py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 50% 50%, rgba(214,189,104,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-8 text-center lg:px-12">
          <ScrollReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-400/50">
              Začněme spolupráci
            </p>
            <h2 className="mt-6 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.2] tracking-tight text-white">
              Máte projekt, který potřebuje
              <br />
              <span className="text-gold-400">silnou značku</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.7] text-white/35">
              Ozvěte se. Probereme, co potřebujete, a navrhneme řešení.
            </p>
            <div className="mt-12">
              <a href="mailto:info@anfilov.cz" className="btn-primary text-[15px]" style={{ color: "#1A1A1A" }}>
                Napište nám
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer id="kontakt" className="border-t border-white/5 bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <ScrollReveal>
            <div className="grid gap-12 md:grid-cols-12 md:items-start">
              {/* Logo */}
              <div className="md:col-span-4">
                <Image
                  src="/ANFILOV-Symbol-White.svg"
                  alt="ANFILOV"
                  width={36}
                  height={36}
                  unoptimized
                  className="h-9 w-9 transition-transform duration-500 hover:rotate-6"
                />
                <p className="mt-4 text-[14px] leading-[1.5] text-white/30">
                  Od strategie po design.
                </p>
              </div>

              {/* Kontakt */}
              <div className="md:col-span-4">
                <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/25">
                  Kontakt
                </h4>
                <div className="mt-4 space-y-3">
                  <p>
                    <a
                      href="mailto:info@anfilov.cz"
                      className="footer-link-dark text-[14px]"
                    >
                      info@anfilov.cz
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+420777000000"
                      className="footer-link-dark text-[14px]"
                    >
                      +420 777 000 000
                    </a>
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="md:col-span-4 md:text-right">
                <p className="text-[11px] leading-[1.4] text-white/20">
                  &copy; {new Date().getFullYear()} ANFILOV
                </p>
                <p className="mt-1 text-[11px] leading-[1.4] text-white/20">
                  Všechna práva vyhrazena.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="gold-rule mt-16 opacity-20" />
        </div>
      </footer>
    </div>
  );
}
