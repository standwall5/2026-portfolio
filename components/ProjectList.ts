// Contains all information about created projects, including title, image, technologies used, description, and links to GitHub and website (if available).

// Used by:
// - Projects.tsx
// - Each project is mapped in ProjectCard.tsx

export const projects = [
  {
    title: "AdEducate",
    image: "projects/adeducate.png",
    tech: [
      { name: "Next.js", class: "bg-black" },
      { name: "PostgreSQL", class: "bg-[#2377bd]" },
    ],
    desc: "A learning platform with modules, quizzes, news and support contacts created for Sto. Nino National High School",
    github: "https://github.com/standwall5/adeducate",
    website: "",
  },
  {
    title: "Sandbox - Job Web App",
    image: "projects/sandbox-job-app.png",
    tech: [
      { name: "Java", class: "bg-amber-300 text-gray-900" },
      { name: "Oracle", class: "bg-[#c73044]" },
      { name: "MS Access", class: "bg-[#c73044]" },
    ],
    desc: "A job employment platform with user/company roles. Users can create, apply, and search jobs and users.",
    github: "https://github.com/standwall5/jobapplication",
    website: "",
  },
  {
    title: "Olivia Rodrigo Website",
    image: "projects/olivia.jpg",
    tech: [
      { name: "HTML", class: "bg-orange-500" },
      { name: "CSS", class: "bg-blue-500" },
      { name: "JavaScript", class: "bg-yellow-400 text-gray-900" },
      { name: "MySQL", class: "bg-[#2377bd]" },
    ],
    desc: "Fan website with dynamic elements like messages and user authentication.",
    github: "https://github.com/gellyace21/olivia",
    website: "https://gellyace21.github.io/olivia/",
  },
  {
    title: "Employee Payroll System",
    link: "https://github.com/standwall5/jobapplication",
    image: "projects/payroll.png",
    tech: [
      { name: "C#", class: "bg-violet-400" },
      { name: "MS SQL", class: "bg-yellow-300 text-gray-900" },
    ],
    desc: "Payroll system in C# with basic authentication and salary computation.",
    github: "",
    website: "",
  },
];
