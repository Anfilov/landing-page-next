import Navigation from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export default function OProjektu() {
  return (
    <div className="grain">
      <Navigation />

      <section className="min-h-screen bg-neutral-50 px-6 pt-32 pb-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            {/* Headline column */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-gold-600">
                  O projektu
                </p>
                <div className="gold-rule mt-6 w-12" />
                <h1 className="mt-8 text-[36px] font-semibold leading-[1.2] tracking-tight text-neutral-800">
                  ANFILOV
                </h1>
                <p className="mt-4 text-[14px] leading-[1.5] text-neutral-400">
                  Grafické design &amp; branding studio
                </p>
              </ScrollReveal>
            </div>

            {/* Content column */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={150}>
                <div className="max-w-[640px] space-y-6">
                  <p className="text-[16px] leading-[1.6] text-neutral-500">
                    ANFILOV je studio zaměřené na tvorbu vizuálních identit, logotypů, tiskovin a komunikačních systémů. Každý projekt začíná strategií a končí funkčním designem.
                  </p>
                  <p className="text-[16px] leading-[1.6] text-neutral-500">
                    Za studiem stojí Simon Anfilov — Brand Designer s více jak 30 letou zkušeností v reklamě a marketingu. Pracuje s firmami i jednotlivci.
                  </p>
                  <p className="text-[16px] leading-[1.6] text-neutral-500">
                    Žádná zbytečná slova. Žádné obecné fráze. Funkční design mluví sám za sebe.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <blockquote className="quote-accent mt-12">
                  <p className="text-[20px] font-semibold leading-[1.4] tracking-tight text-neutral-800">
                    Nepřesvědčuji.
                    <br />
                    Práce mluví za mne.
                  </p>
                </blockquote>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal delay={450}>
                <div className="mt-16 grid grid-cols-3 gap-8">
                  <div>
                    <p className="stat-value">30+</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-neutral-500">
                      let zkušeností
                    </p>
                  </div>
                  <div>
                    <p className="stat-value">100+</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-neutral-500">
                      projektů
                    </p>
                  </div>
                  <div>
                    <p className="stat-value">1</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-neutral-500">
                      přístup
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={550}>
                <div className="mt-16">
                  <a href="/" className="btn-ghost">
                    Zpět na hlavní stránku
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
