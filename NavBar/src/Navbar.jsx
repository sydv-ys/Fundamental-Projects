import React, { useRef, useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" />

          <button className="nav-toggle" onClick={toggle}>
            <FaBars />
          </button>
        </div>
      </div>

      {showLinks && (
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              if (showLinks) {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
