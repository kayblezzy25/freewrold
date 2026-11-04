import botMp4 from "../assets/images/gifts/bot.mp4";
import devWebMp4 from "../assets/images/gifts/dev web.mp4";
import digitalMp4 from "../assets/images/gifts/digital marketers.mp4";
import seoMp4 from "../assets/images/gifts/seo.mp4";
import pressMp4 from "../assets/images/gifts/press release.mp4";

// Every service has: a short card summary (home page) and a full
// explanation (service page): what it is, how it works, the step-by-step
// process I follow, what you receive, and common questions.
const services=[
  {
    slug:"web-development",
    title:"Web Development",
    short:"Web Dev",
    tagline:"Modern, fast, conversion-focused websites.",
    summary:"I build premium websites that load fast, look great on every device and turn visitors into customers: crypto presale and ICO sites, landing pages and full business websites.",
    media:devWebMp4,
    tags:["Presale Sites","ICO Websites","Landing Pages","Business Websites"],
    overview:[
      "Your website is usually the first place people decide whether to trust you. I design and build sites that make that decision easy: a clear message above the fold, proof that you are credible, and an obvious next step (buy, book, join or contact).",
      "I work across two main worlds. For crypto projects I build presale, ICO, meme-coin and community-takeover sites with tokenomics, roadmaps, whitepaper links, contract-copy buttons and live chart/DEX links. For businesses and personal brands I build service websites, portfolios and landing pages with booking, enquiry and WhatsApp/Telegram contact flows.",
    ],
    howItWorks:[
      "Everything is built mobile-first, because most of your visitors arrive on a phone.",
      "Pages are kept lightweight (optimised images, clean code, no bloated page builders), so the site loads in seconds.",
      "Each section has one job, guiding the visitor from “what is this?” to “I want this.”",
      "The site is SEO-ready on day one: proper headings, meta titles and descriptions, and social share previews.",
      "You get a site you can update, plus my support after launch.",
    ],
    process:[
      {title:"Discovery call",desc:"We talk about your goal, audience, competitors and the action you want visitors to take. You share logos, brand colours and any sites you like."},
      {title:"Structure & content plan",desc:"I map out every page and section (hero, features, tokenomics/services, roadmap/testimonials, FAQ, contact) and draft or polish the copy."},
      {title:"Design",desc:"I design the look and feel to match your brand and share a preview so you can request changes before anything is final."},
      {title:"Development",desc:"I build the site with modern, responsive code, connect forms, wallets/buy links, socials and analytics, and test on phones, tablets and desktops."},
      {title:"Launch",desc:"I connect your domain, set up hosting and SSL, submit the site to Google and do a final speed and SEO check."},
      {title:"Support & growth",desc:"After launch I help with updates, new sections and campaigns so the site keeps working for you."},
    ],
    deliverables:["Fully responsive website (mobile, tablet, desktop)","Custom design matched to your brand","Copywriting help for every section","Contact, booking or buy/wallet integrations","Domain, hosting & SSL setup","Basic on-page SEO & Google indexing","Speed optimisation","Post-launch support"],
    faqs:[
      {q:"How long does a website take?",a:"A landing page usually takes a few days. A full multi-page website usually takes one to three weeks, depending on content and revisions."},
      {q:"Can you build a crypto presale or token website?",a:"Yes. Presale, ICO, meme-coin and CTO sites are a core part of my work: tokenomics, roadmap, whitepaper, contract copy, buy buttons and DEX/chart links."},
      {q:"Do I need to provide the content?",a:"Not necessarily. Send what you have and I'll help write and structure the rest."},
    ],
  },
  {
    slug:"digital-marketing",
    title:"Digital Marketing & Promotion",
    short:"Digital Marketer",
    tagline:"Real awareness, real community, real sales.",
    summary:"Targeted promotion and a clear strategy that grows your audience, builds trust and drives sales for brands, launches and crypto projects.",
    media:digitalMp4,
    tags:["Brand Promotion","Awareness","Launch Marketing","Sales Growth"],
    overview:[
      "Having a great product isn't enough if the right people never see it. I plan and run promotion that puts your brand in front of people who are likely to buy, join or invest, and I keep the message consistent everywhere they find you.",
      "For crypto projects this means launch campaigns, community growth on Telegram and X, influencer-style reach and announcement pushes. For businesses it means social media growth, campaigns built around a goal and content that turns followers into customers.",
    ],
    howItWorks:[
      "We start from a clear goal, such as followers, community members, leads or sales, and measure everything against it.",
      "I identify your audience and the platforms they actually use instead of posting everywhere.",
      "Campaigns combine content, community engagement, partnerships and promotion so each part supports the others.",
      "I track results and double down on what works.",
      "You get regular updates so you always know what is happening and why.",
    ],
    process:[
      {title:"Audit & goals",desc:"I review your current pages, socials, community and competitors, then we agree on targets and a timeline."},
      {title:"Strategy",desc:"I build a campaign plan: audience, key messages, channels, content calendar and promotion budget."},
      {title:"Content & assets",desc:"I prepare posts, banners, announcement copy and short videos that fit your brand voice."},
      {title:"Launch & promote",desc:"Campaigns go live across the chosen channels, with influencer/partner reach and community activation."},
      {title:"Engage & grow",desc:"I keep the community active, answer questions and turn attention into members, leads and buyers."},
      {title:"Report & optimise",desc:"You receive a results report, and I adjust targeting and content to improve the next round."},
    ],
    deliverables:["Marketing strategy & content calendar","Social media posts & creatives","Launch / announcement campaigns","Telegram & X community growth","Influencer & partner outreach","Performance reports"],
    faqs:[
      {q:"Which platforms do you promote on?",a:"Mainly Telegram, X (Twitter), Facebook, Instagram, YouTube and crypto communities. We choose based on where your audience is."},
      {q:"Do you guarantee sales?",a:"No honest marketer can guarantee sales. What I can promise is a clear strategy, consistent execution and transparent reporting focused on your goal."},
      {q:"Can you market a token launch?",a:"Yes. I plan pre-launch hype, launch-day pushes and post-launch community retention."},
    ],
  },
  {
    slug:"seo-geo-ranking",
    title:"SEO / GEO Ranking",
    short:"SEO / GEO",
    tagline:"Get found on Google and in AI answers.",
    summary:"I optimise your website and online presence so you rank higher and get found by the right people, on Google and in AI-powered search (GEO).",
    media:seoMp4,
    tags:["On-page SEO","Technical SEO","Local / GEO","Performance"],
    overview:[
      "SEO (Search Engine Optimisation) helps your website appear when people search for what you offer. GEO (Generative Engine Optimisation) does the same for AI tools like ChatGPT, Gemini and Google's AI Overviews, which increasingly answer questions directly.",
      "I fix what holds your site back technically, structure your content so search engines and AI tools understand it, and build the signals that show your brand is trustworthy. Done well, this brings in customers month after month without paying for every click.",
    ],
    howItWorks:[
      "Technical SEO makes sure Google can crawl and index your site properly. It covers speed, mobile usability, sitemaps, broken links and structured data.",
      "On-page SEO puts the right keywords in the right places (titles, headings, descriptions and content) without sounding robotic.",
      "Content structure (clear answers, FAQs, schema markup) makes your pages easy for AI tools to quote.",
      "Local and GEO visibility (Google Business Profile, citations and reviews) helps nearby customers find you.",
      "Authority signals such as backlinks, PR mentions and consistent brand info build long-term trust.",
    ],
    process:[
      {title:"SEO audit",desc:"I scan your site for technical issues, check speed and mobile scores, and see where you rank today."},
      {title:"Keyword & competitor research",desc:"I find the searches your customers actually make and see what competitors are ranking for."},
      {title:"Technical fixes",desc:"I fix speed, indexing, sitemap, metadata, broken links and structured-data issues."},
      {title:"On-page & content optimisation",desc:"I optimise existing pages and plan new content and FAQs aimed at high-value keywords and AI answers."},
      {title:"Authority & local signals",desc:"I set up and optimise your Google Business Profile, citations and backlinks."},
      {title:"Track & report",desc:"I monitor rankings, traffic and leads and report progress so you can see the growth."},
    ],
    deliverables:["Full SEO audit report","Keyword research & strategy","Technical SEO fixes","Optimised titles, metas & headings","Schema / structured data","Google Search Console & Analytics setup","Local / Google Business optimisation","Monthly ranking reports"],
    faqs:[
      {q:"How long until I see results?",a:"Technical fixes can show improvements within weeks. Strong ranking growth usually builds over three to six months."},
      {q:"What is GEO?",a:"Generative Engine Optimisation: structuring your content so AI assistants and AI search results mention and recommend your brand."},
      {q:"Can you do SEO on a site you didn't build?",a:"Yes. I can audit and optimise most websites, including WordPress and custom-coded sites."},
    ],
  },
  {
    slug:"bots-automation",
    title:"Bots & Automation",
    short:"Bots",
    tagline:"Bots that save time and automate growth.",
    summary:"Custom Telegram bots in Python, WhatsApp bots, website chatbots and Facebook automation for tasks, projects, arbitrage and e-commerce.",
    media:botMp4,
    tags:["Telegram Bots","WhatsApp Bots","Website Bots","Automation"],
    overview:[
      "A good bot works 24/7. It answers customers, takes orders, verifies users, runs tasks and sends alerts while you focus on the business. I build bots tailored to exactly what you need instead of a generic template.",
      "I write Telegram bots in Python: task/airdrop bots, project and community bots, arbitrage and price-alert bots, and e-commerce bots that take orders and payments. I also build WhatsApp bots, website chat bots and Facebook automation.",
    ],
    howItWorks:[
      "A bot connects to the platform (Telegram, WhatsApp, Facebook or your website) through its official API.",
      "When users send commands, tap buttons or fill in forms, the bot runs your logic: replies, menus, payments, database updates or alerts.",
      "It can connect to external services such as exchanges and price feeds, payment gateways, Google Sheets or your own database.",
      "The bot is hosted on a server so it runs around the clock, with logs so issues are easy to fix.",
      "You get an admin panel or admin commands to control it without touching code.",
    ],
    process:[
      {title:"Requirements",desc:"We define what the bot must do, who uses it, the commands and menus, and any integrations (payments, APIs, sheets)."},
      {title:"Flow design",desc:"I map the conversation flow and button menus so the bot is simple for users."},
      {title:"Build",desc:"I develop the bot (Python for Telegram) with clean, documented code and secure handling of keys and data."},
      {title:"Test",desc:"You get a test version to try every command and flow, and I fix anything that isn't right."},
      {title:"Deploy",desc:"I deploy the bot to a server so it runs 24/7 and set up monitoring."},
      {title:"Handover & support",desc:"I show you how to manage it, hand over the code if agreed, and stay available for updates."},
    ],
    deliverables:["Custom bot built to your requirements","Button menus & command flows","API / payment / database integrations","Admin commands or dashboard","24/7 server deployment","Usage guide & support"],
    faqs:[
      {q:"What can a Telegram bot do?",a:"Almost anything: welcome and verify members, run tasks and airdrops, send price or arbitrage alerts, take orders and payments, post updates and answer FAQs."},
      {q:"Do I need a server?",a:"I'll set up hosting for you so the bot stays online 24/7."},
      {q:"Can the bot be updated later?",a:"Yes. New commands and features can be added at any time."},
    ],
  },
  {
    slug:"press-releases",
    title:"Press Releases",
    short:"Press Releases",
    tagline:"Professional announcements that build credibility.",
    summary:"I write and package press releases that tell your story clearly and professionally for launches, announcements, updates and credibility building.",
    media:pressMp4,
    tags:["Launch Announcements","Brand Credibility","Company News","Distribution"],
    overview:[
      "A press release is the official version of your news. When it's written well and published on news and crypto media sites, it gives your brand credibility, shows up in search results and gives investors and customers something trustworthy to share.",
      "I write press releases for product and token launches, listings, partnerships, funding, milestones and company news. I package them in the format editors expect and help get them distributed.",
    ],
    howItWorks:[
      "A press release follows a professional format: headline, sub-headline, dateline, strong opening paragraph, supporting details, quotes, a boilerplate about the company and media contacts.",
      "It answers who, what, when, where and why in the first few lines so editors and readers get the story immediately.",
      "Once distributed, it can be picked up by news, finance and crypto media sites. Those mentions show up on Google and can be shared on your site and socials.",
      "Published coverage builds trust signals that also support your SEO.",
    ],
    process:[
      {title:"Briefing",desc:"You tell me the news, goal and audience, and share any key facts, quotes and links."},
      {title:"Angle & headline",desc:"I find the most newsworthy angle and write headline options that get attention."},
      {title:"Writing",desc:"I write the full release in professional PR format, with quotes, key details and a company boilerplate."},
      {title:"Review",desc:"You review the draft and I make revisions until it's approved."},
      {title:"Distribution",desc:"I package it for distribution to news, finance or crypto media outlets based on your goals."},
      {title:"Share & report",desc:"You receive the published links to share on your website and socials and in your community."},
    ],
    deliverables:["Professionally written press release","Headline & sub-headline options","PR-ready formatting","Revisions until approved","Distribution packaging","Published links for sharing"],
    faqs:[
      {q:"What news is worth a press release?",a:"Launches, token listings, partnerships, funding, big milestones, new products and important company updates."},
      {q:"How long does writing take?",a:"Usually 24 to 72 hours after I receive the brief, depending on complexity."},
      {q:"Can you publish on crypto news sites?",a:"Yes, I can package releases for crypto and mainstream media distribution based on your goals and budget."},
    ],
  },
];

export const getService=(slug)=>services.find((s)=>s.slug===slug);

export default services;
