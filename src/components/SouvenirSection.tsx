import { motion } from "framer-motion";
import { souvenirs } from "../content/texts";
import ScrollReveal from "./ScrollReveal";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function SouvenirSection() {
  return (
    <section
      className="relative px-6 py-20 sm:py-28"
      aria-label="Souvenirs de l'aventure"
    >
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center font-display text-3xl font-bold text-slate-800 sm:text-4xl">
            {souvenirs.sectionTitle}
          </h2>
          <p className="mb-12 text-center text-slate-500">
            {souvenirs.subtitle}
          </p>
        </ScrollReveal>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.12 }}
          className="space-y-4"
          role="list"
        >
          {souvenirs.items.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group flex items-start gap-4 rounded-xl bg-white/70 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              <span
                className="shrink-0 text-2xl transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              >
                {item.emoji}
              </span>
              <p className="text-base text-slate-700 sm:text-lg">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
