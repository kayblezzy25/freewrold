import brightSmile from "../assets/images/hero1.png";
import shibaZilla from "../assets/images/hero2.png";
import martyCto from "../assets/images/hero3.png";
import zentra from "../assets/images/hero4.png";
import inkBefore from "../assets/images/youtube/ink-before.jpg";
import inkAfter from "../assets/images/youtube/ink-after.jpg";
import tmzBefore from "../assets/images/youtube/tmz-before.jpg";
import tmzAfter from "../assets/images/youtube/tmz-after.jpg";
import axoBefore from "../assets/images/youtube/axo-before.jpg";
import axoAfter from "../assets/images/youtube/axo-after.jpg";

// Past work shown in the Portfolio section and on each service page.
// `services` lists the service slugs a project is relevant to.
// Items with `before` are before/after case studies (image = after).
const portfolio=[
  {
    id:"tmz-clips",
    title:"TMZ Clips",
    category:"YouTube Growth Case Study",
    image:tmzAfter,
    before:tmzBefore,
    stat:"70 → 701K subscribers",
    summary:"A celebrity clips channel (@TMZShortClips) grown from 70 subscribers to 701K through video promotion, packaging and a high-volume Shorts strategy.",
    highlights:["Before: 70 subscribers, 60 videos","After: 701K subscribers, 6.7K videos","High-volume Shorts strategy","Video promotion & optimisation"],
    services:["youtube-growth"],
  },
  {
    id:"ink-explainer",
    title:"Ink Explainer",
    category:"YouTube Growth Case Study",
    image:inkAfter,
    before:inkBefore,
    stat:"3K → 161K subscribers",
    summary:"An animated educational channel about human history and behaviour, grown from 3K to 161K subscribers with only 20 videos, well past YouTube's monetization threshold.",
    highlights:["Before: 3K subscribers, 5 videos","After: 161K subscribers, 20 videos","Targeted video promotion","Title, thumbnail & SEO optimisation"],
    services:["youtube-growth"],
  },
  {
    id:"axolootlvr",
    title:"AxolootlVR",
    category:"YouTube Growth Case Study",
    image:axoAfter,
    before:axoBefore,
    stat:"67 → 83.8K subscribers",
    summary:"A VR gaming channel grown from 67 subscribers to 83.8K while scaling from 9 to 884 videos, on its way to the channel's 100K goal.",
    highlights:["Before: 67 subscribers, 9 videos","After: 83.8K subscribers, 884 videos","Gaming niche promotion","Consistent upload & Shorts plan"],
    services:["youtube-growth"],
  },
  {
    id:"brightsmile",
    title:"BrightSmile Dental",
    category:"Business Website",
    image:brightSmile,
    summary:"A clean, trust-first website for a dental clinic with clear services, team, testimonials, insurance info and a prominent “Book Appointment” flow.",
    highlights:["Appointment-focused hero & CTAs","Trust stats (experience, patients, rating)","Service, team & gallery pages","Mobile-first, fast-loading layout"],
    services:["web-development","seo-geo-ranking"],
  },
  {
    id:"shibazilla",
    title:"ShibaZilla (BEP-20)",
    category:"Meme Coin / Presale Website",
    image:shibaZilla,
    summary:"A bold, high-energy landing site for a BEP-20 meme token on Binance Smart Chain, built to drive buys and whitepaper reads.",
    highlights:["Buy Now + Whitepaper CTAs","Features, tokenomics & roadmap sections","Social links wired into the header","Brand-matched gradient styling"],
    services:["web-development","digital-marketing"],
  },
  {
    id:"marty-cto",
    title:"MARTY CTO (Solana)",
    category:"Community Takeover Website",
    image:martyCto,
    summary:"A community-takeover site for a Solana token that makes the project look credible again, with live stats and one-click community links.",
    highlights:["Copy-pair contract button","Live liquidity & market-cap cards","Telegram, X and DEX Screener links","Dark glassmorphism UI"],
    services:["web-development","digital-marketing","bots-automation"],
  },
  {
    id:"zentra",
    title:"Zentra Network",
    category:"Crypto / ICO Project Website",
    image:zentra,
    summary:"A privacy-first payment network website that explains complex tech (hybrid PoP + PoW consensus, ZK proofs) in a simple, investor-friendly way.",
    highlights:["Key network stats above the fold","Consensus, economics & roadmap pages","Whitepaper and dev-docs entry points","Download-wallet conversion CTA"],
    services:["web-development","press-releases","seo-geo-ranking"],
  },
];

export const getWorkForService=(slug)=>portfolio.filter((p)=>p.services.includes(slug));

export default portfolio;
