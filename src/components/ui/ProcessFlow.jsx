import { ArrowRight, ArrowDown } from "lucide-react";

export default function ProcessFlow({ steps }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-4"
        >
          {/* Step Card */}
          <div className="flex items-center gap-4 bg-white rounded-xl2 px-6 py-5 shadow-card border border-slate/10 min-w-[280px]">
            {/* Number Badge */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand text-white font-display font-bold flex items-center justify-center">
              {index + 1}
            </div>

            {/* Step Text */}
            <div className="text-ink font-display font-semibold text-[15px] leading-snug">
              {step}
            </div>
          </div>

          {/* Arrow Connector (not after last step) */}
          {index < steps.length - 1 && (
            <>
              {/* Desktop: Right Arrow */}
              <ArrowRight
                className="hidden md:block text-brand flex-shrink-0"
                size={24}
              />

              {/* Mobile: Down Arrow */}
              <ArrowDown
                className="md:hidden text-brand flex-shrink-0"
                size={24}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
