"use client";

import React, { useState } from "react";
import { Tree } from "react-arborist";
import { ChevronDown, ChevronRight, Box, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFluxStore } from "@/store/useFluxStore";

// Hardcoded Demo Data matching our ProjectData structure
const initialData = [
  {
    id: "1",
    name: "User Dashboard (Page)",
    type: "component",
    children: [
      {
        id: "1-1",
        name: "Activity Feed (RecyclerView)",
        type: "component",
        children: [
          { id: "1-1-1", name: "Custom Card Widget", type: "component" },
          { id: "1-1-2", name: "Pagination Logic", type: "task" },
        ],
      },
      { id: "1-2", name: "Header Stats Bar", type: "component" },
    ],
  },
  {
    id: "2",
    name: "Auth Flow",
    type: "component",
    children: [
      { id: "2-1", name: "Login Screen", type: "component" },
      { id: "2-2", name: "Firebase Integration", type: "task" },
    ],
  },
];

export const TreeSidebar = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectComponent = useFluxStore((state) => state.selectComponent);

  return (
    <div className="h-full w-full select-none font-sans">
      <Tree
        initialData={initialData}
        openByDefault={true}
        width={"100%"}
        height={600} // This should eventually be dynamic
        indent={20}
        rowHeight={32}
        // overstep={10}
        onSelect={(nodes) => selectComponent(nodes[0]?.id || null)}
      >
        {({ node, style, dragHandle }) => (
          <div
            style={style}
            ref={dragHandle}
            className={cn(
              "flex items-center gap-2 px-2 rounded-sm cursor-pointer transition-colors",
              node.isSelected ? "bg-primary/20 text-primary" : "hover:bg-accent"
            )}
            onClick={() => node.toggle()}
          >
            {/* Expand/Collapse Arrow */}
            <span className="w-4 flex items-center justify-center">
              {node.isInternal &&
                (node.isOpen ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                ))}
            </span>

            {/* Icon based on Type */}
            {node.data.type === "component" ? (
              <Box size={14} className="text-blue-500" />
            ) : (
              <Zap size={14} className="text-amber-500" />
            )}

            <span className="text-sm truncate font-medium">
              {node.data.name}
            </span>
          </div>
        )}
      </Tree>

      {selectedId && (
        <div className="mt-4 p-2 text-[10px] uppercase text-muted-foreground border-t italic">
          Selected Node: {selectedId}
        </div>
      )}
    </div>
  );
};
