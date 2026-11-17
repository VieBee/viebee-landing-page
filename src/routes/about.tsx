import { createFileRoute } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us & The team | VieBee" },
      {
        name: "description",
        content:
          "Meet the founders and team behind VieBee, a peer-to-peer cultural travel platform connecting travelers with local Vietnamese hosts.",
      },
    ],
  }),
  component: AboutPage,
});

const FOUNDER_EMAIL = "lyhungquocchau.works@gmail.com"
const FOUNDERS = [
  {
    name: "Ly Hung Quoc Chau",
    role: "Founder",
    img: "/team/quocchau.png",
    w: 1806,
    h: 2560,
    bg: "bg-honey",
    email: FOUNDER_EMAIL,
    imgClass: "h-[105%] w-auto max-w-none",
  },
  {
    name: "Aung Kaung Htet",
    role: "Co-founder",
    img: "/team/aunghtet.png",
    w: 3024,
    h: 4032,
    bg: "bg-sky",
    email: "aungkaunghtetps2100@gmail.com",
    imgClass: "h-[115%] w-auto max-w-none",
  },
];

const CORE_TEAM = [
  {
    name: "Duong Thanh Long",
    role: "Core team",
    img: "/team/thanhlong.png",
    w: 3024,
    h: 4032,
    bg: "bg-honey-soft",
    email: "duongthanhlong.works@gmail.com",
    imgClass: "h-[112%] w-auto max-w-none",
  },
  {
    name: "Le Huu Thanh",
    role: "Core team",
    img: "/team/huuthanh.png",
    w: 3024,
    h: 4032,
    bg: "bg-sky",
    email: "hohalokaka@gmail.com",
    imgClass: "h-[116%] w-auto max-w-none",
  },
  {
    name: "Khong Duc Tuan",
    role: "Core team",
    img: "/team/ductuan.png",
    w: 1536,
    h: 2048,
    bg: "bg-honey",
    email: "khongductuan5@gmail.com",
    imgClass: "h-[168%] w-auto max-w-none",
  },
];

function AboutPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
        <SiteHeader wide />

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-20 pb-6 sm:px-8 lg:pt-22 lg:pb-6">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            {/* Left 4 cols: Vibrant Cobalt About Us story */}
            <motion.section
              initial={{ opacity: 0.99, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-w-0 flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-ink bg-primary p-6 text-white lg:col-span-4"
            >
              {/* Header row with contrasting bee badges */}
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <motion.h1
                    initial={{ opacity: 0.99, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.0] tracking-tight text-white"
                  >
                    About VieBee
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0.99, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="text-lg font-bold leading-snug text-honey"
                >
                  Discover Vietnam beyond the guidebooks through the people who live it.
                </motion.p>
              </div>

              {/* Short product story */}
              <motion.p
                initial={{ opacity: 0.99, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-base leading-relaxed text-[#fffaec]/95"
              >
                VieBee connects travelers directly with grassroots local hosts using a GIS Cultural Map and real-time AI translation.
              </motion.p>

              {/* Distilled Problem & Solution card */}
              <motion.div
                initial={{ opacity: 0.99, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="space-y-3 rounded-2xl border-2 border-ink bg-card p-4 text-ink"
              >
                <div>
                  <h2 className="text-base font-extrabold text-primary">The gap</h2>
                  <p className="mt-0.5 text-base leading-snug text-muted-foreground">
                    Local food and craft traditions stay hard to find, while artisans lack simple booking, payment, and language tools.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-extrabold text-primary">Our fix</h2>
                  <p className="mt-0.5 text-base leading-snug text-muted-foreground">
                    Travelers discover verified hosts on the Cultural Map; locals set slots, share stories, translate live, and get paid directly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.99, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <a
                  href="/#join"
                  className="btn-pop w-full sm:w-auto bg-honey px-5 py-3 text-base font-extrabold text-ink"
                >
                  <span>Join waitlist</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.section>

            {/* Right 8 cols: The Team (2 Founders + 3 Core Team) */}
            <section className="flex min-w-0 flex-col justify-between gap-4 lg:col-span-8" aria-labelledby="team-heading">
              <motion.div
                initial={{ opacity: 0.99, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.04 }}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-ink bg-honey-soft px-5 py-3.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-card p-1">
                    <img
                      src="/viebee-bee.png"
                      alt=""
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 id="team-heading" className="text-2xl sm:text-3xl font-extrabold leading-tight text-ink">
                      The team
                    </h2>
                    <p className="text-base font-medium text-muted-foreground">
                      Building local-first travel across Vietnam
                    </p>
                  </div>
                </div>

                <span className="rounded-full border-2 border-ink bg-card px-3.5 py-1.5 text-[13px] sm:text-sm font-bold text-ink">
                  Ho Chi Minh City
                </span>
              </motion.div>

              {/* Row 1: Founders */}
              <div className="grid gap-4 sm:grid-cols-2">
                {FOUNDERS.map((member, i) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0.99, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * (i + 1), ease: [0.22, 1, 0.36, 1] }}
                    className="card-pop flex min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card"
                  >
                    <div className={`relative flex h-48 sm:h-52 items-end justify-center overflow-hidden border-b-2 border-ink ${member.bg}`}>
                      <img
                        src={member.img}
                        alt={`${member.name}, ${member.role} at VieBee`}
                        width={member.w}
                        height={member.h}
                        className={member.imgClass}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-1.5 px-4 py-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-ink">{member.name}</h3>
                        <span className="rounded-lg border-2 border-ink bg-honey-soft px-2.5 py-0.5 text-[13px] font-bold text-ink">
                          {member.role}
                        </span>
                      </div>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="truncate text-[13px] sm:text-sm font-semibold text-primary hover:underline"
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Row 2: Core team */}
              <div className="grid gap-3.5 sm:grid-cols-3">
                {CORE_TEAM.map((member, i) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0.99, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.16 + 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="card-pop flex min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card"
                  >
                    <div className={`relative flex h-40 sm:h-44 items-end justify-center overflow-hidden border-b-2 border-ink ${member.bg}`}>
                      <img
                        src={member.img}
                        alt={`${member.name}, ${member.role} at VieBee`}
                        width={member.w}
                        height={member.h}
                        loading="lazy"
                        className={member.imgClass}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-1 px-4 py-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-base font-extrabold leading-snug text-ink">{member.name}</h3>
                        <span className="shrink-0 text-[13px] font-semibold text-muted-foreground">
                          {member.role}
                        </span>
                      </div>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="truncate text-[13px] font-semibold text-primary hover:underline"
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </MotionConfig>
  );
}
