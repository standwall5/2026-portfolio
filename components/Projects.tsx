import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 items-center justify-center overflow-auto w-max"
    >
      <h1 className="text-6xl font-bold">Projects</h1>
      <div className="horizontal-line h-1 w-[20%] rounded-full bg-(--accent)"></div>

      <ul className="w-[90%] flex items-center justify-start gap-8 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 [&>li]:bg-(--card) [&>li]:rounded-4xl [&>li]:p-5 [&>li]:h-110 [&>li]:w-sm [&>li]:shadow-[0px_1px_4px_rgba(0,0,0,0.16)] [&>li>img]:w-lg [&>li>img]:rounded-2xl [&>li]:hover:-translate-y-2 [&>li]:transition [&>li]:duration-200 [&>li]:hover:bg-(--card-hover) [&>li]:hover:cursor-pointer">
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
        <li>
          <img src="projects/adeducate.png" alt="AdEducate" />
          <h1 className="text-2xl font-bold">Sandbox - Job Web App</h1>
          <div className="flex items-center gap-2 *:py-2 *:px-4 *:border-white *:border-2 *:rounded-full *:font-bold">
            <span className="bg-amber-300 text-gray-900">Java</span>
            <span className="bg-[#c73044]">Oracle</span>
            <span className="bg-[#c73044]">MS Access</span>
          </div>
          <p className="text-lg">
            A job employment platform, featuring user and company roles. Users
            can create and apply for jobs and search for other users.
          </p>
        </li>
        <li>
          <img src="projects/adeducate.png" alt="AdEducate" />
          <h1 className="text-2xl font-bold">Olivia Rodrigo Website</h1>
          <div className="flex items-center gap-2 *:py-2 *:px-4 *:border-white *:border-2 *:rounded-full *:font-bold flex-wrap">
            <span className="bg-orange-500">HTML</span>
            <span className="bg-blue-500">CSS</span>
            <span className="bg-yellow-400 text-gray-900">JavaScript</span>
            <span className="bg-[#2377bd]">MySQL</span>
          </div>
          <p className="text-lg">
            A website for fans of Olivia Rodrigo, featuring dynamic elements
            from fan messages and user authentication.
          </p>
        </li>
        <li>
          <img src="projects/adeducate.png" alt="AdEducate" />
          <h1 className="text-2xl font-bold">Employee Payroll System</h1>
          <div className="flex items-center gap-2 *:py-2 *:px-4 *:border-white *:border-2 *:rounded-full *:font-bold">
            <span className="bg-violet-400">C#</span>
            <span className="bg-yellow-300 text-gray-900">MS SQL</span>
          </div>
          <p className="text-lg">
            Written in C#, it includes basic authentication and allows
            calculations of each employee's payroll
          </p>
        </li>
      </ul>
    </section>
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  );
};

export default Projects;
