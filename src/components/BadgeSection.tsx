import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { badge } from "../content/texts";
import { downloadBadge } from "../utils/downloadBadge";
import ScrollReveal from "./ScrollReveal";

export default function BadgeSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!badgeRef.current || downloading) return;
    setDownloading(true);
    await downloadBadge(badgeRef.current);
    setDownloading(false);
  }, [downloading]);

  return (
    <section
      className="relative px-6 py-20 sm:py-28"
      aria-label="Badge finisher"
    >
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-display text-3xl font-bold text-slate-800 sm:text-4xl">
            {badge.sectionTitle}
          </h2>
          <p className="mb-12 text-slate-500">{badge.subtitle}</p>
        </ScrollReveal>

        {/* Badge visual */}
        <ScrollReveal delay={0.15} variant="scale">
          <div className="mb-10 flex justify-center">
            <div
              ref={badgeRef}
              className="badge-glow relative flex h-72 w-72 flex-col items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-sky-200 p-2 sm:h-80 sm:w-80"
            >
              {/* Inner circle */}
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-white/60 bg-white/40 backdrop-blur-sm">
                {/* Trophy */}
                <span className="mb-2 text-5xl" aria-hidden="true">
                  🏆
                </span>

                {/* Event name */}
                <p className="font-display text-lg font-bold tracking-wide text-slate-800">
                  {badge.eventName}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {badge.eventSubtitle}
                </p>

                {/* Divider */}
                <div
                  className="my-2 h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                  aria-hidden="true"
                />

                {/* Year */}
                <p className="font-display text-2xl font-bold text-slate-700">
                  {badge.year}
                </p>

                {/* Finisher label */}
                <span className="mt-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
                  {badge.label}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Download button */}
        <ScrollReveal delay={0.3}>
          <motion.button
            onClick={handleDownload}
            disabled={downloading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-8 py-3.5 font-display text-sm font-semibold text-white shadow-lg transition-colors hover:bg-slate-700 disabled:cursor-wait disabled:opacity-70"
            aria-label={badge.downloadText}
          >
            {downloading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                {badge.downloadingText}
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {badge.downloadText}
              </>
            )}
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}
