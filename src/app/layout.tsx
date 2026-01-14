import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme/themeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux",
  description: "A quick estimation tool for software projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning is required for next-themes */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
