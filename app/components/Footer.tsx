import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  tagline: string;
  email: string;
  phone: string;
}

export default function Footer({ tagline, email, phone }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-neutral-900 py-20">
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
                {tagline}
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
                    href={`mailto:${email}`}
                    className="footer-link-dark text-[14px]"
                  >
                    {email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="footer-link-dark text-[14px]"
                  >
                    {phone}
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
  );
}
