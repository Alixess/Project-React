import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={style.logotip}>
        <NavLink to="/">
          <img src={logo} alt="logotip" />
        </NavLink>
      </div>
      <nav>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/table">Table</NavLink>
      </nav>
    </header>
  );
}
