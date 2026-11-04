import "./App.css";
import {useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Navigate,useLocation} from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import ServiceDetail from "./components/Service/ServiceDetail";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Scroll to #section when navigating to links like "/#services" from another page.
const ScrollToHash=()=>{
  const {pathname,hash}=useLocation();

  useEffect(()=>{
    if(!hash){
      return;
    }
    const t=setTimeout(()=>{
      const el=document.getElementById(hash.slice(1));
      if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
    },60);
    return ()=>clearTimeout(t);
  },[pathname,hash]);

  return null;
};

const Home=()=>{
  return(
    <>
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Footer />
    </>
  );
};

const App=()=>{
  return(
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
