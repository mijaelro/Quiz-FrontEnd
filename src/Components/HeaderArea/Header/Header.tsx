import { useState } from "react";
import { NavLink } from "react-router-dom";
import store from "../../../Redux/store";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header id="home">

        <nav id="nav-wrap">
          <NavLink to="" className="mobile-btn" >
            Show navigation
          </NavLink>
          <NavLink to="" className="mobile-btn">
            Hide navigation
          </NavLink>

          <ul id="nav" className="nav">
            <li className="current">
              <NavLink  to="/home" className="smoothscroll">
                Home
              </NavLink>
            </li>
            <li className="current">
              <NavLink to="/level" className="smoothscroll" >
                Play
              </NavLink>
            </li>
            <li className="current">
              <NavLink to="/questions" className="smoothscroll">
              Questions
              </NavLink>
            </li>
            <li className="current">
              <NavLink to="/about" className="smoothscroll">
              About
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="row banner">
        </div>
      </header>
    );
}

export default Header;
