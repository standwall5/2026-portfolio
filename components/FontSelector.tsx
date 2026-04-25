"use client";
import React, { useState, useEffect } from "react";

const FontSelector = () => {
  // 1. Hold the selected font in state
  const [activeFont, setActiveFont] = useState("var(--font-manrope)");

  useEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    const spans = document.querySelectorAll("span");
    const listItem = document.querySelectorAll("li");
    const profileImage = document.getElementById("profile-pic-container");
    const profileObj = profileImage ? profileImage.style : null;
    const navList = document.getElementById("nav-list");
    const navObj = navList ? navList.style : null;

    // Set the body's font-family using inline style
    document.body.style.fontFamily = activeFont;
    if (activeFont === "var(--font-firacode)") {
      paragraphs.forEach((p) => {
        p.style.fontSize = "15px";
      });
    } else if (activeFont === "var(--font-tiny5)") {
      listItem.forEach((li) => {
        li.style.setProperty("corner-shape", "notch");
      });
      profileObj ? profileObj.setProperty("corner-shape", "notch") : null;
      navObj ? navObj.setProperty("corner-shape", "notch") : null;
      navObj ? (navObj.borderRadius = ".5rem") : null;
    }

    // Optional: Clean up on unmount
    return () => {
      document.body.style.fontFamily = "";
      document.body.style.fontSize = "";
      paragraphs.forEach((p) => {
        p.style.fontSize = "";
      });
      spans.forEach((span) => {
        span.style.fontSize = "";
      });
      listItem.forEach((li) => {
        li.style.removeProperty("corner-shape");
      });
      profileObj ? profileObj.removeProperty("corner-shape") : null;
      navObj ? navObj.removeProperty("corner-shape") : null;
      navObj ? (navObj.borderRadius = "") : null;
    };
  }, [activeFont]);

  return (
    <div className="flex items-center gap-3 bg-(--card) p-3 rounded-md [&>button]:p-2 [&>button]:w-30 [&>button]:rounded-sm relative [&>button]:hover:cursor-pointer">
      <button
        onClick={() => setActiveFont("var(--font-manrope)")}
        className={`relative before:content-[''] before:left-0 before:top-0 before:absolute before:bg-(--card-button) before:w-full before:h-full before:rounded-sm before:z-1 before:duration-300 before:ease-in-out
          ${activeFont === "var(--font-manrope)" ? "before:translate-x-0" : activeFont === "var(--font-firacode)" ? "before:translate-x-32.5" : "before:translate-x-65.5"}
        `}
      >
        <span className="relative z-4">Sans</span>
      </button>
      <button
        onClick={() => setActiveFont("var(--font-firacode)")}
        className={`relative z-10 font-mono`}
      >
        Monospace
      </button>
      <button
        onClick={() => setActiveFont("var(--font-tiny5)")}
        className={`relative z-10`}
      >
        Pixelated
      </button>
    </div>
  );
};

export default FontSelector;
