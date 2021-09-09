import "../../index.css"
import { Col, Container, Row } from "react-bootstrap"

const LnFooter = () => (
  <footer className="fluid">
    <Container id="welcome-footer-container">
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
        <Col className="pl-0 mt-5">
          <h6 className="font-weight-bold">Browse LinkedIn</h6>
          <ul className="welcome-footer-ul pl-0">
            <li className="welcome-footer-li">
              <a href="/">Learning</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">Salary</a>
            </li>
            <li>
              <a href="/">Mobile</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </Col>
        <Col className="pl-0 mt-5">
          <h6 className="font-weight-bold">Business Solutions</h6>
          <ul className="welcome-footer-ul pl-0">
            <li className="welcome-footer-li">
              <a href="/">Talent</a>
            </li>
            <li>
              <a href="/">Marketing</a>
            </li>
            <li>
              <a href="/">Sales</a>
            </li>
            <li>
              <a href="/">Learning</a>
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
        <Col className="pl-0 mt-5">
          <h6 className="font-weight-bold">Directories</h6>
          <ul className="welcome-footer-ul pl-0">
            <li className="welcome-footer-li">
              <a href="/">Members</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">Companies</a>
            </li>
            <li>
              <a href="/">Salaries</a>
            </li>
            <li>
              <a href="/">Featured</a>
            </li>
            <li>
              <a href="/">Learning</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Schools</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">News Letters</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Interview Prep</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)
export default LnFooter
