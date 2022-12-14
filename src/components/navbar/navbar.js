import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";
import Logo from "../../resources/img/logo.webp";
import ROUTINGS from "../../router/routings";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const menuToggle = () => {
    activeMenu === "nav__menu"
      ? setActiveMenu("nav__menu nav__active")
      : setActiveMenu("nav__menu");
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <Link className="nav__logo" to={ROUTINGS.HOME}>
          <img className="logotype" src={Logo} />
        </Link>
        <div className={activeMenu}>
          <ul>
            <li className="nav__item">
              <NavLink
                exact
                activeClassName="nav__item__link-selected"
                className="nav__item__link"
                to={ROUTINGS.ABOUT}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                exact
                activeClassName="nav__item__link-selected"
                className="nav__item__link"
                to={ROUTINGS.SKILLS}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                exact
                activeClassName="nav__item__link-selected"
                className="nav__item__link"
                to={ROUTINGS.CONNECT}
              >
                Connect
              </NavLink>
            </li>
          </ul>
        </div>
        <div onClick={menuToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
