import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../App.css'
const Navigation = ({isScrolled}: any) => {
  return (
    <div className='navigation'>
    <Navbar>
    <Container>
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
      {/* link icons */}
      <div className='social-icons'>
      <Nav>
        <FaGithub size = {25}/>
        <FaTwitter size = {25}/>
        <FaLinkedin size = {25}/>
      </Nav>
      </div>
    </Container>
  </Navbar>
    
    </div>
    
  )
}

export default Navigation
