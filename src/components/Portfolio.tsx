import { Card, Row, Col } from "react-bootstrap"

const Portfolio = ()=>{
    return (
        <>
        <div className="portfolio" >
        <h5 style={{margin:'3%',color:'white', textAlign:'center'}}>Portfolio</h5>
        <div className="portfolio-cards" >
            <Row>
            <Col>
            <Card className="cards">
                <Card.Title  className="card-title">Poster Design</Card.Title>
                <Card.Body>
                    <Card.Text  className="card-text">
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="cards">
                <Card.Title  className="card-title">Full Stack Development</Card.Title>
                <Card.Body>
                    <Card.Text  className="card-text">
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="cards">
                <Card.Title  className="card-title">Game Development</Card.Title>
                <Card.Body>
                    <Card.Text  className="card-text">
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>    
            </Row>
            <Row>
            <Col>
            <Card className="cards">
                <Card.Title  className="card-title">Background Services</Card.Title>
                <Card.Body>
                    <Card.Text  className="card-text">
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>  
            <Col>
            <Card className="cards">
                <Card.Title  className="card-title">Services</Card.Title>
                <Card.Body>
                    <Card.Text  className="card-text" >
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
                    </Card.Text>
                </Card.Body>
            </Card >
            </Col>  
            <Col>
            <Card className="cards">
                <Card.Title className="card-title">Console Applications</Card.Title>
                <Card.Body>
                    <Card.Text className="card-text">
                    My posters capture attention with bold graphics, punchy text and on-brand visuals.
  
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>    
            </Row>
        </div>    
        </div>
          
        </>
  
        
    )
}
export default Portfolio
