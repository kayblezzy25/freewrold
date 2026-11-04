import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import services from "../../data/services";

const Footer=()=> {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3 className="footer__logo">FREEWROLD</h3>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <p className="footer__heading">ADDRESS</p>
            <p className="footer__text">We work global</p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">CONTACTS</p>

            <a className="footer__link" href="tel:+2348131082557">
              +234 8131082557
            </a>

            <a className="footer__link" href="mailto:Kayblezzy25@gmail.com">
              Kayblezzy25@gmail.com
            </a>

           <div className="footer__socials">
  {/* Telegram */}
  <a
    className="footer__socialIcon footer__socialIcon--large"
    href="https://t.me/exmickey"
    target="_blank"
    rel="noreferrer"
    aria-label="Telegram"
    title="Telegram"
  >
    <svg viewBox="0 0 24 24" role="img">
      <path d="M9.036 15.447 8.78 19.1c.37 0 .53-.158.72-.347l1.73-1.648 3.587 2.625c.658.364 1.123.173 1.298-.607l2.354-11.02v-.001c.203-.95-.343-1.323-.983-1.085L3.52 10.14c-.93.362-.916.882-.17 1.111l3.75 1.168 8.705-5.493c.41-.27.782-.121.475.151z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    className="footer__socialIcon footer__socialIcon--large"
    href="https://www.youtube.com/@Kayblezzy25"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
    title="YouTube"
  >
    <svg viewBox="0 0 24 24" role="img">
      <path d="M23.498 6.186a3.007 3.007 0 0 0-2.118-2.13C19.514 3.5 12 3.5 12 3.5s-7.514 0-9.38.556a3.007 3.007 0 0 0-2.118 2.13C0 8.07 0 12 0 12s0 3.93.502 5.814a3.007 3.007 0 0 0 2.118 2.13C4.486 20.5 12 20.5 12 20.5s7.514 0 9.38-.556a3.007 3.007 0 0 0 2.118-2.13C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  </a>
</div>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <p className="footer__heading">NAVIGATION</p>

            <Link className="footer__navLink" to="/#home">Home</Link>
            <Link className="footer__navLink" to="/#services">Services</Link>
            <Link className="footer__navLink" to="/#portfolio">Portfolio</Link>
            <Link className="footer__navLink" to="/#about">About</Link>
            <Link className="footer__navLink" to="/contact">Contact</Link>
          </nav>

          <nav className="footer__col" aria-label="Services">
            <p className="footer__heading">SERVICES</p>
            {services.map((sv)=>(
              <Link key={sv.slug} className="footer__navLink" to={`/services/${sv.slug}`}>{sv.title}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
