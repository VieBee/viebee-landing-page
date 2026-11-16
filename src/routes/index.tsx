import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  Languages,
  Map,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { BrushUnderline } from "@/components/Brush";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VieBee - Experience Vietnam through its people" },
      {
        name: "description",
        content:
          "Peer-to-peer cultural travel across Vietnam. Connect with verified local cooks, artisans, and storytellers.",
      },
      { property: "og:title", content: "VieBee - Experience Vietnam through its people" },
      {
        property: "og:description",
        content: "Peer-to-peer cultural travel beyond the guidebooks, hosted by local Vietnamese makers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: "/sample/vb-hero-bg.jpg", fetchPriority: "high" }],
  }),
  component: Index,
});

const MARQUEE_THEMES = [
  "Home cooking",
  "Silk weaving",
  "Hand-painted ceramics",
  "Bamboo crafting",
  "Áo dài tailoring",
  "Hand embroidery",
  "Coffee roasting",
  "Street food walks",
];

const FEATURES = [
  {
    title: "Cultural map",
    body: "Discover neighborhood kitchens, craft courtyards, and local storytellers around the city.",
    tone: "bg-card text-ink",
    badge: "bg-honey text-ink",
    icon: Map,
  },
  {
    title: "AI Copilot",
    body: "Real-time translation and cultural context so language never gets in the way.",
    tone: "bg-sky text-ink",
    badge: "bg-primary text-primary-foreground",
    icon: Languages,
  },
  {
    title: "Zero-tech hosting",
    body: "Locals can set up a session, pick dates, and welcome small groups in minutes.",
    tone: "bg-honey-soft text-ink",
    badge: "bg-card text-primary",
    icon: Smartphone,
  },
  {
    title: "Verified community",
    body: "Every host is vetted and reviewed by real guests before going live.",
    tone: "bg-card text-ink",
    badge: "bg-sky text-primary",
    icon: ShieldCheck,
  },
];

const CULTURE_MOSAIC = [
  {
    src: "/sample/vb-sample-3.jpg",
    alt: "Travelers and a local cook preparing fresh herbs and spices around a shared kitchen table",
    label: "Shared kitchens",
    w: 1350,
    h: 900,
  },
  {
    src: "/sample/vb-sample-1.jpg",
    alt: "Artisan hands stitching a traditional conical palm hat in warm daylight",
    label: "Conical hat craft",
    w: 547,
    h: 365,
  },
  {
    src: "/sample/vb-sample-5.png",
    alt: "Artisan in a teal áo dài presenting a handcrafted lotus lacquerware plate",
    label: "Lacquerware art",
    w: 895,
    h: 504,
  },
  {
    src: "/sample/vb-sample-4.jpg",
    alt: "Folk painter detailing a scroll painting surrounded by colorful traditional prints",
    label: "Folk painting",
    w: 679,
    h: 452,
  },
];

const STATS = [
  { value: "21.2M", label: "international visitors in 2025" },
  { value: "20.4%", label: "year-over-year travel growth" },
  { value: "135.5M", label: "domestic trips across Vietnam" },
];

