import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Hand-drawn highlighter stroke behind text. */
export function BrushHighlight({ children, tone = "honey" }: { children: ReactNode; tone?: "honey" | "sky" }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <motion.svg
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
        className={`absolute -inset-x-2 bottom-0 -z-0 h-[60%] w-[calc(100%+1rem)] ${tone === "honey" ? "text-honey" : "text-sky"}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      >
        <path
          d="M4 38 C 40 18, 90 22, 140 20 S 240 14, 296 26 L 292 50 C 230 44, 170 52, 110 50 S 30 56, 6 52 Z"
          fill="currentColor"
        />
      </motion.svg>
      <span className="relative">{children}</span>
    </span>
  );
}

/** Scribbled underline that draws itself. */
export function BrushUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative">{children}</span>
      <svg viewBox="0 0 300 30" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-4 w-full text-primary">
        <motion.path
          d="M5 20 C 60 5, 120 28, 180 12 S 270 8, 295 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>
    </span>
  );
}

/** Circled word. */
export function BrushCircle({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-2">
      <span className="relative">{children}</span>
      <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)] text-honey">
        <motion.path
          d="M30 15 C 90 0, 190 10, 192 40 C 194 70, 60 78, 15 58 C -5 45, 20 15, 110 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </svg>
    </span>
  );
}
