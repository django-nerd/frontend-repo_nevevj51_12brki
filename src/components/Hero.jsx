import { motion } from "framer-motion";
import { Rocket, Sparkles, Play } from "lucide-react";
import Spline from "@splinetool/react-spline";

const floating = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-slate-100">
      {/* Background video */}
      <div className="absolute inset-0 opacity-60">
        <video
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-drone-flying-over-fields-5180/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Gradient mesh overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(50,205,50,0.25),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(251,191,36,0.22),transparent),radial-gradient(50%_50%_at_50%_80%,rgba(15,23,42,0.25),transparent)]" />

      {/* Spline 3D accent */}
      <div className="absolute right-0 top-0 h-[60vh] w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/2XxjzFr6sC0H9Bq7/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 px-3 py-1.5 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span className="text-xs font-semibold tracking-wide text-slate-700">India’s Smart Agricultural Marketplace</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-manrope text-4xl font-extrabold leading-tight text-slate-900 drop-shadow sm:text-6xl"
        >
          Revolutionizing India’s Fruit Market with Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-lg text-slate-700"
        >
          From farm to mandi — direct, transparent, profitable. Built with trust, powered by data, crafted for Bharat.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="flex flex-wrap items-center gap-4">
          <a
            href="#how"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-[#32CD32] px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Rocket className="h-5 w-5" />
            Explore Platform
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-xl bg-white/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#join"
            className="relative inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-white/70 px-6 py-3 font-semibold text-emerald-700 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Play className="h-5 w-5" />
            Join KrushiMandi
          </a>
        </motion.div>

        {/* Floating fruits */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <motion.div variants={floating} animate="animate" className="absolute left-6 top-24 hidden select-none text-6xl md:block">🍊</motion.div>
          <motion.div variants={floating} animate="animate" className="absolute right-12 top-40 hidden select-none text-5xl md:block" style={{ filter: "hue-rotate(30deg)" }}>🍋</motion.div>
          <motion.div variants={floating} animate="animate" className="absolute bottom-20 left-1/3 hidden select-none text-6xl md:block">🥭</motion.div>
        </div>
      </div>
    </section>
  );
}
