import React from "react";
import "./About.css";

import aboutImg from "../../assets/images/about.jpg";

const About=()=>{
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__left">
          <h2 className="about__title">ABOUT FREEWROLD</h2>

          <p className="about__text about__text--strong">
            I&apos;m not here to just build you a website, I&apos;m here to help you turn your skills into a brand that attracts real clients and opportunities.
          </p>

          <p className="about__text about__text--muted">
            If you&apos;re not sure what to build, how to present your services, or how to convert visitors into paying customers, I&apos;ll guide you and deliver a clean, fast, modern site—plus the marketing strategy to make it perform.
          </p>

          <a className="about__btn" href="#contact">SCHEDULE</a>
        </div>

        <div className="about__right" aria-label="About image">
          <img className="about__img" src={aboutImg} alt="About FREEWROLD" />
        </div>
      </div>
    </section>
  );
};

export default About;
