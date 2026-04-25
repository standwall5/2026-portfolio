"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectList";

const Projects = () => {
  const [expand, setExpand] = useState(false);

  return (
    <section
      id="projects"
      className="flex flex-col gap-6 items-center justify-center overflow-hidden max-w-5xl"
    >
      <div className="w-full flex justify-between self-start -mb-4">
        <h1 className="w-full text-4xl font-bold ">
          <span className="text-(--accent)">/</span> Projects
        </h1>
        <span
          onClick={() => setExpand((prev) => !prev)}
          className={`text-5xl font-bold mr-5 hover:cursor-pointer leading-[-2] duration-200 ease-in-out ${expand === true ? "rotate-0 text-(--accent) hover:text-(--accent-hover)" : "rotate-180 translate-y-[-10%] hover:text-(--accent)"} `}
        >
          ^
        </span>
      </div>

      {/*PROJECTS SECTION*/}
      <ProjectCard projects={projects} expand={expand} />
    </section>
  );
};

export default Projects;
