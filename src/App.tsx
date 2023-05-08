import './App.css'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyProfile from './components/MyProfile'
import MyProjects from './components/MyProjects'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './components/Portfolio'
function App() {

  return (
    <Router>
      <Routes>
        <Route element = {<Home/>} path = "/"/>
        <Route element = {<MyProfile/>} path = "/profile"/>
        <Route element = {<MyProjects/>} path = "/projects"/>
        <Route element = {<Portfolio/>} path = "/portfolio"/>
      </Routes>
    </Router>
  )
}

export default App
