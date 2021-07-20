import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import { useState } from "react";

function Header() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const handleOnClick = (e) => {
    const page = e.target;
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <h1 className="name">Madeleine O'Dea</h1>
        <div>
          <ul>
            <Navigation title="About Me" onClick={handleOnClick} />
            <Navigation title="Portfolio" onClick={handleOnClick} />
            <Navigation title="Contact" onClick={handleOnClick} />
            <Navigation title="Resume" onClick={handleOnClick} />
          </ul>
        </div>
      </header>
      <main>
        {currentPage === "About Me" && <AboutMe />}
        {currentPage === "Portfolio" && <Portfolio />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "Resume" && <Resume />}
      </main>
    </div>
  );
}

export default Header;
