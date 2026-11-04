import React from "react";
import "./Experience.css";

// Content taken from Micheal Arewa's resume.
const roles=[
  {
    org:"FREEWROLD (Remote)",
    role:"Manager & Developer",
    period:"Aug 2024 – Present",
    points:[
      "Manage client websites, Telegram bots and AI automation projects.",
      "Built and deployed a multi-channel Telegram bot on Render that generates and publishes AI content automatically.",
      "Built n8n automations integrating OpenAI, Telegram, Google Sheets and Airtop browser automation, including a Telegram ad-deployment workflow with retry logic, deduplication, validation and audit logging.",
      "Built a custom-coded WordPress theme, pages and navigation for an independent musician's website.",
    ],
  },
  {
    org:"Fiverr (Remote)",
    role:"Freelance Software Developer",
    period:"Sep 2025 – Present",
    points:[
      "Scope requirements directly with international clients and deliver tailored bots and automation tools.",
      "Developed a Telegram bot that tracks cryptocurrency prices with real-time alerts and in-chat trading features.",
    ],
  },
  {
    org:"Own brand & clients",
    role:"Social Media & Content",
    period:"Ongoing",
    points:[
      "Produce AI UGC video ads: product demos, testimonials and short-form ads with strong hooks, captions and clear calls to action.",
      "Write and publish a regular LinkedIn content series on websites, AI video and UGC advertising.",
      "Run Facebook/Meta ad campaigns to grow a Telegram channel audience.",
    ],
  },
];

const skills=[
  {group:"Social media",items:["Social Media Management","Content Planning & Publishing","Community Engagement","UGC & Short-form Video","TikTok • Reels • Shorts","Facebook / Meta Ads","CapCut","AI video tools"]},
  {group:"Tech",items:["n8n","OpenAI API","Telegram Bot API","Python","JavaScript / TypeScript","Node.js","React","Next.js","HTML / CSS","WordPress","Render"]},
];

const Experience=()=>{
  return (
    <section className="xp" id="experience">
      <div className="xp__wrap">
        <div className="xp__top">
          <span className="xp__kicker">EXPERIENCE</span>
          <h2 className="xp__title">Micheal Arewa</h2>
          <p className="xp__role">Social Media Manager & AI Content Creator | Web & AI Automation Developer</p>
          <p className="xp__lead">
            I'm a social media manager and AI content creator who also builds the websites and automations behind a brand's online presence. I work remotely with international clients through Fiverr and FREEWROLD.
          </p>
        </div>

        <ol className="xp__timeline">
          {roles.map((r)=>(
            <li className="xp__item" key={r.org}>
              <div className="xp__head">
                <div>
                  <h3 className="xp__org">{r.role}</h3>
                  <p className="xp__company">{r.org}</p>
                </div>
                <span className="xp__period">{r.period}</span>
              </div>
              <ul className="xp__points">
                {r.points.map((p)=>(<li key={p}>{p}</li>))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="xp__skills">
          {skills.map((g)=>(
            <div className="xp__skillGroup" key={g.group}>
              <p className="xp__skillTitle">{g.group}</p>
              <div className="xp__chips">
                {g.items.map((i)=>(<span className="xp__chip" key={i}>{i}</span>))}
              </div>
            </div>
          ))}
          <div className="xp__skillGroup">
            <p className="xp__skillTitle">Education</p>
            <p className="xp__edu">Master's Degree, Obafemi Awolowo University (OAU), Ile-Ife, Nigeria</p>
          </div>
        </div>

        <div className="xp__links">
          <a href="https://www.linkedin.com/in/micheal-arewa" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/kayblezzy25" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
