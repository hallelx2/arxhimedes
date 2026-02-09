import { BrainCircuit, Cpu, Cog } from "lucide-react";

export function Gemini() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 via-transparent to-transparent opacity-50 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl space-y-8">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold tracking-widest uppercase">
          Artificial Intelligence
        </div>

        <h2 className="text-5xl md:text-8xl font-sans font-bold text-white tracking-tighter">
          Powered by <br className="md:hidden" />
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Gemini 3
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Archimedes leverages the Gemini 3 multimodal models to process surgical constraints and <span className="text-white font-medium">generate functional mechanical structures</span> tailored to the patient&apos;s condition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-sm group">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Constraint Solver</h3>
            <p className="text-gray-400 text-sm">Translates medical data (obesity, organ span) into mechanical limits.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors backdrop-blur-sm group">
             <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cog className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Generative CAD</h3>
            <p className="text-gray-400 text-sm">Creates novel end-effectors and linkages optimized for the procedure.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors backdrop-blur-sm group">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mechanical Synthesis</h3>
            <p className="text-gray-400 text-sm">Assembles components into a complete, 3D-printable robotic prototype.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
