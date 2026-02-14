import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { footer } from "../content/texts";

export default function Footer() {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <footer className="relative px-6 py-12 text-center" role="contentinfo">
      <div className="mx-auto max-w-2xl">
        {/* Divider */}
        <div
          className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          aria-hidden="true"
        />

        <p className="text-sm text-slate-500">
          {footer.madeWith}{" "}
          <motion.span
            className="inline-block cursor-pointer"
            whileHover={{ scale: 1.3 }}
            onClick={() => setEasterEgg((v) => !v)}
            role="button"
            aria-label="Easter egg"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setEasterEgg((v) => !v);
              }
            }}
          >
            {footer.heart}
          </motion.span>{" "}
          {footer.and}{" "}
          <span className="font-semibold text-slate-700">{footer.author}</span>{" "}
          — {footer.year}
        </p>

        {/* Easter egg */}
        <AnimatePresence>
          {easterEgg && (
            <motion.p
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-3 text-lg"
              aria-live="polite"
            >
              {footer.easterEgg}
            </motion.p>
          )}
        </AnimatePresence>

        <p className="mt-6 text-xs text-slate-400">
          Rendez-vous en 2031 pour la suite de l'aventure.
        </p>
      </div>
    </footer>
  );
}