// Never hide below-the-fold sections at opacity: 0 so full-page captures and fast scrolls always render content
function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.99, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [joined, setJoined] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
        <SiteHeader transparentAtTop />

        <main>
          {/* HERO: Full-bleed Muong Hoa terrace fields + marquee fit cleanly in the first viewport across devices */}
          <section
            id="top"
            className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-between overflow-hidden bg-ink pt-24 pb-6 sm:pt-32 sm:pb-8"
          >
            <img
              src="/sample/vb-hero-bg.jpg"
              alt="The Terrace Fields in Muong Hoa Valley, Sapa Town, Lao Cai Province"
              width={800}
              height={532}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#0d111b]/50" />

            <div className="relative z-10 mx-auto my-auto w-full max-w-6xl px-5 py-10 sm:px-8">
              <div className="max-w-2xl space-y-5 sm:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.06] tracking-tight text-[#fffaec] [text-wrap:balance]"
                >
                  Experience Vietnam <br />
                  through <BrushUnderline tone="honey">its people</BrushUnderline>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-lg text-base sm:text-xl leading-relaxed text-[#fffaec]/95"
                >
                  Peer-to-peer cultural travel beyond the guidebooks, hosted by local cooks, artisans, and storytellers.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap items-center gap-3.5 pt-2"
                >
                  <Link
                    to="/upcoming"
                    className="btn-pop bg-honey px-6 py-3.5 text-sm sm:text-base font-extrabold text-ink"
                  >
                    <span>Explore upcoming event</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#join"
                    className="btn-pop bg-card px-6 py-3.5 text-sm sm:text-base font-bold text-ink"
                  >
                    Join waitlist
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Grounded hero footer bar: scroll cue left, structured citation chip right */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <a
                href="#features"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#fffaec]/90 transition-colors hover:text-honey"
              >
                <ArrowDown className="h-4 w-4 text-honey" />
                <span>Explore VieBee</span>
              </a>

              <p className="inline-flex w-fit max-w-full items-center gap-2 rounded-2xl bg-[#0d111b]/75 px-3.5 py-2 text-[13px] sm:text-sm font-medium text-[#fffaec]/95">
                <Camera className="h-4 w-4 shrink-0 text-honey" aria-hidden="true" />
                <span>
                  The Terrace Fields in Muong Hoa Valley, Sapa Town, Lao Cai Province. Photo: Nguyen Tan Tuan.
                </span>
              </p>
            </div>
          </section>

          {/* MARQUEE */}
          <div className="border-y-2 border-ink bg-honey py-3.5 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap text-base sm:text-lg font-bold text-ink hover:[animation-play-state:paused]">
              {[...MARQUEE_THEMES, ...MARQUEE_THEMES].map((item, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          </div>

          {/* PLATFORM & LIVING CULTURE: Balanced 2x2 photo mosaic + matched-height 2x2 capability grid */}
          <section
            id="features"
            className="bg-background py-16 sm:py-20 lg:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
                <Rise className="lg:col-span-6">
                  <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-ink [text-wrap:balance]">
                    Built for curious travelers
                  </h2>
                </Rise>
                <Rise delay={0.05} className="lg:col-span-6">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Skip crowded tour buses. Connect directly with verified locals across Vietnam in small-group gatherings.
                  </p>
                </Rise>
              </div>

              <div className="mt-8 sm:mt-10 grid gap-5 lg:grid-cols-12 lg:items-stretch">
                {/* Left 6 cols: Equal-height 2x2 vibrant photo mosaic */}
                <Rise className="lg:col-span-6">
                  <div className="grid h-full grid-cols-2 grid-rows-2 gap-3.5">
                    {CULTURE_MOSAIC.map((photo) => (
                      <div
                        key={photo.src}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-ink bg-card"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.w}
                          height={photo.h}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-2.5 left-2.5 rounded-xl border-2 border-ink bg-card px-3 py-1 text-[13px] font-extrabold text-ink">
                          {photo.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Rise>

                {/* Right 6 cols: Equal-row 2x2 capability grid matching left photo grid height */}
                <div className="grid grid-rows-2 gap-3.5 sm:grid-cols-2 lg:col-span-6">
                  {FEATURES.map((feat, i) => {
                    const Icon = feat.icon;
                    return (
                      <Rise key={feat.title} delay={i * 0.05} className="h-full">
                        <div
                          className={`card-pop flex h-full flex-col justify-between gap-4 rounded-2xl border-2 border-ink p-5 sm:p-6 ${feat.tone}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-extrabold leading-snug">{feat.title}</h3>
                            <span
                              aria-hidden="true"
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink ${feat.badge}`}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                          </div>
                          <p className="text-sm sm:text-base leading-relaxed opacity-90">{feat.body}</p>
                        </div>
                      </Rise>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* WHY VIETNAM NOW: Sky Blue section with flush-aligned photo & 3 equal stat rows */}
          <section
            id="why"
            className="border-y-2 border-ink bg-sky py-16 sm:py-20 lg:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
                <Rise className="lg:col-span-6">
                  <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-ink [text-wrap:balance]">
                    Vietnam is buzzing
                  </h2>
                </Rise>
                <Rise delay={0.05} className="lg:col-span-6">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Millions of visitors arrive each year looking past generic itineraries for real local hospitality, everyday streets, and living heritage.
                  </p>
                </Rise>
              </div>

              <div className="mt-8 sm:mt-10 grid gap-5 lg:grid-cols-12 lg:items-stretch">
                <Rise className="lg:col-span-7">
                  <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-ink bg-card">
                    <img
                      src="/sample/vb-sample-6.jpg"
                      alt="A local cycling in morning sunlight past an old brick village gate in Vietnam"
                      width={1623}
                      height={1080}
                      loading="lazy"
                      className="aspect-[16/10] lg:aspect-auto lg:h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Rise>

                <div className="grid grid-rows-3 gap-3.5 lg:col-span-5">
                  {STATS.map((stat, i) => (
                    <Rise key={stat.label} delay={i * 0.06} className="h-full">
                      <div className="flex h-full items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-card px-6 py-4">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-primary">
                          {stat.value}
                        </span>
                        <span className="text-right text-sm sm:text-base font-medium text-muted-foreground">
                          {stat.label}
                        </span>
                      </div>
                    </Rise>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* JOIN WAITLIST: Honey split with matched bee badge & CTA */}
          <section
            id="join"
            className="bg-honey py-16 sm:py-20 lg:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
                <div className="space-y-6 lg:col-span-6">
                  <Rise>
                    <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-ink [text-wrap:balance]">
                      Be the first to fly with us
                    </h2>
                    <p className="mt-3 max-w-md text-base sm:text-lg leading-relaxed text-ink/90">
                      Leave your details for early traveler invitations, local host onboarding, and upcoming gatherings.
                    </p>
                  </Rise>

                  <Rise delay={0.06}>
                    <div className="flex flex-wrap items-center gap-3.5">
                      {/* Crisp white badge frame matches the CTA height and keeps the yellow bee high-contrast */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-ink bg-card p-1.5">
                        <img
                          src="/viebee-bee.png"
                          alt="VieBee mascot"
                          width={48}
                          height={48}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <Link
                        to="/upcoming"
                        className="btn-pop h-14 bg-card px-6 text-sm sm:text-base font-bold text-ink"
                      >
                        <span>Explore upcoming event</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </Link>
                    </div>
                  </Rise>
                </div>

                <Rise delay={0.1} className="lg:col-span-6">
                  <div className="rounded-3xl border-2 border-ink bg-card p-6 sm:p-8">
                    <AnimatePresence mode="wait">
                      {joined ? (
                        <motion.div
                          key="ok"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-3 py-6 text-center"
                        >
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-honey text-ink">
                            <Check className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-extrabold text-ink">You are on the list</h3>
                          <p className="mx-auto max-w-sm text-base text-muted-foreground">
                            We will reach out as soon as new seats and host spots open.
                          </p>
                        </motion.div>
                      ) : (
                        <form
                          key="form"
                          onSubmit={async (e) => {
                            e.preventDefault();
                            if (!email.trim() || !fullName.trim() || isSubmitting) return;
                            setIsSubmitting(true);
                            try {
                              // shortcut: FormSubmit free endpoint relays directly to Gmail without a dedicated backend; requires one-time email confirmation on first run
                              await fetch("https://formsubmit.co/ajax/viebee.contact@gmail.com", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Accept: "application/json",
                                },
                                body: JSON.stringify({
                                  name: fullName.trim(),
                                  email: email.trim(),
                                  phone: phone.trim() || "Not provided",
                                  _subject: "[VieBee Waitlist] New Early Access Registration",
                                  _captcha: "false",
                                  message: `New early access waitlist signup:\n- Full Name: ${fullName.trim()}\n- Email: ${email.trim()}\n- Phone: ${phone.trim() || "Not provided"}`,
                                }),
                              });
                            } catch (err) {
                              console.error("Waitlist submission error:", err);
                            } finally {
                              setIsSubmitting(false);
                              setJoined(true);
                            }
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label htmlFor="waitlist-name" className="block text-sm font-bold text-ink">
                              Full name
                            </label>
                            <input
                              id="waitlist-name"
                              type="text"
                              required
                              autoComplete="name"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="Your full name"
                              className="mt-1.5 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>

                          <div>
                            <label htmlFor="waitlist-email" className="block text-sm font-bold text-ink">
                              Email address
                            </label>
                            <input
                              id="waitlist-email"
                              type="email"
                              required
                              inputMode="email"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                              className="mt-1.5 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>

                          <div>
                            <label htmlFor="waitlist-phone" className="block text-sm font-bold text-ink">
                              Phone number (optional)
                            </label>
                            <input
                              id="waitlist-phone"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Vietnamese phone or WhatsApp"
                              className="mt-1.5 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-pop w-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
                          >
                            {isSubmitting ? "Sending..." : "Join waitlist"}
                          </button>
                        </form>
                      )}
                    </AnimatePresence>
                  </div>
                </Rise>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
