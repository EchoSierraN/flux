"use client";

import { useEffect, useState, useRef } from "react";
import { useFluxStore } from "@/store/useFluxStore";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TreeSidebar } from "./sidebar";
import { ProjectHeader } from "./project-header";
import { ProjectSummary } from "./project-summary";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);
  const hasInitialized = useRef(false); // The Guard

  const project = useFluxStore((state) => state.project);
  const setProject = useFluxStore((state) => state.setProject);

  useEffect(() => {
    // 1. Mark as hydrated for Next.js safety
    setIsHydrated(true);

    // 2. Check the guard AND ensure project isn't already set
    if (!hasInitialized.current && !project) {
      hasInitialized.current = true; // Block future runs immediately

      setProject({
        projectName: "New Flux Project",
        projectDescription: "Initial project description",
        globalMultiplier: 1.0,
        currency: "USD",
        rootComponent: {
          id: "root",
          title: "Main Project",
          instanceName: "Main Project",
          description: "Root node",
          tasks: [],
          children: [],
          type: "component",
        },
      });
    }
  }, [setProject, project]);

  // Prevent hydration mismatch errors
  if (!isHydrated) return null;

  return (
    <main className="h-[calc(100vh-64px)] w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        {/* LEFT PANEL: The Tree View (Sidebar) */}
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          maxSize={45}
          className="bg-background"
        >
          <div className="flex h-full flex-col p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Project Structure
            </h2>
            <Separator className="my-4" />

            <div className="flex-1 overflow-auto rounded-md border border-dashed p-4">
              <TreeSidebar />
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* RIGHT PANEL: Project Details & Calculation Engine */}
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full flex-col p-8 overflow-auto">
            {/* <ComponentEditor selectedNode={null} /> */}
            <ProjectHeader />
            <ProjectSummary />

            {/* Optional: Add a "Save to Master" warning here */}
            <div className="mt-auto pt-8">
              <p className="text-[10px] text-muted-foreground border-l-2 border-amber-500 pl-3">
                PROD TIP: Ensure your estimated time accounts for 2FA token
                rotation and CI/CD maintenance.
              </p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
