import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

const CONTACT_EMAIL = "viebee.contact@gmail.com";

export function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="VieBee home">
      <img
        src="/viebee-official.png"
        alt="VieBee"
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform duration-200 group-hover:scale-105"
      />
      <span
        className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
          light ? "text-[#fffaec]" : "text-ink"
        }`}
      >
        Vie<span className={light ? "text-honey" : "text-primary"}>Bee</span>
      </span>
    </Link>
  );
}

export function SiteHeader({
  transparentAtTop = false,
  wide = false,
}: {
  transparentAtTop?: boolean;
  wide?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isUpcoming = pathname === "/upcoming";
  const isAbout = pathname === "/about";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = transparentAtTop && !scrolled;

  const sectionLinks = [
    { href: "/#features", label: "Platform" },
    { href: "/#why", label: "Why Vietnam" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isTransparent ? "bg-transparent" : "bg-background"
      }`}
    >
      <div
        className={`mx-auto flex h-16 items-center justify-between gap-2 px-4 sm:h-18 sm:px-8 ${
          wide ? "max-w-7xl" : "max-w-6xl"
        }`}
      >
        <BrandLockup light={isTransparent} />

        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main">
          <Link
            to="/about"
            className={`group relative whitespace-nowrap py-1.5 text-[13px] sm:text-sm transition-colors ${
              isTransparent
                ? "font-bold text-[#fffaec]/95 hover:text-honey"
                : isAbout
                  ? "font-extrabold text-ink"
                  : "font-semibold text-muted-foreground hover:text-ink"
            }`}
          >
            <span className="sm:hidden">About</span>
            <span className="hidden sm:inline">About us</span>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                isTransparent ? "bg-honey" : "bg-primary"
              } ${isAbout ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>

          <Link
            to="/upcoming"
            className={`group relative whitespace-nowrap py-1.5 text-[13px] sm:text-sm transition-colors ${
              isTransparent
                ? "font-bold text-[#fffaec]/95 hover:text-honey"
                : isUpcoming
                  ? "font-extrabold text-ink"
                  : "font-semibold text-muted-foreground hover:text-ink"
            }`}
          >
            <span className="sm:hidden">Events</span>
            <span className="hidden sm:inline">Upcoming event</span>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                isTransparent ? "bg-honey" : "bg-primary"
              } ${isUpcoming ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative whitespace-nowrap py-1.5 text-sm font-semibold transition-colors ${
                  isTransparent
                    ? "text-[#fffaec]/90 hover:text-honey"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100 ${
                    isTransparent ? "bg-honey" : "bg-primary"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href="/#join"
            className={`btn-pop whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm font-bold ${
              isTransparent
                ? "bg-honey text-ink"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <span className="sm:hidden">Waitlist</span>
            <span className="hidden sm:inline">Join waitlist</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <footer className="bg-[#f3efe6] text-ink">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="space-y-1.5">
            <BrandLockup />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Peer-to-peer cultural travel across Vietnam, hosted by local cooks, artisans, and storytellers.
            </p>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            aria-label={copiedEmail ? "Email copied to clipboard" : `Copy ${CONTACT_EMAIL}`}
            className="inline-flex h-10 w-fit items-center gap-2 rounded-full border-2 border-ink/25 bg-card px-4 text-sm font-bold text-ink transition-colors hover:border-ink"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <span>{CONTACT_EMAIL}</span>
            {copiedEmail ? (
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
            ) : (
              <Copy className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            )}
          </button>
        </div>

        <p className="mt-6 text-[13px] font-semibold text-muted-foreground">
          © 2026 VieBee · Ho Chi Minh City, Vietnam
        </p>
      </div>
    </footer>
  );
}
