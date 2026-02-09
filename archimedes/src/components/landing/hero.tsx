"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, PenTool } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
              <Bot className="mr-1 h-3 w-3" /> Generative Robotic Design
            </span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-extrabold tracking-tight text-white md:text-8xl">
            Bespoke Surgical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Instruments
            </span>
          </h1>

          <p className="mb-8 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto leading-relaxed">
            Archimedes synthesizes patient anatomy into <span className="text-white font-medium">custom robotic architectures</span>.
            Describe the procedure constraints, and let the agent generate the optimal mechanical solution.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-background transition-all hover:bg-primary/90 hover:scale-105"
            >
              Start Design
              <PenTool className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </Link>
            <button className="rounded-full border border-gray-700 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-white/10 hover:border-gray-500 flex items-center gap-2">
              View Case Studies <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
