import LandingPage from './LandingPage'
import MyProfile from './MyProfile'
import MyProjects from './MyProjects'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
const Home = () => {
  return (
    <div>
      <Navigation/>
      <LandingPage/>
      <MyProfile/>
      <Portfolio/>
      <MyProjects/>
    </div>
  )
}
export default Home
