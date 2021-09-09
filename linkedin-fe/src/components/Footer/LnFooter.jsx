import "../../index.css"
import { Col, Container, Dropdown, Row } from "react-bootstrap"

const LnFooter = () => (
  <footer>
    <div className="footer mt-auto">
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
          <Col className="d-none d-lg-block"></Col>
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
    </div>
    <ul
      id="welcome-footer-ul-horizontal"
      className="container list-group list-group-horizontal-md pr-0 d-flex justify-content-between"
    >
      <li className="list-group-item pl-0 py-0">
        <img
          alt="LinkedIn logo"
          src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-Black-Logo.wine.svg"
          height="50rem"
        />
        <span className="font-weight-lighter pl-2">© 2021</span>
      </li>

      <li className="list-group-item px-2 py-1">
        <a href="/">About</a>
      </li>

      <li className="list-group-item px-2 py-1">
        <a href="/">Acessibility</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">User Agreement</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Privacy Policy</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Cookie Policy</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Copyright Policy</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Brand Policy</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Guest Controls</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <a href="/">Community Guidelines</a>
      </li>
      <li className="list-group-item px-2 py-1">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Language
            <icon className="pl-2" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                preserveAspectRatio="xMinYMin meet"
                focusable="false"
              >
                <path
                  d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                  fill="currentColor"
                ></path>
              </svg>
            </icon>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English(English)</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Portuguese(Brazil)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bangla(Bangladesh)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Armenia(Armenian)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  </footer>
)
export default LnFooter
