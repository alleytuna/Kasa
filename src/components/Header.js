import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Kasa logo" className="NavLogo" />
      </NavLink>
      <nav>
        <ul className="NavLink">
          <li>
            <NavLink className="Link" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/about">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
