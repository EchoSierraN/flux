import Home from "./components/home";
import ThemeTest from "./components/theme/theme-test";
import Topbar from "./components/topbar";

export default function ThemeAuditPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="container mx-auto py-10 px-4 space-y-10">
        {/* <ThemeTest /> */}
        <Home />
      </main>
    </div>
  );
}
