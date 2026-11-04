import React,{useEffect,useState} from "react";
import "./ServiceDetail.css";
import {Link,Navigate,useParams} from "react-router-dom";

import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Lightbox from "../Portfolio/Lightbox";
import services,{getService} from "../../data/services";
import {getWorkForService} from "../../data/portfolio";

const TELEGRAM_URL="https://t.me/exmickey";
const WHATSAPP_URL="https://wa.me/2347066491271";

const ServiceDetail=()=>{
  const {slug}=useParams();
  const service=getService(slug);
  const [openFaq,setOpenFaq]=useState(0);
  const [lightbox,setLightbox]=useState(null);

  useEffect(()=>{
    window.scrollTo(0,0);
    setOpenFaq(0);
    if(service) document.title=`${service.title} | FREEWROLD`;
    return ()=>{document.title="FREEWROLD";};
  },[slug,service]);

  if(!service) return <Navigate to="/#services" replace />;

  const work=getWorkForService(service.slug);
  const others=services.filter((s)=>s.slug!==service.slug);

  return (
    <>
      <Navbar />

      <main className="sd">
        {/* HERO */}
        <section className="sd__hero">
          <div className="sd__wrap sd__heroGrid">
            <div>
              <Link to="/#services" className="sd__back">← All services</Link>
              <span className="sd__kicker">SERVICE</span>
              <h1 className="sd__title">{service.title}</h1>
              <p className="sd__tagline">{service.tagline}</p>
              <p className="sd__summary">{service.summary}</p>
              <div className="sd__ctaRow">
                <a className="sd__btn sd__btn--solid" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Start a project</a>
                <a className="sd__btn sd__btn--ghost" href="#process">See the process</a>
              </div>
            </div>
            <div className="sd__heroMedia">
              <video className="sd__video" src={service.media} autoPlay loop muted playsInline preload="metadata" />
            </div>
          </div>
        </section>

        {/* OVERVIEW + HOW IT WORKS */}
        <section className="sd__section">
          <div className="sd__wrap sd__twoCol">
            <div>
              <h2 className="sd__h2">What it is</h2>
              {service.overview.map((p)=>(
                <p className="sd__p" key={p.slice(0,24)}>{p}</p>
              ))}
            </div>
            <div className="sd__card">
              <h2 className="sd__h2">How it works</h2>
              <ul className="sd__checks">
                {service.howItWorks.map((h)=>(
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sd__section sd__section--alt" id="process">
          <div className="sd__wrap">
            <h2 className="sd__h2 sd__center">How I'll do it, step by step</h2>
            <p className="sd__p sd__center sd__narrow">
              A clear process means no surprises. Here is exactly what happens from our first message to the finished result.
            </p>
            <ol className="sd__process">
              {service.process.map((step,i)=>(
                <li className="sd__step" key={step.title}>
                  <span className="sd__stepNum">{String(i+1).padStart(2,"0")}</span>
                  <h3 className="sd__stepTitle">{step.title}</h3>
                  <p className="sd__stepDesc">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="sd__section">
          <div className="sd__wrap">
            <h2 className="sd__h2">What you get</h2>
            <ul className="sd__deliverables">
              {service.deliverables.map((d)=>(
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* PAST WORK */}
        <section className="sd__section sd__section--alt">
          <div className="sd__wrap">
            <h2 className="sd__h2">Past work</h2>
            {work.length ? (
              <div className="sd__work">
                {work.map((p)=>(
                  <button type="button" className="sd__workItem" key={p.id} onClick={()=>setLightbox(p)}>
                    <img src={p.image} alt={`${p.title}: ${p.category}`} loading="lazy" />
                    <span className="sd__workText">
                      <span className="sd__workCat">{p.category}</span>
                      <span className="sd__workTitle">{p.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="sd__p">
                Samples for this service are shared privately on request.{" "}
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Message me on Telegram</a> to see them.
              </p>
            )}
            <Link className="sd__link" to="/#portfolio">View the full portfolio →</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="sd__section">
          <div className="sd__wrap sd__narrowWrap">
            <h2 className="sd__h2 sd__center">Questions</h2>
            <div className="sd__faqs">
              {service.faqs.map((f,idx)=>{
                const isOpen=openFaq===idx;
                return (
                  <div className={`sd__faq ${isOpen?"is-open":""}`} key={f.q}>
                    <button
                      type="button"
                      className="sd__faqQ"
                      aria-expanded={isOpen}
                      onClick={()=>setOpenFaq(isOpen?-1:idx)}
                    >
                      <span>{f.q}</span>
                      <span aria-hidden="true">{isOpen?"–":"+"}</span>
                    </button>
                    {isOpen ? <p className="sd__faqA">{f.a}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sd__cta">
          <div className="sd__wrap sd__center">
            <h2 className="sd__ctaTitle">Ready to get started with {service.short}?</h2>
            <p className="sd__ctaText">Tell me your goal and timeline. I'll reply with a clear plan and pricing options.</p>
            <div className="sd__ctaRow sd__ctaRow--center">
              <a className="sd__btn sd__btn--solid" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Message on Telegram</a>
              <a className="sd__btn sd__btn--light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
              <Link className="sd__btn sd__btn--light" to="/contact">Contact page</Link>
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="sd__section">
          <div className="sd__wrap">
            <h2 className="sd__h2">Other services</h2>
            <div className="sd__others">
              {others.map((s)=>(
                <Link className="sd__other" key={s.slug} to={`/services/${s.slug}`}>
                  <span className="sd__otherTitle">{s.title}</span>
                  <span className="sd__otherTag">{s.tagline}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Lightbox project={lightbox} onClose={()=>setLightbox(null)} />
    </>
  );
};

export default ServiceDetail;
