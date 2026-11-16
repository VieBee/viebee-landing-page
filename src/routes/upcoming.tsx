import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/upcoming")({
  head: () => ({
    meta: [
      { title: "Upcoming event | VieBee" },
      {
        name: "description",
        content: "Upcoming VieBee cultural events will be updated soon. Join the waitlist to hear first.",
      },
    ],
  }),
  component: UpcomingEventPage,
});

function UpcomingEventPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
        <SiteHeader />

        <main className="flex flex-1 items-center justify-center px-5 pt-28 pb-20 sm:px-8">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xl rounded-3xl border-2 border-ink bg-card p-8 text-center sm:p-12"
          >
            <img
              src="/viebee-official.png"
              alt="VieBee"
              width={96}
              height={96}
              className="mx-auto h-24 w-24 object-contain"
            />

            <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-ink">
              Upcoming event
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted-foreground">
              This page will be updated later with our next gathering. Join the waitlist to be notified first.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="/#join"
                className="btn-pop bg-primary px-6 py-3 text-sm sm:text-base font-bold text-primary-foreground"
              >
                <span>Join waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="btn-pop bg-honey px-6 py-3 text-sm sm:text-base font-extrabold text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to home</span>
              </Link>
            </div>
          </motion.section>
        </main>

        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
