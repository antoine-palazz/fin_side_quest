import { merci } from "../content/texts";
import ScrollReveal from "./ScrollReveal";

export default function MerciSection() {
  // Split message into paragraphs
  const paragraphs = merci.message
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <section
      id="merci"
      className="relative px-6 py-20 sm:py-28"
      aria-label="Message de remerciement"
    >
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-slate-800 sm:text-4xl">
            <span className="mr-3" aria-hidden="true">
              {merci.emoji}
            </span>
            {merci.sectionTitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <article className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm sm:p-10">
            <div className="space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Signature */}
            <p className="mt-8 text-right font-display text-lg font-semibold italic text-slate-800">
              {merci.signature}
            </p>

            {/* P.S. */}
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-500 italic">
              {merci.postScriptum}
            </p>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
