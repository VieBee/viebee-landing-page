import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Map, Languages, Smartphone, Play, Plane, Compass, Landmark, Coffee } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VieBee — Experience local. Truly." },
      { name: "description", content: "Connect directly with local hosts. No barriers, just culture." },
      { property: "og:title", content: "VieBee — Experience local. Truly." },
      { property: "og:description", content: "Connect directly with local hosts. No barriers, just culture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "en" | "vi";
const t = {
  en: {
    join: "Join Waitlist",
    h1a: "Experience local.",
    h1b: "Truly.",
    sub: "Connect directly with local hosts. No barriers, just culture.",
    cta: "See How It Works",
    action: "See VieBee in action",
    f: [
      ["Discover", "Hidden local gems."],
      ["Translate", "Real-time AI Copilot."],
      ["Host", "Zero-tech setup."],
    ],
  },
  vi: {
    join: "Tham gia ngay",
    h1a: "Trải nghiệm bản địa.",
    h1b: "Đích thực.",
    sub: "Kết nối trực tiếp. Không rào cản.",
    cta: "Xem cách hoạt động",
    action: "Xem VieBee hoạt động",
    f: [
      ["Khám phá", "Những viên ngọc ẩn."],
      ["Dịch thuật", "Trợ lý AI thời gian thực."],
      ["Đón khách", "Thiết lập không cần công nghệ."],
    ],
  },
};

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const c = t[lang];
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const icons = [Map, Languages, Smartphone] as const;
  const floaters = [
    { I: Plane, cls: "left-[10%] top-[22%]", d: "0s" },
    { I: Compass, cls: "right-[12%] top-[28%]", d: "1.5s" },
    { I: Landmark, cls: "left-[18%] bottom-[18%]", d: "3s" },
    { I: Coffee, cls: "right-[16%] bottom-[22%]", d: "2s" },
  ];

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/70 backdrop-blur-lg border-b" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-2xl font-bold text-primary">VieBee</span>
          <div className="flex items-center gap-3">
            <div className="relative flex rounded-full bg-card p-1 text-xs font-medium border">
              <motion.span
                layout
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary"
                style={{ left: lang === "en" ? 4 : "50%" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              {(["en", "vi"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`relative z-10 w-10 py-1 uppercase transition-colors ${
                    lang === l ? "text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#features"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:scale-105 hover:shadow-soft"
            >
              {c.join}
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
        {floaters.map(({ I, cls, d }, i) => (
          <div
            key={i}
            className={`absolute hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-primary/70 animate-float ${cls}`}
            style={{ animationDelay: d }}
          >
            <I className="h-6 w-6" strokeWidth={1.5} />
          </div>
        ))}
        <div className="relative text-center">
          <motion.h1
            key={lang + "h"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          >
            {c.h1a} <br className="sm:hidden" />
            <span className="text-primary">{c.h1b}</span>
          </motion.h1>
          <motion.p
            key={lang + "p"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-md text-lg font-light text-muted-foreground"
          >
            {c.sub}
          </motion.p>
          <a
            href="#demo"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition duration-300 hover:scale-105 hover:shadow-soft"
          >
            {c.cta}
          </a>
        </div>
      </section>

      <section id="demo" className="bg-card px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {c.action}
            </p>
          </Reveal>
          <motion.div
            ref={videoRef}
            style={{ scale }}
            className="group relative flex aspect-video items-center justify-center rounded-3xl border bg-background"
          >
            <button
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition duration-300 group-hover:scale-110 group-hover:shadow-soft"
            >
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </button>
          </motion.div>
        </div>
      </section>

      <section id="features" className="bg-background px-6 py-28">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {c.f.map(([title, sub], i) => {
            const I = icons[i] ?? Map;
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className="rounded-3xl bg-card p-8 transition duration-300 hover:-translate-y-2 hover:shadow-soft">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <I className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <footer className="bg-card py-10 text-center text-sm text-muted-foreground">© VieBee Official</footer>
    </div>
  );
}
