import "../../index.css"
import { Col, Container, Row } from "react-bootstrap"

const LnFooter = () => (
  <Container id="welcome-footer-container" className="fluid">
    <Row className="text-left">
      <Col className="col-auto pl-0 mt-5">
        <img
          alt="LinkedIn logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
          height="20rem"
          className="d-inline-block align-self-start"
        />
      </Col>
      <Col></Col>
      <Col className="pl-0 mt-5">
        <h6 className="font-weight-bold">General</h6>
        <ul className="welcome-footer-ul pl-0">
          <li className="welcome-footer-li">
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Developers</a>
          </li>
        </ul>
      </Col>

      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
  </Container>
)
export default LnFooter
