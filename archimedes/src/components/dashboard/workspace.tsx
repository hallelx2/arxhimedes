"use client";

import Spline from "@splinetool/react-spline";
import { Grid, MousePointer, Ruler, Save, Sliders, Layers, ChevronRight } from "lucide-react";
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
          title="Select Component"
        >
          <MousePointer className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActiveTool("measure")}
          className={cn(
            "p-2 rounded-md transition-colors",
            activeTool === "measure" ? "bg-primary text-background" : "text-gray-400 hover:bg-gray-800 hover:text-white"
          )}
          title="Measure Kinematics"
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
          title="Toggle Work Grid"
        >
          <Grid className="h-5 w-5" />
        </button>
         <button
          className="p-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          title="Component Layers"
        >
          <Layers className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          title="Export CAD"
        >
          <Save className="h-5 w-5" />
        </button>
      </div>

      {/* Floating Metrics Panel */}
      <div className="absolute bottom-4 right-4 z-20 w-72 rounded-lg bg-gray-950/90 p-4 backdrop-blur-md border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
             <Sliders className="h-3 w-3" /> Mechanical Specs
          </h3>
          <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Optimal</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-500">Max Reach</span>
            <span className="font-mono text-primary font-medium">185.4 mm</span>
          </div>
           {/* Progress bar visual for reach */}
           <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full bg-primary w-[75%]" />
           </div>

          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-500">Payload Cap.</span>
            <span className="font-mono text-secondary font-medium">4.2 kg</span>
          </div>

          <div className="flex justify-between text-sm items-center">
             <span className="text-gray-500">Joint DoF</span>
             <span className="font-mono text-accent font-medium">6 Axis</span>
          </div>

          <div className="pt-2 mt-2 border-t border-gray-800 flex justify-between text-xs text-gray-400">
             <span>Material: Ti-6Al-4V</span>
             <span className="flex items-center hover:text-white cursor-pointer transition-colors">Details <ChevronRight className="h-3 w-3" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
