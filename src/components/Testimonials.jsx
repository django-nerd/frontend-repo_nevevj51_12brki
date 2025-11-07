import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const data = [
  {
    name: "Ramesh Patil",
    role: "Farmer, Nashik",
    quote:
      "KrushiMandi gave me 12% better prices and on-time payments. No middlemen, only trust.",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Priya Shah",
    role: "Trader, Mumbai",
    quote:
      "Supply has become reliable and traceable. The quality grading saves hours.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Vikram Singh",
    role: "Exporter, Jaipur",
    quote:
      "End-to-end logistics tracking is a game changer. We reduced wastage significantly.",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];

export default function Testimonials() {
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".carousel", {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 18,
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Loved by Farmers and Traders</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Real stories from across India.</p>
        </div>

        <div ref={listRef} className="relative overflow-hidden">
          <div className="carousel flex gap-6">
            {[...data, ...data].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="min-w-[320px] rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-600">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-700">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_70%_10%,rgba(50,205,50,0.08),transparent)]" />
    </section>
  );
}
