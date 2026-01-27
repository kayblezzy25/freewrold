import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import logo from "../../assets/images/logo.png";

const Navbar=()=>{
  const navLinks=[
    {label:"Home",to:"/"},
    {label:"Services",to:"/#services"},
    {label:"About",to:"/#about"},
    {label:"Contact",to:"/contact"},
  ];

  return (
    <header className="header header--navOnly">
      <div className="header__topbar">
        <Link className="header__brand" to="/">
          <img className="header__logo" src={logo} alt="FREEWROLD logo" />
          <div className="header__brandText">
            <div className="header__brandName">FREEWROLD</div>
            <div className="header__brandTag">Web Dev • Digital Marketing • Promotion</div>
          </div>
        </Link>

        <nav className="header__nav">
          {navLinks.map((l)=>(
            <Link key={l.label} to={l.to} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="header__btn header__btn--ghost" to="/#portfolio">View Work</Link>
          <Link className="header__btn header__btn--solid" to="/contact">Hire Me</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
