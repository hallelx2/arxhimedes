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
      content: "System Online. Patient-0942 Pterygopalatine Access initialized. Awaiting commands.",
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
    addThought("Analyzing request intent...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addThought("Retrieving relevant patient data...");

    // Simulate Tool Usage based on keywords
    if (content.toLowerCase().includes("scan") || content.toLowerCase().includes("anatomy")) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setState("executing");
      setActiveTool({ name: "AnatomyScanner V3.1", status: "active" });
      addThought("Activating volumetric scanner...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveTool({ name: "AnatomyScanner V3.1", status: "completed" });
      addThought("Scan complete. Vascular anomalies detected.");
    } else if (content.toLowerCase().includes("risk") || content.toLowerCase().includes("nerve")) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setState("executing");
      setActiveTool({ name: "RiskAssessor V4.0", status: "active" });
      addThought("Calculating proximity to critical structures...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveTool({ name: "RiskAssessor V4.0", status: "completed" });
      addThought("High risk alert: Maxillary artery proximity < 3mm.");
    } else {
       await new Promise((resolve) => setTimeout(resolve, 1000));
       addThought("Generating response...");
    }

    // Final Response
    await new Promise((resolve) => setTimeout(resolve, 500));
    setState("completed");
    setActiveTool(null);

    let agentResponse = "I've processed your request.";
    if (content.toLowerCase().includes("scan")) {
        agentResponse = "Volumetric scan complete. I've highlighted the pterygopalatine fossa and identified a potential obstruction near the sphenopalatine foramen.";
    } else if (content.toLowerCase().includes("risk")) {
        agentResponse = "Risk assessment complete. Caution advised: The maxillary artery is within 2.4mm of the projected trajectory. I recommend a 14.2° approach adjustment.";
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
