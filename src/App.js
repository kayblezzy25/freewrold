import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Home=()=>{
  return(
    <>
      <Header />
      <About />
      <Service />
      <Footer />
    </>
  );
};

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
