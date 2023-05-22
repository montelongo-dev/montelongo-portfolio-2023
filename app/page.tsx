import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";


export default function Portfolio() {
  return (
    <div className="portfolio_container">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}