import { IconBrandGithub, IconBrowser } from "@tabler/icons-react";
import React from "react";

type ProjectCardProps = {
  projects: {
    title: string;
    image: string;
    tech: { name: string; class: string }[];
    desc: string;
    github: string;
    website: string;
  }[];
  expand: boolean;
};

const ProjectCard = ({ projects, expand }: ProjectCardProps) => {
  return (
    <ul
      className={`max-w-5xl w-full self-center flex flex-wrap items-center justify-start gap-8 [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:gap-4 [&>li]:bg-(--card) [&>li]:rounded-2xl [&>li]:p-5 [&>li]:h-100 [&>li]:min-w-10 [&>li]:max-w-78 [&>li]:shadow-[0px_1px_4px_rgba(0,0,0,0.16)] [&>li>a>img]:w-lg [&>li>a>div>img]:rounded-xl [&>li>a>div>img]:aspect-video [&>li]:hover:-translate-y-2 [&>li]:transition [&>li]:duration-200 [&>li]:hover:bg-(--card-hover) [&>li>a>div>span]:rounded-sm overflow-hidden duration-250 ease-in-out -mt-5 [&>li]:z-15 [&>li]:mt-2  ${expand === true ? "max-h-230" : "max-h-104 "}`}
    >
      {projects.map((proj) => (
        <li className="relative" key={proj.title}>
          <a
            href={
              proj.github
                ? proj.github
                : proj.website
                  ? proj.website
                  : "#projects"
            }
            target={!proj.github && !proj.website ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <div className="img-container">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-bold">{proj.title}</h1>
            <div className="flex flex-wrap items-center gap-2 *:px-2 *:text-(--accent-text) *:bg-(--accent) *:text-sm *:uppercase *:font-bold">
              {proj.tech.map((tech) => (
                <span key={tech.name}>{tech.name}</span>
              ))}
            </div>
            <p className="text-md">{proj.desc}</p>
            <div className="flex flex-row gap-4 mt-2 [&>a>svg]:hover:stroke-(--accent) *:transition *:duration-200 absolute bottom-5 right-5">
              {proj.github && (
                <button
                  type="button"
                  title="View on GitHub"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(proj.github, "_blank");
                  }}
                  className="hover:cursor-pointer bg-none border-none p-0 m-0"
                >
                  <IconBrandGithub className="w-5 h-5 hover:stroke-[var(--accent)]" />
                </button>
              )}
              {proj.website && (
                <button
                  type="button"
                  title="Visit Website"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(proj.website, "_blank");
                  }}
                  className="hover:cursor-pointer bg-none border-none p-0 m-0"
                >
                  <IconBrowser className="w-5 h-5 hover:stroke-[var(--accent)]" />
                </button>
              )}
              {proj.github === "" && proj.website === "" && (
                <span className="text-sm text-green-600 font-bold italic">
                  No links available
                </span>
              )}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCard;
