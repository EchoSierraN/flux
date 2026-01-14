import { ThemeToggle } from "@/app/components/theme/theme-toggle";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Topbar from "./components/topbar";

export default function ThemeAuditPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* --- TOP BAR --- */}
      <Topbar />

      <main className="container mx-auto py-10 px-4 space-y-10">
        {/* --- HERO SECTION --- */}
        <section className="space-y-4">
          <Badge variant="secondary" className="px-3 py-1">
            Theme Engine v1.0
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl">
            Testing the{" "}
            <span className="text-primary italic">Electric Indigo</span> Palette
          </h1>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            This is a production-level theme audit. Check the contrast between
            the Indigo buttons and the deep Obsidian background.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </section>

        {/* --- COMPONENT GRID --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border shadow-xl">
            <CardHeader>
              <CardTitle>Semantic Colors</CardTitle>
              <CardDescription>
                How the variables map to components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2 rounded-md bg-muted">
                <span className="text-sm font-medium">Muted Background</span>
                <Badge variant="outline">Muted</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-md bg-accent text-accent-foreground">
                <span className="text-sm font-medium">Accent Color</span>
                <Badge>Accent</Badge>
              </div>
              <Input
                placeholder="Test input focus..."
                className="focus-visible:ring-primary"
              />
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Destructive Actions</CardTitle>
              <CardDescription>
                Ensuring accessibility in error states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The destructive color should stand out without being harsh.
              </p>
              <Button variant="destructive" className="w-full">
                Delete Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
