"use client";

import React, { useState, useEffect } from "react";
import { House, FolderOpenDot } from "lucide-react";
import { IconMoon, IconPhone, IconSun } from "@tabler/icons-react";

const Nav = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window === "undefined") return "light";

    // Try localStorage first (if persisting theme)
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark" || localTheme === "light") return localTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Clean up both classes, then set the new one
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header>
      <nav className="flex justify-end mr-6">
        {/* Logo */}
        <ul
          id="nav-list"
          className="flex items-center gap-6 [&>li]:text-(--accent) [&>li]:hover:text-(--accent-hover) [&>li]:hover:cursor-pointer [&>li]:duration-200 ease-in-out  bg-(--card) w-max rounded-full mt-4 p-4 fixed z-99"
        >
          {/* Home */}
          <li>
            <a href="#home">
              <House size={32} />
            </a>
          </li>

          {/* Projects */}
          <li>
            <a href="#projects">
              <FolderOpenDot size={32} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <IconPhone size={32} />
            </a>
          </li>
          <li onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <IconSun size={32} /> : <IconMoon size={32} />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
