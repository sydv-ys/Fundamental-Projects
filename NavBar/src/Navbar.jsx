import React, { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <nav>
      <div className="nav-center">
        <div className="header">
          <img src={logo} className="logo" />
        </div>

        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container">
        <ul className="links">
          {links.map((link) => {
            if (showLinks) {
              return <h2 key={link.id}>{link.text}</h2>;
            }
            return;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
