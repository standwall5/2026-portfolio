"use client";

import React, { useState } from "react";

const Projects = () => {
  const [expand, setExpand] = useState(false);

  return (
    <section
      id="projects"
      className="flex flex-col gap-6 items-center justify-center overflow-hidden max-w-5xl"
    >
      <div className="w-full flex justify-between self-start -mb-4">
        <h1 className="w-full text-4xl font-bold ">
          <span className="text-(--accent)">/</span> Projects{" "}
        </h1>
        <span
          onClick={() => setExpand((prev) => !prev)}
          className={`text-5xl font-bold mr-5 hover:cursor-pointer leading-[-2] duration-200 ease-in-out ${expand === true ? "rotate-0 text-(--accent) hover:text-(--accent-hover)" : "rotate-180 translate-y-[-10%] hover:text-(--accent)"} `}
        >
          ^
        </span>
      </div>
      {/* <div className="horizontal-line h-1 w-[8%] rounded-full bg-(--accent) self-start"></div> */}

      <ul
        className={`max-w-5xl w-full self-center flex flex-wrap items-center justify-start gap-8 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 [&>li]:bg-(--card) [&>li]:rounded-2xl [&>li]:p-5 [&>li]:h-100 [&>li]:min-w-10 [&>li]:max-w-78 [&>li]:shadow-[0px_1px_4px_rgba(0,0,0,0.16)] [&>li>img]:w-lg [&>li>div>img]:rounded-xl [&>li]:hover:-translate-y-2 [&>li]:transition [&>li]:duration-200 [&>li]:hover:bg-(--card-hover) [&>li>div>span]:rounded-sm [&>li]:hover:cursor-pointer overflow-hidden duration-250 ease-in-out -mt-5 [&>li]:z-15 [&>li]:mt-2 ${expand === true ? "max-h-230" : "max-h-104 "}`}
      >
        <li>
          <div className="img-container aspect-video">
            <img
              src="projects/adeducate.png"
              alt="AdEducate"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold">AdEducate</h1>
          <div className="flex items-center gap-2 *:px-2 *:text-(--accent-text) *:bg-(--accent) *:text-sm *:uppercase *:font-bold">
            <span className="bg-black">Next.js</span>
            <span className="bg-[#2377bd]">PostgreSQL</span>
          </div>
          <p className="text-md">
            A learning platform with modules, quizzes, news and support contacts
            created for Sto. Nino National High School
          </p>
        </li>
        <li>
          <div className="img-container aspect-video">
            <img
              src="projects/adeducate.png"
              alt="AdEducate"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold">Sandbox - Job Web App</h1>
          <div className="flex items-center gap-2 *:px-2 *:text-(--accent-text) *:bg-(--accent) *:text-sm *:uppercase *:font-bold">
            <span className="bg-amber-300 text-gray-900">Java</span>
            <span className="bg-[#c73044]">Oracle</span>
            <span className="bg-[#c73044]">MS Access</span>
          </div>
          <p className="text-md">
            A job employment platform, featuring user and company roles. Users
            can create and apply for jobs and search for other users.
          </p>
        </li>
        <li>
          <div className="img-container aspect-video">
            <img
              src="projects/adeducate.png"
              alt="AdEducate"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold">Olivia Rodrigo Website</h1>
          <div className="flex flex-wrap items-center gap-2 *:px-2 *:text-(--accent-text) *:bg-(--accent) *:text-sm *:uppercase *:font-bold">
            <span className="bg-orange-500">HTML</span>
            <span className="bg-blue-500">CSS</span>
            <span className="bg-yellow-400 text-gray-900">JavaScript</span>
            <span className="bg-[#2377bd]">MySQL</span>
          </div>
          <p className="text-md">
            A website for fans of Olivia Rodrigo, featuring dynamic elements
            from fan messages and user authentication.
          </p>
        </li>
        <li>
          <div className="img-container aspect-video">
            <img
              src="projects/adeducate.png"
              alt="AdEducate"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold">Employee Payroll System</h1>
          <div className="flex items-center gap-2 *:px-2 *:text-(--accent-text) *:bg-(--accent) *:text-sm *:uppercase *:font-bold">
            <span className="bg-violet-400">C#</span>
            <span className="bg-yellow-300 text-gray-900">MS SQL</span>
          </div>
          <p className="text-md">
            Written in C#, it includes basic authentication and allows
            calculations of each employee's payroll
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
