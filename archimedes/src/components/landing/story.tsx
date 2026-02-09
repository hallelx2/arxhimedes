"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BoxSelect, Scale3d, Workflow } from "lucide-react";

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <div className="relative h-[80vh] w-[80vw] bg-secondary/10 rounded-3xl overflow-hidden blur-3xl opacity-50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-sans">
              Mechanical <br />
              <span className="text-secondary">Synthesis</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Every patient is unique. Their surgery should be too. Archimedes analyzes
              <span className="text-primary font-bold"> specific anatomical constraints</span>—from BMI and liver span to port placement—and
              generatively designs the perfect robotic manipulator for the task.
            </p>
            <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
              <blockquote className="text-2xl font-light text-gray-200 italic">
                &quot;We don&apos;t adapt the patient to the robot. We adapt the robot to the patient.&quot;
              </blockquote>
              <cite className="text-sm text-gray-500 not-italic uppercase tracking-widest">
                — Dr. Julian Vance, Chief Robotic Surgeon
              </cite>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto aspect-square grid grid-rows-2 gap-4"
          >
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 p-6 flex flex-col justify-center items-center hover:bg-gray-800 transition-colors group">
                 <BoxSelect className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold text-white uppercase tracking-wider text-center">Analyze Constraints</span>
               </div>
               <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 p-6 flex flex-col justify-center items-center hover:bg-gray-800 transition-colors group">
                 <Workflow className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold text-white uppercase tracking-wider text-center">Simulate Kinematics</span>
               </div>
             </div>
             <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 p-6 flex flex-col justify-center items-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <Scale3d className="w-16 h-16 text-white mb-4 group-hover:text-primary transition-colors" />
                 <span className="text-lg font-bold text-white uppercase tracking-widest">Generate 3D Prototype</span>
                 <p className="text-xs text-gray-500 mt-2 max-w-[200px] text-center">Optimized for payload, torque, and access geometry.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
