import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PricingMeter from "./components/PricingMeter";
import Testimonials from "./components/Testimonials";
import JoinSection from "./components/JoinSection";

export default function App() {
  return (
    <div className="min-h-screen font-manrope text-slate-900">
      <Hero />
      <HowItWorks />
      <PricingMeter />
      <Testimonials />
      <JoinSection />
      <footer className="relative overflow-hidden bg-slate-900 py-10 text-slate-300">
        <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-[radial-gradient(50%_8px_at_50%_0,rgba(255,255,255,0.6),transparent)] opacity-60" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="font-semibold">KrushiMandi © {new Date().getFullYear()}</p>
          <div className="flex items-center gap-3 text-emerald-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            Trusted • Secure • Transparent
          </div>
        </div>
      </footer>
    </div>
  );
}
