import { TaskType, BaseTask } from "@/types/component";

//todo: add more tasks
export const globalTasks: BaseTask[] = [
    // UI Tasks
    {
        id: "ui-design",
        label: "UI Design Implementation",
        description: "Implement the visual design from Figma",
        baseHours: 8,
        type: TaskType.ASSOCIATED,
        category: "UI",
        tags: ["design", "layout", "styling"]
    },
    {
        id: "responsive-design",
        label: "Responsive Design",
        description: "Make component responsive across screen sizes",
        baseHours: 4,
        type: TaskType.ASSOCIATED,
        category: "UI",
        tags: ["responsive", "mobile"]
    },

    // Logic Tasks
    {
        id: "state-management",
        label: "State Management",
        description: "Add state management (Redux, ViewModel, etc.)",
        baseHours: 12,
        type: TaskType.ASSOCIATED,
        category: "Logic",
        tags: ["state", "data"]
    },

    // Android-specific
    {
        id: "recyclerview-adapter",
        label: "RecyclerView Adapter",
        description: "Create adapter for RecyclerView",
        baseHours: 6,
        type: TaskType.REQUIRED,
        category: "Android",
        tags: ["android", "recyclerview"]
    },

    // Infrastructure
    {
        id: "testing-unit",
        label: "Unit Tests",
        description: "Write unit tests",
        baseHours: 4,
        type: TaskType.INFRASTRUCTURE,
        category: "Testing",
        tags: ["test", "quality"]
    },
];