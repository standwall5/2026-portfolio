import React from "react";
import { House, FolderOpenDot } from "lucide-react";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-center">
        {/* Logo */}
        <ul className="flex items-center gap-6 [&>li>a]:text-(--accent) [&>li>a]:hover:text-(--accent-hover) [&>li>a]:duration-200 ease-in-out  bg-(--card) w-max rounded-full mt-4 p-4 fixed z-99">
          {/* Home */}
          <li>
            <a href="#home">
              <House size={32} />
            </a>
          </li>

          {/* Projects */}
          <li>
            <a href="">
              <FolderOpenDot size={32} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
