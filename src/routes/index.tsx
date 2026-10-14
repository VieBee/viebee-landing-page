import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  animate,
  AnimatePresence,
} from "framer-motion";
import { Map, Languages, Smartphone, Play, ShieldCheck, MapPin, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import bee from "@/assets/bee.png.asset.json";
import { BrushHighlight, BrushUnderline, BrushCircle } from "@/components/Brush";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VieBee — Experience local. Truly." },
      { name: "description", content: "Discover Vietnam beyond the guidebooks through the people who live it. Book micro-workshops with verified local hosts." },
      { property: "og:title", content: "VieBee — Experience local. Truly." },
      { property: "og:description", content: "Discover Vietnam beyond the guidebooks through the people who live it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "en" | "vi";
const t = {
  en: {
    nav: ["How it works", "Features", "Hosts", "Why now"],
    join: "Join Waitlist",
    badge: "Peer-to-peer cultural travel",
    h1a: "Experience",
    h1b: "local.",
    h1c: "Truly.",
    sub: "Discover Vietnam beyond the guidebooks — through the people who live it.",
    cta: "See How It Works",
    cta2: "Become a host",
    marquee: ["Phở cooking", "Silk weaving", "Bát Tràng pottery", "Bamboo crafting", "Áo dài tailoring", "Embroidery", "Coffee farming", "Street food walks"],
    howTitle: ["Three taps to", "real culture"],
    how: [
      ["Explore the map", "Find workshops, artisans and food traditions near you."],
      ["Meet the host", "Read their story. See reviews and verification."],
      ["RSVP & go", "Pick a slot. The AI Copilot handles the language."],
    ],
    action: "See VieBee in action",
    featTitle: ["Built for", "curious", "travelers"],
    f: [
      ["Cultural Map", "Hidden local gems, mapped."],
      ["AI Copilot", "Real-time translation + cultural context."],
      ["Zero-tech hosting", "Set up a workshop in minutes."],
      ["Verified", "Community-checked hosts & reviews."],
    ],
    hostKicker: "For hosts",
    hostTitle: ["Your craft is", "worth sharing."],
    hostSub: "Home cooks, weavers, potters, tailors, farmers — earn from what you already know.",
    hostList: ["Create a workshop", "Set slots & capacity", "Manage RSVPs", "Get paid"],
    whyTitle: ["Vietnam is", "buzzing"],
    stats: [
      [21.2, "M", "international visitors in 2025"],
      [20.4, "%", "year-over-year growth"],
      [135.5, "M", "domestic trips in 2025"],
    ],
    finalTitle: ["Be the first to", "fly with us."],
    email: "your@email.com",
    thanks: "You're on the list! 🐝",
  },
  vi: {
    nav: ["Cách hoạt động", "Tính năng", "Chủ nhà", "Vì sao"],
    join: "Tham gia ngay",
    badge: "Du lịch văn hoá ngang hàng",
    h1a: "Trải nghiệm",
    h1b: "bản địa.",
    h1c: "Đích thực.",
    sub: "Khám phá Việt Nam vượt xa sách hướng dẫn — qua chính những người đang sống ở đó.",
    cta: "Xem cách hoạt động",
    cta2: "Trở thành chủ nhà",
    marquee: ["Nấu phở", "Dệt lụa", "Gốm Bát Tràng", "Đan tre", "May áo dài", "Thêu tay", "Trồng cà phê", "Ẩm thực đường phố"],
    howTitle: ["Ba chạm đến", "văn hoá thật"],
    how: [
      ["Khám phá bản đồ", "Tìm workshop, nghệ nhân và ẩm thực quanh bạn."],
      ["Gặp chủ nhà", "Đọc câu chuyện. Xem đánh giá và xác minh."],
      ["Đặt chỗ & đi", "Chọn giờ. AI Copilot lo phần ngôn ngữ."],
    ],
    action: "Xem VieBee hoạt động",
    featTitle: ["Dành cho", "những", "lữ khách tò mò"],
    f: [
      ["Bản đồ văn hoá", "Những viên ngọc ẩn, trên bản đồ."],
      ["AI Copilot", "Dịch thời gian thực + bối cảnh văn hoá."],
      ["Đón khách dễ dàng", "Tạo workshop trong vài phút."],
      ["Đã xác minh", "Chủ nhà được cộng đồng kiểm chứng."],
    ],
    hostKicker: "Cho chủ nhà",
    hostTitle: ["Tay nghề của bạn", "đáng được chia sẻ."],
    hostSub: "Đầu bếp tại gia, thợ dệt, thợ gốm, thợ may, nông dân — kiếm thu nhập từ điều bạn đã biết.",
    hostList: ["Tạo workshop", "Đặt giờ & số chỗ", "Quản lý đặt chỗ", "Nhận thanh toán"],
    whyTitle: ["Việt Nam đang", "rộn ràng"],
    stats: [
      [21.2, "Tr", "khách quốc tế năm 2025"],
      [20.4, "%", "tăng trưởng so với năm trước"],
      [135.5, "Tr", "lượt khách nội địa năm 2025"],
    ],
    finalTitle: ["Hãy là người đầu tiên", "bay cùng chúng tôi."],
    email: "email@cuaban.com",
    thanks: "Bạn đã có tên trong danh sách! 🐝",
  },
};

const ids = ["how", "features", "hosts", "why"];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (x) => setV(x) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toFixed(1)}
      {suffix}
    </span>
  );
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const rx = useSpring(0, { stiffness: 200, damping: 15 });
  const ry = useSpring(0, { stiffness: 200, damping: 15 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
  };
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [joined, setJoined] = useState(false);
  const c = t[lang];

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: vp } = useScroll({ target: videoRef, offset: ["start end", "center center"] });
  const scale = useTransform(vp, [0, 1], [0.92, 1]);
  const rotate = useTransform(vp, [0, 1], [-3, 0]);
  const { scrollYProgress } = useScroll();

  // Bee follows the cursor in hero
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useSpring(mx, { stiffness: 40, damping: 12 });
  const by = useSpring(my, { stiffness: 40, damping: 12 });

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const featIcons = [Map, Languages, Smartphone, ShieldCheck] as const;
  const featTones = ["bg-primary text-primary-foreground", "bg-honey text-ink", "bg-card text-ink", "bg-sky text-ink"];
  const howIcons = [MapPin, Sparkles, CalendarCheck] as const;

  const LangToggle = (
    <div className="relative flex rounded-full bg-ink/5 p-0.5 text-[11px] font-semibold">
      <motion.span
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-ink"
        animate={{ left: lang === "en" ? 2 : "50%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {(["en", "vi"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative z-10 w-9 py-1 uppercase transition-colors ${lang === l ? "text-background" : "text-muted-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary" />

      {/* Notion-like nav: full-width at top, condenses into a floating pill on scroll */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className={`flex items-center justify-between gap-4 ${
            scrolled
              ? "w-full max-w-3xl rounded-2xl border border-ink/10 bg-background/80 px-3 py-2 shadow-soft backdrop-blur-xl"
              : "w-full max-w-6xl rounded-none border border-transparent bg-transparent px-3 py-3"
          }`}
        >
          <a href="#top" className="flex items-center gap-1.5">
            <img src={logo.url} alt="VieBee" className={`mix-blend-multiply transition-all ${scrolled ? "h-8 w-8" : "h-10 w-10"}`} />
            <span className={`font-bold text-primary transition-all ${scrolled ? "text-lg" : "text-xl"}`}>VieBee</span>
          </a>
          <div className="hidden items-center gap-0.5 md:flex">
            {c.nav.map((n, i) => (
              <a
                key={n}
                href={`#${ids[i]}`}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-ink/5 ${
                  active === ids[i] ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {active === ids[i] && (
                  <motion.span layoutId="navActive" className="absolute inset-0 rounded-lg bg-ink/5" />
                )}
                <span className="relative">{n}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {LangToggle}
            <a
              href="#join"
              className="rounded-xl bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              {c.join}
            </a>
          </div>
        </motion.nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left - r.width / 2);
          my.set(e.clientY - r.top - r.height / 2);
        }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-honey/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-sky blur-3xl" />
        <svg className="pointer-events-none absolute left-[6%] top-[30%] h-24 w-24 text-primary/20 animate-float" viewBox="0 0 100 100">
          <path d="M10 50 Q 30 10 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <svg className="pointer-events-none absolute right-[8%] top-[22%] h-20 w-20 text-honey animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 100 100">
          <path d="M50 5 L61 39 L95 39 L67 60 L78 95 L50 73 L22 95 L33 60 L5 39 L39 39 Z" fill="currentColor" />
        </svg>
        <div className="pointer-events-none absolute bottom-[14%] left-[14%] h-16 w-16 rounded-full border-[6px] border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />

        <motion.img
          src={bee.url}
          alt=""
          style={{ x: bx, y: by }}
          className="pointer-events-none absolute right-[-2%] top-[2%] z-20 hidden w-[30rem] mix-blend-multiply md:block"
        />

        <div className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-honey px-4 py-1 text-xs font-semibold text-ink shadow-pop"
          >
            {c.badge}
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={lang}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-7xl md:text-8xl"
            >
              {c.h1a} <BrushHighlight>{c.h1b}</BrushHighlight>
              <br />
              <span className="text-primary">
                <BrushUnderline>{c.h1c}</BrushUnderline>
              </span>
            </motion.h1>
          </AnimatePresence>
          <p className="mx-auto mt-8 max-w-md text-lg font-light text-muted-foreground">{c.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-primary px-7 py-4 font-medium text-primary-foreground shadow-pop transition hover:-translate-y-1 hover:translate-x-[-2px]"
            >
              {c.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#hosts"
              className="inline-flex items-center rounded-2xl border-2 border-ink bg-card px-7 py-4 font-medium text-ink transition hover:-translate-y-1 hover:shadow-pop"
            >
              {c.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="-rotate-1 overflow-hidden border-y-2 border-ink bg-honey py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-xl font-semibold text-ink">
          {[...c.marquee, ...c.marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-background px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {c.howTitle[0]} <BrushCircle>{c.howTitle[1]}</BrushCircle>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {c.how.map(([title, sub], i) => {
              const I = howIcons[i] ?? MapPin;
              return (
                <Reveal key={i} delay={i * 0.15}>
                  <div className={`relative rounded-3xl border-2 border-ink bg-card p-8 transition hover:-translate-y-2 hover:shadow-pop ${i === 1 ? "md:mt-10" : ""}`}>
                    <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-honey text-lg font-bold text-ink">
                      {i + 1}
                    </span>
                    <I className="mb-5 h-8 w-8 text-primary" strokeWidth={1.75} />
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{sub}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-primary px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              {c.action}
            </p>
          </Reveal>
          <motion.div
            ref={videoRef}
            style={{ scale, rotate }}
            className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-2 border-ink bg-background shadow-pop"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--honey-soft),transparent_60%)]" />
            <img src={bee.url} alt="" className="absolute right-8 top-6 w-40 mix-blend-multiply animate-wiggle" />
            <span className="absolute inset-0 m-auto h-24 w-24 animate-ping rounded-full bg-primary/20" />
            <button
              aria-label="Play video"
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-ink bg-honey text-ink transition duration-300 group-hover:scale-110"
            >
              <Play className="ml-1 h-10 w-10" fill="currentColor" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES (bento) */}
      <section id="features" className="bg-sky px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {c.featTitle[0]} {c.featTitle[1]} <br />
              <BrushHighlight>{c.featTitle[2]}</BrushHighlight>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {c.f.map(([title, sub], i) => {
              const I = featIcons[i] ?? Map;
              const big = i === 0 || i === 3;
              return (
                <Reveal key={i} delay={i * 0.1} className={big ? "md:col-span-2" : ""}>
                  <TiltCard className={`flex h-full min-h-56 flex-col justify-between rounded-3xl border-2 border-ink p-8 shadow-pop ${featTones[i]}`}>
                    <I className="h-10 w-10" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <p className="mt-1 opacity-80">{sub}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section id="hosts" className="bg-ink px-6 py-28 text-background">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">{c.hostKicker}</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {c.hostTitle[0]} <span className="text-honey">{c.hostTitle[1]}</span>
            </h2>
            <p className="mt-6 max-w-sm font-light text-background/70">{c.hostSub}</p>
          </Reveal>
          <div className="space-y-3">
            {c.hostList.map((h, i) => (
              <Reveal key={h} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 12, rotate: i % 2 ? 1 : -1 }}
                  className="flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 px-6 py-5"
                >
                  <span className="text-2xl font-bold text-honey">0{i + 1}</span>
                  <span className="text-lg">{h}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section id="why" className="bg-background px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {c.whyTitle[0]} <BrushUnderline><span className="text-primary">{c.whyTitle[1]}</span></BrushUnderline>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {c.stats.map(([n, s, label], i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="text-6xl font-bold text-primary md:text-7xl">
                  <Counter to={n as number} suffix={s as string} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="relative overflow-hidden bg-honey px-6 py-28">
        <img src={bee.url} alt="" className="absolute -left-10 top-6 w-56 mix-blend-multiply animate-wiggle" />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold leading-tight text-ink md:text-6xl">
              {c.finalTitle[0]} <br />
              <span className="text-primary">{c.finalTitle[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <AnimatePresence mode="wait">
              {joined ? (
                <motion.p
                  key="ok"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-10 inline-block rounded-2xl border-2 border-ink bg-card px-6 py-4 text-lg font-semibold text-ink shadow-pop"
                >
                  {c.thanks}
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setJoined(true);
                  }}
                  className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder={c.email}
                    className="flex-1 rounded-2xl border-2 border-ink bg-card px-5 py-4 text-ink outline-none focus:shadow-pop"
                  />
                  <button className="rounded-2xl border-2 border-ink bg-primary px-6 py-4 font-medium text-primary-foreground shadow-pop transition hover:-translate-y-1">
                    {c.join}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      <footer className="flex items-center justify-center gap-2 bg-card py-10 text-sm text-muted-foreground">
        <img src={logo.url} alt="" className="h-6 w-6 mix-blend-multiply" />© VieBee Official
      </footer>
    </div>
  );
}
