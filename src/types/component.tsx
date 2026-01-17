export enum TaskType {
  REQUIRED = "REQUIRED",
  ASSOCIATED = "ASSOCIATED",
  INFRASTRUCTURE = "INFRA",
  CUSTOM = "CUSTOM",
}

export interface BaseTask {
  id: string;
  label: string;
  description: string;
  baseHours: number;
  type: TaskType;
  category?: string; // e.g., "UI", "Logic", "State", "API", "Testing"
  tags?: string[]; // For filtering/search
  dependsOn?: string[]; // Task IDs that must come before this
}

export interface Task extends BaseTask {
  componentId?: string; // If this task is tied to a specific component instance
  isSelected: boolean;
  customMultiplier?: number; // User can adjust per instance
  notes?: string; // User notes for this specific task
}

export interface Component {
  id: string;
  title: string;
  instanceName: string;
  description: string;
  tasks: Task[];
  children: Component[];
  type: "component" | "task"; // might be needed for Arborist
}
