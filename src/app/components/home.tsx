"use client";

import * as React from "react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
import Topbar from "@/app/components/topbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TreeSidebar } from "./sidebar";

// These will be your future engine components
// import { TreeVisualizer } from "@/components/tree/TreeVisualizer";
// import { DetailsPanel } from "@/components/details/DetailsPanel";

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

            {/* This is where react-arborist will eventually sit */}
            <div className="flex-1 overflow-auto rounded-md border border-dashed p-4">
              <TreeSidebar />
              {/* <p className="text-xs text-muted-foreground">
                [Flux Tree Visualizer Engine]
              </p> */}
            </div>
          </div>
        </ResizablePanel>

        {/* THE DRAGGABLE SEPARATOR */}
        <ResizableHandle withHandle />

        {/* RIGHT PANEL: Project Details & Calculation Engine */}
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full flex-col p-6 overflow-auto">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h1 className="text-3xl font-bold">Component Details</h1>
                <p className="text-muted-foreground">
                  Manage tasks and view cost roll-ups.
                </p>
              </div>

              {/* This is a great spot for the "Safety" summary */}
              <div className="text-right">
                <span className="text-sm text-muted-foreground uppercase font-bold">
                  Total Estimate
                </span>
                <div className="text-2xl font-mono font-bold text-primary">
                  $0.00
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Placeholder for the Details Engine */}
            <div className="grid gap-6">
              <div className="rounded-xl border bg-card p-8 text-center">
                <p className="text-muted-foreground italic">
                  Select a component from the tree to start estimating.
                </p>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
