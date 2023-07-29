import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* cette classe ,je voudrais que tu me l'executes que Si elle est active */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Connection</li>
        </NavLink>
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/cart"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Blog</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
