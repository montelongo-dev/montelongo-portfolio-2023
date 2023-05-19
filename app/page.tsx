import Home from "../components/Home";
import About from "../components/About";
import Skills from "@/components/Skills";


export default function Portfolio() {
  return (
    <div className="portfolio_container">
      <Home />
      <About />
      <Skills />
    </div>
  );
}