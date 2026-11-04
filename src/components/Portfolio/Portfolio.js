import React,{useMemo,useState} from "react";
import "./Portfolio.css";
import {Link} from "react-router-dom";

import portfolio from "../../data/portfolio";
import services from "../../data/services";
import Lightbox from "./Lightbox";

const Portfolio=()=>{
  const [filter,setFilter]=useState("all");
  const [active,setActive]=useState(null);

  const filters=useMemo(()=>{
    const used=new Set(portfolio.flatMap((p)=>p.services));
    return services.filter((s)=>used.has(s.slug));
  },[]);

  const items=filter==="all" ? portfolio : portfolio.filter((p)=>p.services.includes(filter));

  return (
    <section className="pf" id="portfolio">
      <div className="pf__wrap">
        <div className="pf__top">
          <span className="pf__kicker">PORTFOLIO</span>
          <h2 className="pf__title">Past Work</h2>
          <p className="pf__lead">A selection of websites and launches I've built. Tap any project for details.</p>
        </div>

        <div className="pf__filters" role="tablist" aria-label="Filter projects">
          <button type="button" role="tab" aria-selected={filter==="all"} className={`pf__chip ${filter==="all"?"is-active":""}`} onClick={()=>setFilter("all")}>All</button>
          {filters.map((s)=>(
            <button
              type="button"
              role="tab"
              key={s.slug}
              aria-selected={filter===s.slug}
              className={`pf__chip ${filter===s.slug?"is-active":""}`}
              onClick={()=>setFilter(s.slug)}
            >
              {s.short}
            </button>
          ))}
        </div>

        <div className="pf__grid">
          {items.map((p)=>(
            <article className="pf__item" key={p.id}>
              <button type="button" className="pf__imgBtn" onClick={()=>setActive(p)} aria-label={`View ${p.title}`}>
                <img className="pf__img" src={p.image} alt={`${p.title}: ${p.category}`} loading="lazy" />
              </button>
              <div className="pf__body">
                <span className="pf__cat">{p.category}</span>
                <h3 className="pf__name">{p.title}</h3>
                <p className="pf__text">{p.summary}</p>
                <div className="pf__tags">
                  {p.services.map((slug)=>{
                    const s=services.find((x)=>x.slug===slug);
                    return s ? <Link key={slug} className="pf__tag" to={`/services/${slug}`}>{s.short}</Link> : null;
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox project={active} onClose={()=>setActive(null)} />
    </section>
  );
};

export default Portfolio;
