"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Layers, CheckSquare } from "lucide-react";

export const ProjectSummary = () => {
  // Hardcoded for now; will be hooked to the Calculation Engine later
  const stats = [
    {
      label: "Total Time",
      value: "124 Hours",
      icon: Clock,
      color: "text-blue-500",
    },
    {
      label: "Total Cost",
      value: "$9,300",
      icon: DollarSign,
      color: "text-emerald-500",
    },
    { label: "Screens", value: "8", icon: Layers, color: "text-purple-500" },
    {
      label: "Tasks",
      value: "42",
      icon: CheckSquare,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="pt-8 space-y-6">
      <h3 className="text-sm font-bold uppercase text-muted-foreground">
        Estimate Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="overflow-hidden border-none bg-slate-50 dark:bg-slate-900/50"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
