"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10 overflow-hidden relative group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <Sun className="h-5 w-5 transition-all duration-300 transform scale-100 dark:scale-0 dark:-rotate-90 text-foreground" />
        <Moon className="absolute h-5 w-5 transition-all duration-300 transform scale-0 rotate-90 dark:rotate-0 dark:scale-100 text-foreground" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
