import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";


interface PortfolioProps {
  home: { name: string; title: string; }[];
}

const Portfolio = async () => {
  const portfolioData = await getPortfolio();

  return (
    <div className="portfolio_container">
      <Home data={portfolioData} />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

const getPortfolio = async (): Promise<PortfolioProps> => {
  const data = await fetch("http://localhost:8000/api/portfolio");
  const portfolioData = await data.json();
  return portfolioData;
};

export default Portfolio;
