import React from "react";
import "./Services.css";

import botMp4 from "../../assets/images/gifts/bot.mp4";
import devWebMp4 from "../../assets/images/gifts/dev web.mp4";
import digitalMp4 from "../../assets/images/gifts/digital marketers.mp4";
import seoMp4 from "../../assets/images/gifts/seo.mp4";
import pressMp4 from "../../assets/images/gifts/press release.mp4";

const Service=()=>{
  const services=[
    {
      title:"Web Dev",
      body:[
        "I build modern, conversion-focused websites that look premium and load fast.",
        "From crypto presale sites to ICO websites and full business websites, I deliver clean UI, strong structure, and mobile-first performance.",
      ],
      bullets:["Crypto websites","Presale websites","ICO websites","Landing pages","Business websites"],
      media:devWebMp4,
      tags:"Presale Sites • ICO Websites • Landing Pages • Full Websites",
    },
    {
      title:"Digital Marketer",
      body:[
        "I help brands get real awareness and sales with targeted promotion and clean strategy.",
        "If your goal is growth, I build a plan that pushes visibility, trust, and conversions.",
      ],
      bullets:["Brand promotion","Audience growth","Sales-focused campaigns","Launch marketing","Influencer-style reach"],
      media:digitalMp4,
      tags:"Brand Promotion • Awareness • Sales Growth • Campaign Strategy",
    },
    {
      title:"SEO / GEO Ranking",
      body:[
        "I optimize your online presence so you rank and get found by the right people.",
        "From technical SEO to content structure and visibility signals, I position your brand for long-term results.",
      ],
      bullets:["On-page SEO","Technical SEO","Content structure","Local/GEO visibility","Speed & performance"],
      media:seoMp4,
      tags:"SEO • GEO Visibility • Technical Fixes • Performance",
    },
    {
      title:"Bots & Automation",
      body:[
        "I build bots that save time and automate growth.",
        "Telegram bots in Python (task bots, project bots, arbitrage bots, ecommerce bots), plus WhatsApp bots, website bots, and Facebook automation.",
      ],
      bullets:["Telegram bot (Python)","Task bot","Arbitrage bot","E-commerce bot","WhatsApp bot","Website bot","Facebook bot"],
      media:botMp4,
      tags:"Telegram Bots • WhatsApp Bots • Website Bots • Automation",
    },
    {
      title:"Press Releases",
      body:[
        "I write and package press releases that communicate your message clearly and professionally.",
        "Perfect for product launches, brand announcements, updates, and credibility building.",
      ],
      bullets:["Launch announcements","Brand credibility","Product updates","Company news","PR-ready formatting"],
      media:pressMp4,
      tags:"Press Releases • Announcements • Brand Credibility",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services__wrap">
        <div className="services__top">
          <span className="services__kicker">(Services)</span>
          <h2 className="services__title">What We Do</h2>
        </div>

        <div className="services__list">
          {services.map((item,index)=>{
            const isReverse=index % 2===1;

            return (
              <article
                key={`${item.title}-${index}`}
                className={`services__row ${isReverse ? "services__row--reverse" : ""}`}
              >
                <div className="services__content">
                  <h3 className="services__heading">{item.title}</h3>

                  {item.body.map((p,i)=>(
                    <p className="services__text" key={`${item.title}-p-${i}`}>
                      {p}
                    </p>
                  ))}

                  <ul className="services__bullets">
                    {item.bullets.map((b,i)=>(
                      <li className="services__bullet" key={`${item.title}-b-${i}`}>{b}</li>
                    ))}
                  </ul>

                  <div className="services__meta">{item.tags}</div>
                </div>

                <div className="services__media">
                  <div className="services__frame">
                    <video
                      className="services__video"
                      src={item.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
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
