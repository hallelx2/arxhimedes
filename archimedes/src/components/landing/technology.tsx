import { Monitor, Zap, Target } from "lucide-react";

export function Technology() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans mb-16 text-center">
          <span className="text-primary">Next-Gen</span> Surgical Intelligence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <Monitor className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Real-time 3D Generation</h3>
            <p className="text-gray-400">
              Instant volumetric reconstruction of patient anatomy using adaptive sensor fusion and Gemini&apos;s spatial reasoning.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <Zap className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Agentic Workflow</h3>
            <p className="text-gray-400">
              Autonomous instruments that anticipate surgeon movement, automating routine tasks and minimizing human fatigue.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <Target className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Surgical Precision</h3>
            <p className="text-gray-400">
              Sub-millimeter accuracy through magnetic levitation stabilization and micro-actuated robotic end-effectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
