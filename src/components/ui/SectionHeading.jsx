import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <motion.div
      className={alignments[align]}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <div className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl md:text-4xl font-display font-bold ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-[15px] leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/80" : "text-slate"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
