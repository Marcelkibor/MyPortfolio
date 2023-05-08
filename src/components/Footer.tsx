import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCopyright, FaEnvelope, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhone, FaTrademark, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
<div style={{margin:'5% 0% 0% 10%'}}>
 <Row >
  <Col >
    <Card.Body>
      <Card.Title className='footer-title'>More about the developer.</Card.Title>
        <Card.Text style={{maxWidth:'350px', color:'black'}}>
        I offer freelancing services, and have developed over 30 projects with different software. Feel free to reach out through my social media platforms anytime!
      </Card.Text>
    </Card.Body>
  </Col>
<Col>
  <Card.Body>
    <Card.Title  className='footer-title'>Keep Connected</Card.Title>
      <div>
        <FaFacebook className = 'footer-icons'/>
          <FaInstagram className = 'footer-icons'/>
            <FaTwitter className = 'footer-icons'/>
          <FaLinkedin className = 'footer-icons'/>
        </div>
      </Card.Body>
    </Col>
  <Col>
<Card.Body>
  <Card.Title className='footer-title'>Contact Information</Card.Title>
    <div className='contact-div'>
      <FaHome  className = 'footer-icons'/>
        <p className='footer-adr-txt'> 7781,Eldoret</p>
          </div>
            <div className='contact-div'>
          <FaPhone className = 'footer-icons'/>
        <p className='footer-adr-txt'>0759504158</p>
      </div>
    <div className='contact-div'>
  <FaEnvelope className = 'footer-icons'/>
<p className='footer-adr-txt'>kibormarcel90@gmail.com</p>
    </div>
      </Card.Body>
        </Col>
          </Row>
          <div className='copyright'>
        <FaCopyright size = {20}/>&nbsp;
      <p>kibor@2023</p>
  </div>
</div> 
  )
}
export default Footer
