"use client";

import Spline from "@splinetool/react-spline";
import { Grid, MousePointer, Ruler, Save, Sliders, Layers } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Workspace() {
  const [activeTool, setActiveTool] = useState("select");
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-900">
      {/* 3D Viewport Placeholder */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      </div>

      {/* Top Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-lg bg-gray-950/80 p-2 backdrop-blur-md border border-gray-800 shadow-xl">
        <button
          onClick={() => setActiveTool("select")}
          className={cn(
            "p-2 rounded-md transition-colors",
            activeTool === "select" ? "bg-primary text-background" : "text-gray-400 hover:bg-gray-800 hover:text-white"
          )}
          title="Select"
        >
          <MousePointer className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActiveTool("measure")}
          className={cn(
            "p-2 rounded-md transition-colors",
            activeTool === "measure" ? "bg-primary text-background" : "text-gray-400 hover:bg-gray-800 hover:text-white"
          )}
          title="Measure"
        >
          <Ruler className="h-5 w-5" />
        </button>
        <div className="h-6 w-[1px] bg-gray-700 mx-2" />
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={cn(
            "p-2 rounded-md transition-colors",
            showGrid ? "bg-secondary text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
          )}
          title="Toggle Grid"
        >
          <Grid className="h-5 w-5" />
        </button>
         <button
          className="p-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          title="Layers"
        >
          <Layers className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          title="Export"
        >
          <Save className="h-5 w-5" />
        </button>
      </div>

      {/* Floating Info Panel */}
      <div className="absolute bottom-4 right-4 z-20 w-64 rounded-lg bg-gray-950/90 p-4 backdrop-blur-md border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Metrics</h3>
          <Sliders className="h-4 w-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Target Distance</span>
            <span className="font-mono text-primary">14.2 mm</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Angle</span>
            <span className="font-mono text-secondary">32.5°</span>
          </div>
          <div className="flex justify-between text-sm">
             <span className="text-gray-500">Risk Factor</span>
             <span className="font-mono text-accent">Low (2%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
