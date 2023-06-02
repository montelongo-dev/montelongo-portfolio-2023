import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { getPortfolio } from "../components/utils";


const Portfolio = async () => {
  const portfolioData = await getPortfolio();
  const homeData = portfolioData.home[0]
  const aboutData = portfolioData.about[0]
  const skillsData = portfolioData.skills[0]
  const contactData = portfolioData.contact[0]

  return (
    <div className="portfolio_container">
      <Home homeData={homeData} />
      <About aboutData={aboutData} />
      <Skills skillsData={skillsData} />
      <Contact contactData={contactData} />
    </div>
  );
}

export default Portfolio;
