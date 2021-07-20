import React from "react";
import "./Header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <h1 className="name">Madeleine O'Dea</h1>
      <div>
        <ul>
          <Navigation title="About Me" href="#" />
          <Navigation title="Portfolio" href="#" />
          <Navigation title="Contact" href="#" />
          <Navigation title="Resume" href="#" />
        </ul>
      </div>
    </header>
  );
}

export default Header;
