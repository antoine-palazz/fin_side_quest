import { motion } from "framer-motion";
import { hero } from "../content/texts";
import ConfettiTrigger from "./ConfettiTrigger";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      aria-label="Section de victoire"
    >
      {/* Animated aurora background */}
      <div className="aurora-bg absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Confetti on mount */}
      <ConfettiTrigger />

      {/* Trophy emoji */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="relative z-10 mb-6 text-7xl sm:text-8xl"
        aria-hidden="true"
      >
        🏆
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 mb-4 font-display text-5xl font-bold tracking-tight text-slate-800 sm:text-6xl md:text-7xl"
      >
        {hero.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="relative z-10 mb-3 max-w-xl text-lg text-slate-600 sm:text-xl"
      >
        {hero.subtitle}
      </motion.p>

      {/* Badge "Terminée" */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        className="relative z-10 mb-12 inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700"
      >
        {hero.badge}
      </motion.span>

      {/* Scroll hint arrow */}
      <motion.a
        href="#merci"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="animate-bounce-slow relative z-10 flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-600"
        aria-label={hero.scrollHint}
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          {hero.scrollHint}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
