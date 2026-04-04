import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-(--card) p-4 flex items-center justify-center gap-5 text-(--text-subtle)">
      © 2026 John Patrick Salen
      <ul className="flex items-center justify-center gap-2 [&>li>a>svg]:size-7 [&>li>a>svg]:hover:text-(--accent-hover) [&>li>a>svg]:duration-200 [&>li>a>svg]:ease-in-out">
        <li>
          <a href="https://github.com/standwall5" target="_blank">
            <IconBrandGithub />
          </a>
        </li>
        <li>
          <a href="">
            <IconBrandLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
