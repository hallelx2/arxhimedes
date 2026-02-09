"use client";

import { useState, useCallback } from "react";

export type AgentState = "idle" | "thinking" | "executing" | "completed";

export interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
}

export interface Tool {
  name: string;
  status: "idle" | "active" | "completed";
}

export function useAgent() {
  const [state, setState] = useState<AgentState>("idle");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "agent",
      content: "Archimedes Design Core Online. Ready to synthesize robotic solutions. Please describe the patient parameters and surgical constraints.",
    },
  ]);
  const [thoughtStream, setThoughtStream] = useState<string[]>([]);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const addThought = (thought: string) => {
    setThoughtStream((prev) => [...prev, thought]);
  };

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setState("thinking");
    setThoughtStream([]); // Clear previous thoughts

    // Simulate Thinking Process
    await new Promise((resolve) => setTimeout(resolve, 800));
    addThought("Parsing surgical requirements...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addThought("Analyzing patient-specific constraints (BMI, Organ Span)...");

    // Simulate Tool Usage based on keywords
    if (content.toLowerCase().includes("obese") || content.toLowerCase().includes("liver")) {
      // Phase 1: Constraint Analysis
      await new Promise((resolve) => setTimeout(resolve, 800));
      setState("executing");
      setActiveTool({ name: "ConstraintSolver V2.1", status: "active" });
      addThought("Mapping deep cavity access requirements...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveTool({ name: "ConstraintSolver V2.1", status: "completed" });
      addThought("Kinematic target defined: +150mm reach required.");

      // Phase 2: Component Generation
      await new Promise((resolve) => setTimeout(resolve, 800));
      setActiveTool({ name: "GenerativeCAD Engine", status: "active" });
      addThought("Synthesizing high-torque joint linkages...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveTool({ name: "GenerativeCAD Engine", status: "completed" });
      addThought("Generated Mechanism: Telescopic End-Effector.");

      // Phase 3: Assembly
       await new Promise((resolve) => setTimeout(resolve, 800));
      setActiveTool({ name: "AssemblyEngine", status: "active" });
      addThought("Mating motors and structural shells...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveTool({ name: "AssemblyEngine", status: "completed" });

    } else {
       await new Promise((resolve) => setTimeout(resolve, 1000));
       addThought("Generating mechanical proposal...");
    }

    // Final Response
    await new Promise((resolve) => setTimeout(resolve, 500));
    setState("completed");
    setActiveTool(null);

    let agentResponse = "I've processed your request.";
    if (content.toLowerCase().includes("obese") || content.toLowerCase().includes("liver")) {
        agentResponse = "Design Complete: 'Laparoscopic Arm Model X42'. Optimized for deep abdominal access in high-BMI patients. Features include a telescopic distal link to bypass the enlarged liver span and a high-torque actuator array for retraction stability.";
    } else {
        agentResponse = "I've generated a preliminary robotic arm design based on your constraints. The kinematics are optimized for the specified workspace.";
    }

    const agentMsg: Message = { id: (Date.now() + 1).toString(), role: "agent", content: agentResponse };
    setMessages((prev) => [...prev, agentMsg]);
    setState("idle");
  }, []);

  return {
    state,
    messages,
    thoughtStream,
    activeTool,
    sendMessage,
  };
}
