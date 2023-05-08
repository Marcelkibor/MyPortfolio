import { Col, Row } from "react-bootstrap"

const MyProjects = () => {

  return (
<div className="projects-main-div">
  <div className="mid-line"></div>
    <div className="project-row-div">
<Row className="project-row" >
  <Col>
    <p className="project-header">Q/A Assistant</p>
      </Col>
        <Col className="project-body">
      <p className="project-body-text">An (Vite+ReactJs) internal tool to help QA team in AMPATH automate simple dev on-call tasks</p>
    </Col>
</Row>
  {/* weather app */}
    <Row className="project-row" >
          <Col className="project-body">
          <p className="project-body-text">A (ReactJs) weather application relaying real-time weather data for the 47 counties in Kenya.</p>
        </Col>
        <Col>
      <p className="project-header">Weather App</p>
        </Col>
      </Row>
    {/* service worker */}
  <Row className="project-row">
<Col>
  <p className="project-header">Service Worker</p>
    </Col>
      <Col className="project-body">
        <p className="project-body-text">A (Cross Platform) background service worker for monitoring system environment.</p>
          </Col>  
            </Row>
              {/* amrs integrations */}
                <Row className="project-row">
                 <Col className="project-body"> 
                <p className="project-body-text">A (NodeJs) services supporting integration between different third party APIs and Ampath Medical Record Systems</p>
              </Col>
            <Col>
          <p className="project-header">AMRS Integrations</p>
        </Col>
      </Row>
  {/* vet tracker */}
<Row className="project-row">
<Col>
  <p className="project-header">Vet Doctor Tracker</p>
    </Col>
      <Col className="project-body">
        <p className="project-body-text">An Android-(Java) mobile application that uses location tracking to improve delivery of veterinary services</p>
          </Col>
            </Row>
              {/* * service man tracker */}
        <Row className="project-row">
        <Col className="project-body">
  <p className="project-body-text">An Android-(Kotlin) mobile application that uses location tracking to fast track delivery of household services: eg. Plumbing</p>
    </Col>
      <Col>
    <p className="project-header">Service Man Tracker</p>
  </Col>
      </Row> 
        </div>
</div>
)}
export default MyProjects
