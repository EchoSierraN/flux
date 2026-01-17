"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ProjectHeader = () => {
  const [projName, setProjName] = useState("Raven");
  const [projDesc, setProjDesc] = useState(
    "A one stop shop for all corporate communication needs."
  );

  return (
    <div className="space-y-4 border-b pb-6 mb-6">
      <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        Active Project
      </div>
      <Input
        value={projName}
        onChange={(e) => setProjName(e.target.value)}
        className="text-3xl font-black border-none p-0 h-auto focus-visible:ring-0 bg-transparent shadow-none"
        placeholder="Project Name..."
      />
      <Textarea
        value={projDesc}
        onChange={(e) => setProjDesc(e.target.value)}
        className="text-muted-foreground border-none p-0 focus-visible:ring-0 bg-transparent resize-none min-h-[40px] shadow-none"
        placeholder="Brief project overview or client name..."
      />
    </div>
  );
};
