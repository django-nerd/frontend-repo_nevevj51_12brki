import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";

export default function PricingMeter() {
  const pathRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ pathLength: [0, 1], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } });

    const el = pathRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { filter: "drop-shadow(0 0 0px rgba(50,205,50,0.0))" },
        { filter: "drop-shadow(0 0 12px rgba(50,205,50,0.6))", duration: 2, repeat: -1, yoyo: true }
      );
    }
  }, [controls]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Smart Pricing Meter</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Real-time fruit price trends powered by live market data.</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur">
          <svg viewBox="0 0 600 240" className="h-56 w-full">
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#32CD32" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
            </defs>
            <motion.path
              ref={pathRef}
              d="M 0 180 C 80 160, 120 120, 180 140 S 260 200, 320 160 420 100, 480 120 540 200, 600 160"
              stroke="url(#grad)"
              strokeWidth="6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={controls}
              strokeLinecap="round"
            />
            <motion.circle
              r="7"
              fill="#32CD32"
              initial={{ cx: 0, cy: 180 }}
              animate={{
                cx: [0, 80, 120, 180, 240, 320, 420, 480, 540, 600],
                cy: [180, 160, 120, 140, 200, 160, 100, 120, 200, 160],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 10px rgba(50,205,50,0.6))" }}
            />
          </svg>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm text-slate-600 md:grid-cols-6">
            <div className="rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700">Oranges</div>
            <div className="rounded-lg bg-amber-50 px-2 py-1 font-semibold text-amber-700">Bananas</div>
            <div className="rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700">Mangoes</div>
            <div className="rounded-lg bg-amber-50 px-2 py-1 font-semibold text-amber-700">Grapes</div>
            <div className="rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700">Pomegranates</div>
            <div className="rounded-lg bg-amber-50 px-2 py-1 font-semibold text-amber-700">Apples</div>
          </div>
        </div>
      </div>
    </section>
  );
}
