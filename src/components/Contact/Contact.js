import React,{useMemo,useState} from "react";
import "./Contact.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import {Link,useNavigate} from "react-router-dom";

import contactImg from "../../assets/images/contact.png";

const Contact=()=>{
  const navigate=useNavigate();
  const [openIndex,setOpenIndex]=useState(0);

  const faqs=useMemo(()=>[
    {
      q:"How can I get in touch with FREEWROLD for collaborations?",
      a:"Use the form below or reach me on Telegram. I respond fast and I can jump on a quick call if needed.",
    },
    {
      q:"What services does FREEWROLD offer?",
      a:"Web development, digital marketing & promotion, SEO/GEO ranking, press releases, and custom bots (Telegram & web).",
    },
    {
      q:"How can I reach your customer support?",
      a:"Telegram is the quickest. You can also call the phone number listed on this page.",
    },
    {
      q:"How do I request a quote for my project?",
      a:"Send your project goal, timeline, and any reference links. I’ll reply with a clear plan and pricing options.",
    },
  ],[]);

  const contacts=useMemo(()=>[
    {
      title:"PRESS",
      lines:[
        "FREEWROLD / Media & Partnerships",
        "We work global",
        "Telegram: @exmickey",
      ],
      action:{label:"Message on Telegram",href:"https://t.me/exmickey"},
    },
    {
      title:"SALES",
      lines:[
        "Website & Marketing Requests",
        "Phone: +234 8131082557",
      ],
      action:{label:"Call now",href:"tel:+2348131082557"},
    },
    {
      title:"HEAD OFFICE",
      lines:[
        "FREEWROLD",
        "Remote-first (Worldwide)",
      ],
      action:{label:"Open WhatsApp",href:"https://wa.me/2347066491271"},
    },
  ],[]);

  const onToggle=(idx)=>{
    setOpenIndex((prev)=>(prev===idx?-1:idx));
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    navigate("/contact/sent");
  };

  return (
    <>
      <Navbar />

      <main className="contactPage">
        <section className="contact">
          <div className="contact__inner">
            <div className="contact__left">
              <div className="contact__hero">
                <h1 className="contact__title">CONTACT US</h1>
                <p className="contact__intro">
                  For inquiries, collaborations, or to start a project, reach out and I’ll respond quickly.
                </p>

                <Link to="/" className="contact__back">← Back to Home</Link>
              </div>

              <div className="contact__grid">
                {contacts.map((c)=>(
                  <div className="contact__block" key={c.title}>
                    <p className="contact__blockTitle">{c.title}</p>

                    <div className="contact__blockLines">
                      {c.lines.map((t)=>(
                        <p className="contact__line" key={t}>{t}</p>
                      ))}
                    </div>

                    <a className="contact__action" href={c.action.href} target="_blank" rel="noreferrer">
                      <span className="contact__actionText">{c.action.label}</span>
                      <span className="contact__arrow">↗</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="contact__formWrap">
                <p className="contact__formTitle">SEND A MESSAGE</p>

                <form className="contact__form" onSubmit={onSubmit}>
                  <div className="contact__row">
                    <label className="contact__label">
                      Name
                      <input className="contact__input" type="text" name="name" placeholder="Your name" required />
                    </label>

                    <label className="contact__label">
                      Email
                      <input className="contact__input" type="email" name="email" placeholder="you@email.com" required />
                    </label>
                  </div>

                  <label className="contact__label">
                    Message
                    <textarea
                      className="contact__textarea"
                      name="message"
                      placeholder="Tell me what you’re building..."
                      rows="5"
                      required
                    />
                  </label>

                  <div className="contact__formBottom">
                    <button className="contact__btn" type="submit">
                      Send message
                    </button>

                    <a className="contact__alt" href="https://t.me/exmickey" target="_blank" rel="noreferrer">
                      Prefer Telegram? DM
                    </a>
                  </div>
                </form>
              </div>

              <div className="contact__faq">
                <h2 className="contact__faqTitle">FREQUENTLY ASKED QUESTIONS</h2>

                <div className="contact__faqList">
                  {faqs.map((f,idx)=> {
                    const isOpen=openIndex===idx;

                    return (
                      <button
                        type="button"
                        key={f.q}
                        className={`contact__faqItem ${isOpen?"is-open":""}`}
                        onClick={()=>onToggle(idx)}
                      >
                        <div className="contact__faqTop">
                          <span className="contact__faqQ">{f.q}</span>
                          <span className="contact__faqIcon">{isOpen?"–":"+"}</span>
                        </div>

                        <div className="contact__faqA" aria-hidden={!isOpen}>
                          <p>{f.a}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contact__right" aria-hidden="true">
              <div className="contact__imageWrap">
                <img className="contact__image" src={contactImg} alt="Contact visual" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
