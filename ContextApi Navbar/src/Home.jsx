import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
}

export default Home;
