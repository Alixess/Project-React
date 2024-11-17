import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className="logotip">
        <h1>Learn language</h1>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/table">Table</NavLink>
      </nav>
    </header>
  );
}
