import Image from "next/image";
import profile from "@/public/profile2.jpg";
import "./ProfileHero.css";
import doodle from "@/public/doodle-name.webp";
import Skills from "@/components/Skills";
import {
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandLinkedin,
  IconPointFilled,
  IconSql,
} from "@tabler/icons-react";
import { IconBrandCss3 } from "@tabler/icons-react";
import { IconBrandNextjs } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import Pup from "./icons/Pup";

const ProfileHero = () => {
  return (
    <div className="flex items-center justify-center gap-14">
      <div className="relative w-70 h-80 rounded-2xl overflow-hidden">
        <Image
          src={profile}
          alt=""
          fill
          className="object-cover object-bottom"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-4 items-start text-left font-bold">
        <span className="text-2xl">Hi, I&apos;m</span>
        <h1 className="text-5xl">
          <span className="text-(--accent) relative flex gap-4">
            John Patrick Salen
            <div className="social-links flex gap-1 items-end justify-center [&>a>svg]:size-8 [&>a>svg]:stroke-(--accent) [&>a>svg]:hover:stroke-(--accent-hover) [&>a>svg]:duration-200 [&>a>svg]:ease-in-out">
              <a
                href="https://www.github.com/standwall5"
                className="group"
                target="_blank"
              >
                <IconBrandGithub />
              </a>

              <a href="" className="group">
                <IconBrandLinkedin />
              </a>
            </div>
          </span>
          {/* <span className=" relative">
            
            {/*<Image
              className="absolute opacity-0 md:opacity-100 md:-right-15 md:-top-5 rotate-45"
              src={doodle}
              alt=""
              width={100}
              height={100}
            ></Image>
          </span> */}
        </h1>

        <span className="text-xl">
          Full-Stack Developer based in the Philippines
        </span>
        {/* <div className="horizontal-line h-1 w-[50%] rounded-full bg-(--accent)"></div> */}

        {/* <Skills /> */}
        <section className="w-max flex flex-col items-center gap-5">
          {/* <h1 className="text-3xl font-bold text-center">Skills</h1> */}
          <ul className="flex gap-1 [&>li>svg]:size-8 *:text-(--accent)">
            <li>
              <IconBrandHtml5 />
            </li>
            <li>
              <IconBrandCss3 />
            </li>
            <li>
              <IconBrandJavascript />
            </li>
            <li>
              <IconBrandNextjs />
            </li>
            <li>
              <IconSql />
            </li>
          </ul>
        </section>
        <span className="flex items-center gap-2">
          <Pup className="w-7" />{" "}
          <span className="flex items-center gap-1">
            Information Technology <IconPointFilled size={12} /> Polytechnic
            University of the Philippines '26
          </span>
        </span>
      </div>

      <svg height="0" width="0">
        <filter id="handDrawnNoise">
          <feTurbulence
            result="noise"
            numOctaves="8"
            baseFrequency="0.1"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            yChannelSelector="G"
            xChannelSelector="R"
            scale="3"
            in2="noise"
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
        <filter id="handDrawnNoise2">
          <feTurbulence
            result="noise"
            numOctaves="8"
            baseFrequency="0.1"
            seed="1010"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            yChannelSelector="G"
            xChannelSelector="R"
            scale="3"
            in2="noise"
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default ProfileHero;
