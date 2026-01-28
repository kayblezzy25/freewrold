import React,{useEffect,useMemo,useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import logo from "../../assets/images/logo.png";

import headerVideo from "../../assets/video/Website_Build_Video_Generation.mp4";

const Header=()=>{
  const navLinks=[
    {label:"Home",href:"#home"},
    {label:"Services",href:"#services"},
    {label:"About",href:"#about"},
    {label:"Contact",to:"/contact"},
  ];

  const features=[
    {title:"Pre-built full websites",desc:"Save time with ready-to-use sections you can customize fast for your personal brand.",icon:"hex"},
    {title:"Live website builder",desc:"Make changes and preview instantly, keeping your workflow smooth and professional.",icon:"card"},
    {title:"Super fast performance",desc:"Built for speed, clean UI, and modern structure that looks great on every device.",icon:"speed"},
    {title:"Lifetime free updates",desc:"Keep improving your site with fresh sections and updates as your brand grows.",icon:"update"},
  ];

  const shots=useMemo(()=>([
    {src:hero1,alt:"preview 1",cls:"shot--1"},
    {src:hero2,alt:"preview 2",cls:"shot--2"},
    {src:hero3,alt:"preview 3",cls:"shot--3"},
    {src:hero4,alt:"preview 4",cls:"shot--4"},
  ]),[]);

  // contact urls
  const telegramUsername="exmickey";
  const whatsappNumber="2347066491271"; // no +, no spaces
  const telegramUrl=`https://t.me/${telegramUsername}`;
  const whatsappUrl=`https://wa.me/${whatsappNumber}`;

  // mobile menu
  const [menuOpen,setMenuOpen]=useState(false);

  // video modal
  const [videoOpen,setVideoOpen]=useState(false);

  // video playing state (for pulsing background)
  const [videoPlaying,setVideoPlaying]=useState(false);

  // floating chat visibility (based on dark sections in view)
  const [showFloatChat,setShowFloatChat]=useState(false);

  useEffect(()=>{
    const targets=[...document.querySelectorAll("[data-floatchat='dark']")];

    if(!targets.length){
      setShowFloatChat(false);
      return;
    }

    const io=new IntersectionObserver((entries)=>{
      const anyDarkVisible=entries.some((e)=>e.isIntersecting && e.intersectionRatio>=0.25);
      setShowFloatChat(anyDarkVisible);
    },{threshold:[0,0.25,0.5,0.75,1]});

    targets.forEach((el)=>io.observe(el));

    return ()=>{
      io.disconnect();
    };
  },[]);

  // lock body scroll when menu or video is open
  useEffect(()=>{
    if(!menuOpen && !videoOpen) return;
    const prev=document.body.style.overflow;
    document.body.style.overflow="hidden";
    return ()=>{
      document.body.style.overflow=prev;
    };
  },[menuOpen,videoOpen]);

  // close menu with ESC
  useEffect(()=>{
    if(!menuOpen) return;

    const onKeyDown=(e)=>{
      if(e.key==="Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown",onKeyDown);
    return ()=>{
      window.removeEventListener("keydown",onKeyDown);
    };
  },[menuOpen]);

  // close video with ESC
  useEffect(()=>{
    if(!videoOpen) return;

    const onKeyDown=(e)=>{
      if(e.key==="Escape") closeVideo();
    };

    window.addEventListener("keydown",onKeyDown);
    return ()=>{
      window.removeEventListener("keydown",onKeyDown);
    };
  },[videoOpen]);

  const closeMenu=()=>{
    setMenuOpen(false);
  };

  const openVideo=()=>{
    setVideoOpen(true);
  };

  const closeVideo=()=>{
    setVideoPlaying(false);
    setVideoOpen(false);
  };

  // 1) Images: pop in one after the other
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
    <header className={`header ${menuOpen?"isMenuOpen":""}`} id="home" data-floatchat="dark">
      <div className="header__bgShapes" aria-hidden="true">
        <span className="shape shape--a" />
        <span className="shape shape--b" />
      </div>

      <div className="header__topbar">
        <a className="header__brand" href="#home" onClick={closeMenu}>
          <img className="header__logo" src={logo} alt="FREEWROLD logo" />
          <div className="header__brandText">
            <div className="header__brandName">FREEWROLD</div>
            <div className="header__brandTag">Web Dev • Digital Marketing • Promotion</div>
          </div>
        </a>

        <nav className="header__nav">
          {navLinks.map((link)=>(
            link.to ? (
              <Link key={link.label} to={link.to} className="nav__link">
                {link.label}
              </Link>
            ):(
              <a key={link.label} href={link.href} className="nav__link">
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__btn header__btn--ghost" href="#portfolio">View Work</a>
          <a className="header__btn header__btn--solid" href={telegramUrl} target="_blank" rel="noreferrer">
            Hire Me
          </a>
        </div>

        {/* burger (shows on <=980px via CSS) */}
        <button
          className={`header__burger ${menuOpen?"isOpen":""}`}
          type="button"
          aria-label={menuOpen?"Close menu":"Open menu"}
          aria-expanded={menuOpen}
          onClick={()=>setMenuOpen((v)=>!v)}
        >
          <span className="header__burgerLines">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* overlay + drawer */}
      <div
        className="header__mobileOverlay"
        role="button"
        tabIndex={0}
        aria-label="Close menu"
        onClick={closeMenu}
        onKeyDown={(e)=>{if(e.key==="Enter") closeMenu();}}
      />

      <aside className="header__mobileDrawer" aria-label="Mobile menu">
        <div className="header__mobileTop">
          <div className="header__mobileTitle">Menu</div>

          <button
            className={`header__burger ${menuOpen?"isOpen":""}`}
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span className="header__burgerLines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav className="header__mobileLinks">
          {navLinks.map((link)=>(
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="header__mobileLink"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ):(
              <a
                key={link.label}
                href={link.href}
                className="header__mobileLink"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="header__mobileActions">
          <a className="header__mobileBtn header__mobileBtn--ghost" href="#portfolio" onClick={closeMenu}>
            View Work
          </a>
          <a
            className="header__mobileBtn header__mobileBtn--solid"
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      </aside>

      <div className="header__hero">
        <div className="header__left">
          <div className={`header__kicker ${showCaret && typingStage==="kicker" ? "isTyping" : ""}`}>
            {typedKicker}
          </div>

          <h1 className={`header__title ${showCaret && (typingStage==="title" || typingStage==="pause") ? "isTyping" : ""}`}>
            {renderTypedTitle()}
          </h1>

          <div className="header__playRow">
            <button className="header__playBtn" type="button" onClick={openVideo} aria-label="Play video">
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

      {/* FLOATING CHAT ICONS */}
      <div className={`header__floatStack ${showFloatChat?"isVisible":""}`} aria-label="Quick chat">
        <a
          className="header__floatBtn header__floatBtn--whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <span className="header__floatIcon header__floatIcon--whatsapp" aria-hidden="true" />
        </a>

        <a
          className="header__floatBtn header__floatBtn--telegram"
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Message on Telegram"
          title="Telegram"
        >
          <span className="header__floatIcon header__floatIcon--telegram" aria-hidden="true" />
        </a>
      </div>

      {/* VIDEO MODAL */}
      {videoOpen ? (
        <div className={`header__videoModal ${videoPlaying?"isPlaying":""}`} role="dialog" aria-modal="true" aria-label="Website build video">
          <div
            className="header__videoBackdrop"
            role="button"
            tabIndex={0}
            aria-label="Close video"
            onClick={closeVideo}
            onKeyDown={(e)=>{if(e.key==="Enter") closeVideo();}}
          />

          <div className="header__videoCard">
            <button className="header__videoClose" type="button" aria-label="Close" onClick={closeVideo}>
              <span />
              <span />
            </button>

            <div className="header__videoFrame">
              <video
                className="header__video"
                src={headerVideo}
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onPlay={()=>setVideoPlaying(true)}
                onPause={()=>setVideoPlaying(false)}
                onEnded={()=>setVideoPlaying(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
