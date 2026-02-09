"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
              Visualization <br />
              <span className="text-secondary">Reimagined</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              The Archimedes system doesn&apos;t just see; it understands. By mapping the intricate
              <span className="text-primary font-bold"> Pterygopalatine neural pathways</span> in real-time,
              we provide surgeons with an unprecedented depth of field and spatial context.
            </p>
            <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
              <blockquote className="text-2xl font-light text-gray-200 italic">
                &quot;The transition from manual visualization to Gemini-assisted robotics is as significant as the invention of the laparoscope.&quot;
              </blockquote>
              <cite className="text-sm text-gray-500 not-italic uppercase tracking-widest">
                — Dr. Julian Vance, Chief Neurosurgeon
              </cite>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full max-w-lg mx-auto bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors duration-500" />
             <div className="relative z-10 text-center">
                <span className="block text-4xl font-mono text-primary mb-2">0.02ms</span>
                <span className="text-sm uppercase tracking-widest text-gray-500">Latency Detection</span>
             </div>
             {/* Abstract animated lines representing neural pathways */}
             <svg className="absolute inset-0 w-full h-full opacity-30 animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
                <path d="M10,60 Q30,30 50,60 T90,60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
             </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
