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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleOnClick = (e) => {
    console.log(e.target);
    setCurrentPage(e.target.innerHTML);
    console.log(currentPage);
  };

  const handleOnNameInput = (e) => {
    const input = e.target.value;
    if (!input) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailInput = (e) => {
    const input = e.target.value;
    const myReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!myReg.exec(input)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div>
      <header>
        <h1 className="name">Madeleine O'Dea</h1>
        <div>
          <ul>
            <Navigation
              title="About Me"
              onClick={handleOnClick}
              currentPage={currentPage}
            />
            <Navigation
              title="Portfolio"
              onClick={handleOnClick}
              currentPage={currentPage}
            />
            <Navigation
              title="Contact"
              onClick={handleOnClick}
              currentPage={currentPage}
            />
            <Navigation
              title="Resume"
              onClick={handleOnClick}
              currentPage={currentPage}
            />
          </ul>
        </div>
      </header>
      <main>
        {currentPage === "About Me" && <AboutMe />}
        {currentPage === "Portfolio" && <Portfolio />}
        {currentPage === "Contact" && (
          <Contact
            onFocusOut={handleOnNameInput}
            nameError={nameError}
            onEmailFocusOut={handleEmailInput}
            emailError={emailError}
          />
        )}
        {currentPage === "Resume" && <Resume />}
      </main>
    </div>
  );
}

export default Header;
