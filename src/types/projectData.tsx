import { Task } from "./component";
import { ComponentInstance } from "./componentTemplate";

// Project Data
export interface ProjectData {
  id: string;
  projectName: string;
  projectDescription: string;
  globalMultiplier: number;
  currency: string;
  rootComponent: ComponentInstance;
  createdAt: Date;
  updatedAt: Date;

  // Infrastructure tasks (project-level)
  infrastructureTasks: Task[];

  // Settings
  hourlyRate: number;
}
