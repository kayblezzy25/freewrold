import React,{useEffect,useMemo,useState} from "react";
import "./Header.css";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import logo from "../../assets/images/logo.png";

const Header=()=>{
  const navLinks=[
    {label:"Home",href:"#home"},
    {label:"Services",href:"#services"},
    {label:"Portfolio",href:"#portfolio"},
    {label:"About",href:"#about"},
    {label:"Contact",href:"#contact"},
  ];

  const features=[
    {title:"Pre-built full websites",desc:"Save time with ready-to-use sections you can customize fast for your personal brand.",icon:"hex"},
    {title:"Live website builder",desc:"Make changes and preview instantly, keeping your workflow smooth and professional.",icon:"card"},
    {title:"Super fast performance",desc:"Built for speed, clean UI, and modern structure that looks great on every device.",icon:"speed"},
    {title:"Lifetime free updates",desc:"Keep improving your site with fresh sections and updates as your brand grows.",icon:"update"},
  ];

  const shots=useMemo(()=>(
    [
      {src:hero1,alt:"preview 1",cls:"shot--1"},
      {src:hero2,alt:"preview 2",cls:"shot--2"},
      {src:hero3,alt:"preview 3",cls:"shot--3"},
      {src:hero4,alt:"preview 4",cls:"shot--4"},
    ]
  ),[]);

  // 1) Images: pop in one after the other (default: once, every 10s)
  const [visibleShots,setVisibleShots]=useState(1);

  useEffect(()=>{
    if(visibleShots>=shots.length) return;

    const t=setTimeout(()=>{
      setVisibleShots((v)=>Math.min(v+1,shots.length));
    },1000);

    return ()=>{
      clearTimeout(t);
    };
  },[visibleShots,shots.length]);

  // 2) Typewriter for kicker + title
  const kickerFull="We make it easy";
  const titleFull="Create a beautiful\nservice website, easily!";

  const [typedKicker,setTypedKicker]=useState("");
  const [typedTitle,setTypedTitle]=useState("");
  const [typingStage,setTypingStage]=useState("kicker"); // "kicker" | "pause" | "title" | "done"

  useEffect(()=>{
    let i=0;
    let t=null;

    if(typingStage==="kicker"){
      i=0;
      setTypedKicker("");
      t=setInterval(()=>{
        i+=1;
        setTypedKicker(kickerFull.slice(0,i));
        if(i>=kickerFull.length){
          clearInterval(t);
          setTypingStage("pause");
        }
      },70);
    }

    if(typingStage==="pause"){
      t=setTimeout(()=>{
        setTypingStage("title");
      },350);
    }

    if(typingStage==="title"){
      i=0;
      setTypedTitle("");
      t=setInterval(()=>{
        i+=1;
        setTypedTitle(titleFull.slice(0,i));
        if(i>=titleFull.length){
          clearInterval(t);
          setTypingStage("done");
        }
      },55);
    }

    return ()=>{
      if(t) clearInterval(t);
      if(t) clearTimeout(t);
    };
  },[typingStage]);

  const renderTypedTitle=()=>{
    const lines=typedTitle.split("\n");
    return lines.map((line,idx)=>(
      <span key={idx} className="header__titleLine">
        {line}
        {idx!==lines.length-1 ? <br/> : null}
      </span>
    ));
  };

  const showCaret=(typingStage!=="done");

  return (
    <header className="header" id="home">
      <div className="header__bgShapes" aria-hidden="true">
        <span className="shape shape--a" />
        <span className="shape shape--b" />
      </div>

      <div className="header__topbar">
        <a className="header__brand" href="#home">
          <img className="header__logo" src={logo} alt="FREEWROLD logo" />
          <div className="header__brandText">
            <div className="header__brandName">FREEWROLD</div>
            <div className="header__brandTag">Web Dev • Digital Marketing • Promotion</div>
          </div>
        </a>

        <nav className="header__nav">
          {navLinks.map((item)=>(
            <a key={item.href} className="header__navLink" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__btn header__btn--ghost" href="#portfolio">View Work</a>
          <a className="header__btn header__btn--solid" href="#contact">Hire Me</a>
        </div>
      </div>

      <div className="header__hero">
        <div className="header__left">
          <div className={`header__kicker ${showCaret && typingStage==="kicker" ? "isTyping" : ""}`}>
            {typedKicker}
          </div>

          <h1 className={`header__title ${showCaret && (typingStage==="title" || typingStage==="pause") ? "isTyping" : ""}`}>
            {renderTypedTitle()}
          </h1>

          <div className="header__playRow">
            <button className="header__playBtn" type="button">
              <span className="header__playIcon" />
            </button>
            <div className="header__playText">
              <div className="header__playTop">Watch how to create</div>
              <div className="header__playBottom">your website fast!</div>
            </div>
          </div>

          <div className="header__miniNote">
            FREEWROLD helps me showcase my skills as a Web Developer, Digital Marketer, and Promoter — clean, fast, and built to convert.
          </div>
        </div>

        <div className="header__right">
          <div className="header__stack">
            {shots.map((s,idx)=>(
              <img
                key={s.cls}
                className={`shot ${s.cls} ${idx<visibleShots ? "isVisible" : ""}`}
                src={s.src}
                alt={s.alt}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="header__lower">
        <div className="header__lowerInner">
          <div className="header__bigStat">
            <div className="header__bigNumber"><span>130</span><span className="header__plus">+</span></div>
            <div className="header__bigText">
              <div className="header__bigTitle">Full Demo Websites</div>
              <div className="header__bigSub">build successfuly.</div>
            </div>
          </div>

          <div className="header__features">
            {features.map((f)=>(
              <div key={f.title} className="feature">
                <div className={`feature__icon feature__icon--${f.icon}`} />
                <div className="feature__title">{f.title}</div>
                <div className="feature__desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button className="header__floatingBtn">
        <span className="header__floatingDot" />
      </button>
    </header>
  );
};

export default Header;
