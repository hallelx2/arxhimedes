"use client";

import { useAgent } from "@/hooks/useAgent";
import { Send, Activity, BrainCircuit, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  agent: ReturnType<typeof useAgent>;
}

export function Sidebar({ agent }: SidebarProps) {
  const { messages, thoughtStream, activeTool, state, sendMessage } = agent;
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || state === "thinking" || state === "executing") return;
    sendMessage(input);
    setInput("");
  };

  return (
    <aside className="flex h-full w-full md:w-[350px] flex-col border-r border-gray-800 bg-gray-950 text-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
          <BrainCircuit className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-tight">Archimedes Agent</h2>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className={cn("h-2 w-2 rounded-full", state === "idle" ? "bg-green-500 animate-pulse" : "bg-primary animate-ping")} />
            {state === "idle" ? "Online" : state === "thinking" ? "Thinking..." : "Processing..."}
          </div>
        </div>
      </div>

      {/* Thought Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "rounded-lg p-3 text-sm",
                msg.role === "user" ? "bg-primary/10 ml-8 text-primary-foreground border border-primary/20" : "bg-gray-900 mr-8 text-gray-300 border border-gray-800"
              )}
            >
              <p>{msg.content}</p>
            </div>
          ))}

          {/* Animated Thought Stream */}
          <AnimatePresence>
            {(state === "thinking" || state === "executing") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 border-l-2 border-dashed border-gray-700 pl-4 py-2"
              >
                {thoughtStream.map((thought, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs text-gray-500 font-mono"
                  >
                    <Cpu className="h-3 w-3" />
                    {thought}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Tool Indicator */}
          <AnimatePresence>
            {activeTool && activeTool.status === "active" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-4 p-3 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center gap-3"
              >
                <div className="bg-secondary/20 p-2 rounded-full animate-spin">
                  <Activity className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider">Tool Active</p>
                  <p className="text-sm text-white">{activeTool.name}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-800 bg-gray-950">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={state !== "idle" && state !== "completed"}
            placeholder="Ask Archimedes..."
            className="w-full rounded-lg border border-gray-800 bg-gray-900 py-3 pl-4 pr-12 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || (state !== "idle" && state !== "completed")}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 text-background hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-2 text-center text-xs text-gray-600">
          Powered by Gemini 3. Context window: 2M tokens.
        </p>
      </div>
    </aside>
  );
}
