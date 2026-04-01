import React from "react";
import { House, FolderOpenDot } from "lucide-react";

const Nav = () => {
  return (
    <nav>
      {/* Logo */}
      <ul>
        {/* Home */}
        <li>
          <a href="">
            <House />
          </a>
        </li>

        {/* Projects */}
        <li>
          <a href="">
            <FolderOpenDot />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
