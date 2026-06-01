import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Card({
  icon: Icon,
  title,
  children,
  cta,
  className = "",
}) {
  return (
    <motion.div
      className={`bg-white rounded-xl2 p-7 shadow-card border border-slate/10 hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
          <Icon size={24} />
        </div>
      )}

      <h3 className="font-display font-semibold text-lg text-ink mt-5">
        {title}
      </h3>

      <div className="text-slate mt-2 text-[15px] leading-relaxed">
        {children}
      </div>

      {cta && (
        <div className="mt-5">
          <Button variant="ghost" size="md" to={cta.to}>
            {cta.label}
            <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </motion.div>
  );
}
