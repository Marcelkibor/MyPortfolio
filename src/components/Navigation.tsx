import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../App.css'
const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
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
  )
}

export default Navigation
