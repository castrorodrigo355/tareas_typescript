import React from "react";
import { Link } from "react-router-dom";
import "./stylesApp.css";

export const Navbar = () => {
  const items = [
    { id: 0, title: "Home", url: "/" },
    { id: 1, title: "Form", url: "/form" },
    { id: 2, title: "Users", url: "/users" },
    { id: 3, title: "About", url: "/about" }
  ];
  return (
    <nav className="navbar-container">
      <ul className="navbar-container-items">
        {items.map(({ id, title, url }) => (
          <li className="navbar-container-items-option" key={id}>
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
