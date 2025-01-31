import React, { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="header">
          <img src={logo} className="logo" />
        </div>
        {links.map((link) => {
          if (showLinks) {
            return <h2 key={link.id}>{link.text}</h2>;
          }
          return;
        })}
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
