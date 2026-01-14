import React from "react";
import { ThemeToggle } from "./theme/theme-toggle";
import ExportButton from "@/app/components/io/exportButton";

const topbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-xl font-bold tracking-tight">Obsidian UI</span>
        </div>
        <div>
          <ThemeToggle />
          <ExportButton />
        </div>
      </div>
    </nav>
  );
};

export default topbar;
