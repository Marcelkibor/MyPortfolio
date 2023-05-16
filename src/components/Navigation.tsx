import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../App.css'
import { useEffect, useState } from 'react';
const Navigation = () => {
const[scrolled,isScrolled] = useState(false);
const [scrollIndex,setScrollIndex] = useState(window.screenY);
useEffect(()=>{
  const handleScroll = ()=>{
    setScrollIndex(window.scrollY);
  }
  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[]);
useEffect(()=>{
  if(scrollIndex > 50){
  isScrolled(true);
  }
  else{
  isScrolled(false);
  }
},[scrollIndex]);
return (
<div className={scrolled ? 'navigation-active': 'navigation-inactive'}>
  <Navbar>
    <Container>
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
  <div className='social-icons'>
<Nav>
  <Nav.Link href = 'https://github.com/Marcelkibor'>
    <FaGithub size = {25}/>
      </Nav.Link>
      <Nav.Link href = 'https://twitter.com/servingViolence'>
        <FaTwitter size = {25}/>
          </Nav.Link>
        <Nav.Link href = 'https://www.linkedin.com/in/marcel-kibor-843913168/'>
      <FaLinkedin size = {25}/>
    </Nav.Link>
  </Nav>
</div>
  </Container>
   </Navbar>
    </div> 
  )
} 
export default Navigation
