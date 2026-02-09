"use client";

import Spline from "@splinetool/react-spline";
import { Grid, MousePointer, Ruler, Save, Sliders, Layers, ChevronRight, PenTool } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WorkspaceProps {
  agentState?: "idle" | "thinking" | "executing" | "completed";
}

export function Workspace({ agentState }: WorkspaceProps) {
  const [activeTool, setActiveTool] = useState("select");
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-900">

      {/* 3D Viewport */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
         {/* Using a Robotic Arm Spline scene.
             Ideally this URL would point to a specific robot model.
             For now, we use a generic high-quality one that looks suitably tech/robotic. */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      </div>

      {/* Generation Overlay - Visible when agent is 'executing' */}
      {agentState === "executing" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-500">
          <div className="flex flex-col items-center gap-6">
             <div className="relative w-32 h-32 flex items-center justify-center">
               <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-ping opacity-50" />
               <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin duration-1000" />
               <PenTool className="text-primary h-12 w-12 animate-pulse" />
             </div>
             <div className="space-y-2 text-center">
               <p className="text-primary font-mono text-xl font-bold tracking-widest animate-pulse">SYNTHESIZING GEOMETRY</p>
               <p className="text-gray-400 text-sm">Analyzing constraints • Generating topology • Optimizing mesh</p>
             </div>
          </div>
        </div>
      )}

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

      {/* Floating Metrics Panel - Hidden while generating */}
      <div className={cn(
          "absolute bottom-4 right-4 z-20 w-72 rounded-lg bg-gray-950/90 p-4 backdrop-blur-md border border-gray-800 shadow-2xl transition-all duration-700 transform",
          agentState === "executing" ? "translate-y-20 opacity-0" : "translate-y-0 opacity-100"
        )}>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
             <Sliders className="h-3 w-3" /> Mechanical Specs
          </h3>
          <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full animate-pulse">Optimal</span>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">End-Effector Dia.</span>
              <span className="font-mono text-primary font-medium">3.8 mm</span>
            </div>
             {/* Progress bar visual */}
             <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
               <div className="h-full bg-primary w-[95%]" />
             </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">Flex Angle</span>
              <span className="font-mono text-secondary font-medium">180°</span>
            </div>
             <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
               <div className="h-full bg-secondary w-[80%]" />
             </div>
          </div>

          <div className="flex justify-between text-sm items-center pt-2 border-t border-gray-800/50">
             <span className="text-gray-500">Actuation</span>
             <span className="font-mono text-accent font-medium">Tendon-Driven</span>
          </div>

          <div className="pt-2 border-t border-gray-800 flex justify-between text-xs text-gray-400">
             <span>Material: Nitinol / PEEK</span>
             <span className="flex items-center hover:text-white cursor-pointer transition-colors group">
               Details <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
