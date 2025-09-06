import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = (resolvedTheme ?? theme) === "dark";

  if (!mounted)
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-9 sm:h-10 sm:w-10 rounded-md border border-border flex items-center justify-center"
      >
        <Sun className="size-5 transition-transform duration-300" />
      </button>
    );

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 sm:h-10 sm:w-10 rounded-md border border-border flex items-center justify-center hover:bg-accent/60 transition-colors"
    >
      {isDark ? (
        <Sun className="size-5 transition-transform duration-300" />
      ) : (
        <Moon className="size-5 transition-transform duration-300" />
      )}
    </button>
  );
}
