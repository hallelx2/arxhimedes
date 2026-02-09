import { Box, Workflow, ShieldCheck } from "lucide-react";

export function Technology() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans mb-16 text-center">
          <span className="text-primary">Next-Gen</span> Robotic Synthesis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <Box className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Adaptive Kinematics</h3>
            <p className="text-gray-400">
              Robotic arms generated with custom joint limits and link lengths to navigate around specific patient anatomy like enlarged livers or fat tissue.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <Workflow className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Component Assembly</h3>
            <p className="text-gray-400">
              Autonomous selection and mating of motors, gears, and structural members from a verified library of medical-grade parts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group">
            <ShieldCheck className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Functional Verification</h3>
            <p className="text-gray-400">
              Every generated design is simulated for stress, payload capacity, and workspace reach before it ever leaves the digital realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
