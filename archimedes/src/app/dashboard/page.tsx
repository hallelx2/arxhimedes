"use client";

import { useAgent } from "@/hooks/useAgent";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Workspace } from "@/components/dashboard/workspace";

export default function Dashboard() {
  const agent = useAgent();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black text-white">
      <div className="hidden md:flex h-full">
         <Sidebar agent={agent} />
      </div>

      <main className="flex-1 relative h-full">
        {/* Pass the agent state to the workspace to trigger visual changes */}
        <Workspace agentState={agent.state} />
      </main>
    </div>
  );
}
