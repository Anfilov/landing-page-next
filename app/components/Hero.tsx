import HeroBackground from "./HeroBackground";
import MarqueeStrip from "./MarqueeStrip";
import ScrollReveal from "./ScrollReveal";
import AnimatedNumber from "./AnimatedNumber";
import GoldOrb from "./GoldOrb";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  marqueeItems: string[];
  servicesLabel: string;
  servicesTitle: string;
  services: { num: string; title: string; text: string }[];
  stats: { value: number; suffix: string; label: string }[];
  aboutLabel: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  aboutQuote: string;
  aboutEstablished: string;
}

const serviceIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
  </svg>,
];

export default function Hero({
  title,
  subtitle,
  description,
  marqueeItems,
  servicesLabel,
  servicesTitle,
  services,
  stats,
  aboutLabel,
  aboutHeading,
  aboutParagraphs,
  aboutQuote,
  aboutEstablished,
}: HeroProps) {
  return (
    <>
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
        <MarqueeStrip items={marqueeItems} speed={40} />
      </section>

      {/* ── SLUŽBY ───────────────────────────── */}
      <section id="sluzby" className="relative overflow-hidden bg-neutral-50 py-32">
        <GoldOrb className="-top-40 -right-40 opacity-30" size={500} delay={0} />

        <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
          <ScrollReveal>
            <div className="mb-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                {servicesLabel}
              </p>
              <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-tight text-neutral-800">
                {servicesTitle}
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
                    {serviceIcons[i] ?? serviceIcons[0]}
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
                  {aboutLabel}
                </p>
                <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-tight text-neutral-800">
                  {aboutHeading}
                </h2>
                <div className="gold-rule mt-6 w-16" />
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="mt-10 max-w-[540px] space-y-6">
                  {aboutParagraphs.map((p, i) => (
                    <p key={i} className="text-[16px] leading-[1.7] text-neutral-500">
                      {p}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <blockquote className="quote-accent mt-14">
                  <p className="text-[22px] font-semibold leading-[1.35] tracking-tight text-neutral-800">
                    {aboutQuote}
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Animated geometric pattern */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={200}>
                <div className="geometric-card relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200/80 bg-white">
                  <div className="absolute inset-0 grid-pattern" />

                  <div className="geo-shape geo-shape-1" />
                  <div className="geo-shape geo-shape-2" />
                  <div className="geo-shape geo-shape-3" />
                  <div className="geo-shape geo-shape-4" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="emblem-ring">
                      <div className="emblem-ring-inner">
                        <span className="text-[48px] font-semibold tracking-tight text-gold-400/80">
                          A
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="gold-rule opacity-30" />
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                      {aboutEstablished}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
