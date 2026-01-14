"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Component } from "@/types/component";

interface ComponentEditorProps {
  selectedNode: Component | null;
}

export const ComponentEditor = ({ selectedNode }: ComponentEditorProps) => {
  if (!selectedNode) {
    return (
      <div className="h-40 flex items-center justify-center border-b border-dashed">
        <p className="text-muted-foreground italic">
          Select a component to edit details
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-1 border-b pb-8">
      <div className="space-y-2">
        <Label
          htmlFor="comp-name"
          className="text-sm font-bold uppercase text-muted-foreground"
        >
          Component Name
        </Label>
        <Input
          id="comp-name"
          defaultValue={selectedNode.instanceName || selectedNode.title}
          className="text-lg font-semibold"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="comp-desc"
          className="text-sm font-bold uppercase text-muted-foreground"
        >
          Implementation Details
        </Label>
        <Textarea
          id="comp-desc"
          defaultValue={selectedNode.description}
          className="min-h-[100px] resize-none"
        />
      </div>
    </div>
  );
};
