import React,{useEffect} from "react";
import "./Portfolio.css";

const Lightbox=({project,onClose})=>{
  useEffect(()=>{
    if(!project) return undefined;
    const onKey=(e)=>{if(e.key==="Escape") onClose();};
    const prev=document.body.style.overflow;
    document.body.style.overflow="hidden";
    window.addEventListener("keydown",onKey);
    return ()=>{
      document.body.style.overflow=prev;
      window.removeEventListener("keydown",onKey);
    };
  },[project,onClose]);

  if(!project) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="lb__backdrop" onClick={onClose} />
      <div className="lb__card">
        <button className="lb__close" type="button" aria-label="Close" onClick={onClose}>×</button>
        {project.before ? (
          <div className="lb__compare">
            <figure className="lb__fig">
              <figcaption className="lb__badge lb__badge--before">BEFORE</figcaption>
              <img className="lb__img" src={project.before} alt={`${project.title} before`} />
            </figure>
            <figure className="lb__fig">
              <figcaption className="lb__badge lb__badge--after">AFTER</figcaption>
              <img className="lb__img" src={project.image} alt={`${project.title} after`} />
            </figure>
          </div>
        ) : (
          <img className="lb__img" src={project.image} alt={`${project.title}: ${project.category}`} />
        )}
        <div className="lb__body">
          <span className="lb__cat">{project.category}</span>
          <h3 className="lb__title">{project.title}</h3>
          {project.stat ? <p className="lb__stat">{project.stat}</p> : null}
          <p className="lb__text">{project.summary}</p>
          <ul className="lb__list">
            {project.highlights.map((h)=>(<li key={h}>{h}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
