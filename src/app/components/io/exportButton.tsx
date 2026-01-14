import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const exportButton = () => {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <Download className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
      <span className="sr-only">Download project data</span>
    </Button>
  );
};

export default exportButton;
