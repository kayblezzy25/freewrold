import React from "react";
import "./ServiceVisual.css";

// Shows the service video when one exists; otherwise a branded graphic panel
// built from the service title and tags (until a real video is added).
const ServiceVisual=({service,className})=>{
  if(service.media){
    return (
      <video
        className={className}
        src={service.media}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <div className={`sv ${className||""}`} aria-hidden="true">
      <span className="sv__glow" />
      <span className="sv__label">FREEWROLD</span>
      <span className="sv__title">{service.title}</span>
      <span className="sv__tags">
        {service.tags.map((t)=>(<span className="sv__tag" key={t}>{t}</span>))}
      </span>
    </div>
  );
};

export default ServiceVisual;
