"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <h1 className="mb-6 font-sans text-6xl font-extrabold tracking-tight text-white md:text-8xl">
            Precision Surgery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Reimagined
            </span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto">
            Explore the Pterygopalatine System with advanced robotics powered by
            Gemini 3 generative intelligence.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-background transition-all hover:bg-primary/90 hover:scale-105"
            >
              Launch Agent
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="rounded-full border border-gray-700 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-white/10 hover:border-gray-500">
              View Technical Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
