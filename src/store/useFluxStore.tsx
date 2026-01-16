import { Component, ProjectData } from "@/types/component";
import { create } from "zustand";

interface FluxState {
  // State
  project: ProjectData | null;
  selectedComponentId: string | null;

  // Actions
  setProject: (project: ProjectData) => void;
  selectComponent: (id: string | null) => void;
  updateComponent: (id: string, updates: Partial<Component>) => void;
}

export const useFluxStore = create<FluxState>((set) => ({
  project: null,
  selectedComponentId: null,

  setProject: (project) => set({ project }),

  selectComponent: (id) => set({ selectedComponentId: id }),

  updateComponent: (id, updates) =>
    set((state) => {
      // This is where your "Core Calculation Engine" logic will eventually live
      // For now, it just finds and updates the component in the tree
      return {
        /* logic to recursively update the component */
      };
    }),
}));
