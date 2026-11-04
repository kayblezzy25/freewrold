import brightSmile from "../assets/images/hero1.png";
import shibaZilla from "../assets/images/hero2.png";
import martyCto from "../assets/images/hero3.png";
import zentra from "../assets/images/hero4.png";

// Past work shown in the Portfolio section and on each service page.
// `services` lists the service slugs a project is relevant to.
const portfolio=[
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
