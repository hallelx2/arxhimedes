import { BrainCircuit, Cpu, ScanLine } from "lucide-react";

export function Gemini() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl space-y-8">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold tracking-widest uppercase">
          Artificial Intelligence
        </div>

        <h2 className="text-5xl md:text-8xl font-sans font-bold text-white tracking-tighter">
          Powered by <br className="md:hidden" />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Gemini 3
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Archimedes leverages the Gemini 3 multimodal models to process millions of surgical data points per second,
          providing <span className="text-white font-medium">surgical context awareness</span> that predicts complications before they occur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-sm group">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Neural Engine</h3>
            <p className="text-gray-400 text-sm">Real-time processing of high-fidelity volumetric data.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors backdrop-blur-sm group">
             <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Multimodal Core</h3>
            <p className="text-gray-400 text-sm">Simultaneous analysis of MRI, CT, and live camera feeds.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors backdrop-blur-sm group">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ScanLine className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Predictive Logic</h3>
            <p className="text-gray-400 text-sm">Forecasting critical pathway intersections with 99.8% accuracy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
