import { future } from "../content/texts";
import ScrollReveal from "./ScrollReveal";
import ShareButton from "./ShareButton";

export default function FutureSection() {
  const paragraphs = future.message
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <section
      className="relative px-6 py-20 sm:py-28"
      aria-label="Le futur ensemble"
    >
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-12 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">{future.sectionTitle}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mb-10 font-display text-lg font-semibold text-slate-800 sm:text-xl">
            {future.callToAction}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} variant="scale">
          <ShareButton />
        </ScrollReveal>
      </div>
    </section>
  );
}
