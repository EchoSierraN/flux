import { Task } from "./component";

// Component Template - Defines available tasks
export interface ComponentTemplate {
  id: string; // e.g., "recyclerview", "bottom-navigation"
  title: string; // Display name
  description: string;
  icon?: string; // For UI display
  category: string; // e.g., "Android", "iOS", "Web", "Backend"

  // Task configurations
  requiredTaskIds: string[]; // IDs of tasks that are auto-selected
  associatedTaskIds: string[]; // IDs of commonly used optional tasks
  compatibleTaskIds?: string[]; // IDs of other tasks that can be added

  // Defaults
  defaultInstanceName: string;
  baseComplexity: "low" | "medium" | "high"; // Affects multiplier

  // Children configuration
  canHaveChildren: boolean;
  allowedChildTypes?: string[]; // Which component types can be children
  maxChildren?: number;

  // UI/UX hints
  commonVariants?: Array<{
    name: string;
    description: string;
    taskIds: string[]; // Additional tasks for this variant
  }>;
}

// Actual Component Instance in the Tree
export interface ComponentInstance {
  id: string;
  templateId: string; // Reference to ComponentTemplate
  instanceName: string; // User-defined name for this instance
  description?: string; // User can override

  // Tasks for THIS instance
  tasks: Task[];

  // Children
  children: ComponentInstance[];

  // Metadata
  depth: number;
  parentId?: string;

  // Customization
  variant?: string; // Selected variant name
  complexityMultiplier: number; // 0.8 to 1.5 based on complexity
  customNotes?: string;
}
