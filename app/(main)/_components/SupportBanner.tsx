import Link from "next/link";
import { UserCheck, Zap, ShieldCheck } from "lucide-react";

export default function SupportBanner() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white text-center overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-bg-image.jpg')" }}
      />

      <div className="relative max-w-4xl mx-auto space-y-8">
        {/* Quote Statement */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold italic leading-relaxed text-gray-100">
          “When something doesn’t go as planned, we step in fast.
          <br className="hidden sm:inline" />
          Mr FixIT Support makes sure every issue is reviewed fairly — and fixed
          the right way.”
        </blockquote>

        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>

        {/* Feature Pill Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-white text-gray-900 px-6 py-3.5 rounded-full shadow-lg text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-orange-500" />
            <span>Verified Pros Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>Instant Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>Secure Payments</span>
          </div>
        </div>

        {/* Action Button */}
        
      </div>
    </section>
  );
}
