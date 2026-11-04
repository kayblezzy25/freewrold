import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import logo from "../../assets/images/logo.png";

const Navbar=()=>{
  const navLinks=[
    {label:"Home",to:"/"},
    {label:"Services",to:"/#services"},
    {label:"Portfolio",to:"/#portfolio"},
    {label:"Experience",to:"/#experience"},
    {label:"About",to:"/#about"},
    {label:"Contact",to:"/contact"},
  ];

  const telegramUrl="https://t.me/exmickey";

  return (
    <header className="header header--navOnly" data-floatchat="dark">
      <div className="header__topbar">
        <Link className="header__brand" to="/">
          <img className="header__logo" src={logo} alt="FREEWROLD logo" />
          <div className="header__brandText">
            <div className="header__brandName">FREEWROLD</div>
            <div className="header__brandTag">Web Dev • Social Media • AI Automation</div>
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
          <a className="header__btn header__btn--solid" href={telegramUrl} target="_blank" rel="noreferrer">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
