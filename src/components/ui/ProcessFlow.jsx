import { ArrowDown } from "lucide-react";

export default function ProcessFlow({ steps }) {
  return (
    <>
      {/* Mobile: Vertical Stack with Down Arrows */}
      <div className="flex md:hidden flex-col items-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="w-full max-w-md">
            {/* Step Card */}
            <div className="flex items-center gap-4 bg-white rounded-xl2 px-6 py-5 shadow-card border border-slate/10">
              {/* Number Badge */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand text-white font-display font-bold flex items-center justify-center">
                {index + 1}
              </div>

              {/* Step Text */}
              <div className="text-ink font-display font-semibold text-[15px] leading-snug flex-1">
                {step}
              </div>
            </div>

            {/* Down Arrow (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex justify-center py-3">
                <ArrowDown className="text-brand" size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: Responsive Grid (no arrows, clean wrapped layout) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="w-full">
            {/* Step Card */}
            <div className="flex items-center gap-4 bg-white rounded-xl2 px-6 py-5 shadow-card border border-slate/10 h-full">
              {/* Number Badge */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand text-white font-display font-bold flex items-center justify-center">
                {index + 1}
              </div>

              {/* Step Text */}
              <div className="text-ink font-display font-semibold text-[15px] leading-snug flex-1">
                {step}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
