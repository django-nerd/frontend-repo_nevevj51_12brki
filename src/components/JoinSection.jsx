import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function JoinSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".grid-lines", {
        backgroundSize: "40px 40px",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="join" ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-lines bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-transparent to-amber-50/60" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-5xl"
        >
          Grow with KrushiMandi
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-700"
        >
          Join a trusted network connecting farmers, traders, and exporters with technology, transparency, and heart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-8 inline-flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#" className="rounded-xl bg-[#32CD32] px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5">
            Get Started
          </a>
          <a href="#" className="rounded-xl border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition-transform hover:-translate-y-0.5">
            Talk to our team
          </a>
        </motion.div>

        {/* Counters */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Farmers Onboarded", value: "25,000+" },
            { label: "Tons of Produce Sold", value: "120k+" },
            { label: "Mandis Connected", value: "180+" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <p className="text-3xl font-extrabold text-emerald-600">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
