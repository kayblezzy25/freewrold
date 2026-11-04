import React from "react";
import "./Services.css";
import {Link} from "react-router-dom";

import services from "../../data/services";

const Service=()=>{
  return (
    <section className="services" id="services">
      <div className="services__wrap">
        <div className="services__top">
          <span className="services__kicker">SERVICES</span>
          <h2 className="services__title">What We Do</h2>
          <p className="services__lead">
            Pick a service to see exactly how it works, the steps I follow and what you receive, plus examples of my past work.
          </p>
        </div>

        <div className="services__list">
          {services.map((item,index)=>{
            const isReverse=index % 2===1;

            return (
              <article
                key={item.slug}
                className={`services__row ${isReverse ? "services__row--reverse" : ""}`}
              >
                <div className="services__content">
                  <span className="services__num">{String(index+1).padStart(2,"0")}</span>
                  <h3 className="services__heading">{item.title}</h3>
                  <p className="services__tagline">{item.tagline}</p>
                  <p className="services__text">{item.summary}</p>

                  <ol className="services__steps">
                    {item.process.slice(0,4).map((step)=>(
                      <li className="services__step" key={step.title}>{step.title}</li>
                    ))}
                  </ol>

                  <div className="services__meta">{item.tags.join(" • ")}</div>

                  <Link className="services__more" to={`/services/${item.slug}`}>
                    See how it works <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="services__media">
                  <Link className="services__frame" to={`/services/${item.slug}`} aria-label={`Learn more about ${item.title}`}>
                    <video
                      className="services__video"
                      src={item.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
