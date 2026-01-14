"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TreeSidebar } from "./sidebar";
import { ComponentEditor } from "./component-editor";
import { ProjectSummary } from "./project-summary";

export default function HomePage() {
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
            <ComponentEditor selectedNode={null} />
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
