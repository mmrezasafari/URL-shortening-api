import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "../Header/headerStyle.scss";

const NavBar = () => {
  return (
    <nav className="header-nav-bar container d-flex flex-row justify-content-between align-items-center">
      <section className="header-links d-flex flex-row">
        <div className="links-name">
          <p className="name-p">Shortly</p>
        </div>
        <div className="links-ul d-flex align-items-center">
          <ul className="ul-main d-flex flex-row">
            <li className="ul-link">
              <a href="#">Features</a>
            </li>
            <li className="ul-link">
              <a href="#">Pricing</a>
            </li>
            <li className="ul-link">
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="header-buttons d-flex flex-row">
        <div className="buttons-login mx-4">
          <Button className="login-Button" variant="text" href="/login">
            <a to="/login">Login</a>
          </Button>
        </div>
        <div className="buttons-sign-up">
          <Button className="sign-up-button" variant="contained" href="/signIn">
            <a to="/signIn">Sign Up</a>
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
