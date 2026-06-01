import Button from "./Button";

export default function CTASection({ title, subtitle, primary, secondary }) {
  return (
    <div className="relative bg-gradient-to-br from-brand-dark to-brand rounded-xl2 px-8 py-16 md:py-20 overflow-hidden">
      {/* Subtle accent radial highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {primary && (
            <Button variant="secondary" size="lg" to={primary.to}>
              {primary.label}
            </Button>
          )}

          {secondary && (
            <Button
              variant="outline"
              size="lg"
              to={secondary.to}
              className="border-white text-white hover:bg-white hover:text-brand"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
