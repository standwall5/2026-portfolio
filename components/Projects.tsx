import React from "react";

const Projects = () => {
  return (
    <section className="flex justify-center items-center overflow-auto">
      <ul className="w-[90%] flex items-center justify-start gap-8 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 [&>li]:bg-(--card) [&>li]:rounded-4xl [&>li]:p-5 [&>li]:h-148 [&>li]:w-sm [&>li]:shadow-[0px_1px_4px_rgba(0,0,0,0.16)] [&>li>img]:w-lg [&>li>img]:rounded-2xl">
        <li>
          <img src="projects/adeducate.png" alt="AdEducate" />
          <h1 className="text-2xl font-bold">AdEducate</h1>
          <div className="flex items-center gap-2 *:py-2 *:px-4 *:border-white *:border-2 *:rounded-full *:font-bold">
            <span className="bg-black">Next.js</span>
            <span className="bg-[#2377bd]">PostgreSQL</span>
          </div>
          <p className="text-lg">
            A learning platform with modules, quizzes, news and support contacts
            created for Sto. Nino National High School
          </p>
        </li>
        <li></li>
        <li></li>
      </ul>
    </section>
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  );
};

export default Projects;
