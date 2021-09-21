import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header >
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              
              <li className="current">
                <NavLink activeClassName="active" to="/home" className="smoothscroll">
                  Home
                </NavLink>
              </li>

              <li className="current">
                <NavLink activeClassName="active" to="/level" className="smoothscroll" >
                  Play
                </NavLink>
              </li>

              <li className="current">
                <NavLink activeClassName="active" to="/questions" className="smoothscroll">
                Questions
                </NavLink>
              </li>

              <li className="current">
                <NavLink activeClassName="active" to="/about" className="smoothscroll">
                About
                </NavLink>
              </li>

            </ul>
          </nav>
      </header>
    );
}

export default Header;
