import React from "react";
import { House, FolderOpenDot } from "lucide-react";

const Nav = () => {
  return (
    <header>
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
    </header>
  );
};

export default Nav;
