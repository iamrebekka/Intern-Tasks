import React from "react";
import logo from "./images/logo.png";

function Header() {
  return (
    <nav>
      <div class="logo">
        <img src={logo} alt="Logo" />
        <span>Prodmast</span>
      </div>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <button>Sign Up</button>
    </nav>
  );
}

export default Header;
