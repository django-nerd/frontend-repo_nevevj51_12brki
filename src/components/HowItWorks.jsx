import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, Truck, LineChart, CreditCard } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Leaf,
    title: "Source from Farms",
    desc: "Verified farmers list fresh produce with quality grades.",
  },
  {
    icon: LineChart,
    title: "Smart Pricing",
    desc: "AI-driven insights and real-time mandi prices for fairness.",
  },
  { icon: Truck, title: "Logistics", desc: "Cold-chain and last-mile delivery with live tracking." },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Instant payouts and escrow-backed settlements.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how" ref={containerRef} className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How KrushiMandi Works
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Four simple steps from orchard to market with total transparency.
            </p>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="step-card min-w-[260px] snap-center rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Light particles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_10%,rgba(50,205,50,0.08),transparent),radial-gradient(30%_30%_at_80%_20%,rgba(251,191,36,0.08),transparent)]" />
    </section>
  );
}
