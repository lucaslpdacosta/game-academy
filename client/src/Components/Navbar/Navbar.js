import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const auth = localStorage.getItem('token');

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            &lt;GAME/ACADEMY&gt;
          </NavLink>
          {
            auth ?
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Início
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/missoes"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Missões
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/como_funciona"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Como Funciona
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/"
                    className="nav-links"
                    onClick={() => {
                      localStorage.clear();
                      window.location("http://localhost:3000/")
                      window.location.reload();
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>

              :

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Início
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/missoes"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Missões
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/como_funciona"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Como Funciona
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/login"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;