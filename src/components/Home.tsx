import Footer from './Footer'
import LandingPage from './LandingPage'
import PortfolioEntry from './PortfolioEntry'
import MyProjects from './Projects'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import ProjectsEntry from './ProjectsEntry'
const Home = () => {
  return (
    <>
    <Navigation/>
    <section id="home">
      <LandingPage />
    </section>
    <section id="profile">
      <PortfolioEntry />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id='projects'>
      <ProjectsEntry/>
      </section>
      <section>
        <MyProjects/>
      </section>
      <section id ='footer'>
      <Footer/>
      </section>
   
    </>
  )
}
export default Home
