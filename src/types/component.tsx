export enum TaskType {
  REQUIRED = "REQUIRED",
  ASSOCIATED = "ASSOCIATED",
  INFRASTRUCTURE = "INFRA",
}

export interface Task {
  id: string;
  label: string;
  baseHours: number;
  baseCost: number;
  type: TaskType;
  description?: string;
}

export interface Component {
  id: string;
  title: string;
  instanceName: string;
  description: string;
  tasks: Task[];
  children: Component[];
  type: "component" | "task"; // Added to match your Arborist data logic
}

export interface ProjectData {
  projectName: string;
  projectDescription: string;
  globalMultiplier: number;
  rootComponent: Component;
  currency: string;
}
