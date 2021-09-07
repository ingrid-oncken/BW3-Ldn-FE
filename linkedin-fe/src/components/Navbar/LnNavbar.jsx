import { Container, Navbar, Button } from "react-bootstrap"
import LinkdInLogo from "./LI-Logo.png"
import "../../index.css"

const LnNavbar = () => (
  <Container>
    <Navbar bg="transparent">
      <Navbar.Brand href="#home">
        <img
          alt="LinkedIn logo"
          src={LinkdInLogo}
          width="120"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <div>
        <Button id="wp-join-btn" variant="outline-secondary">
          Join now
        </Button>
        <Button id="wp-signin-btn" variant="primary">
          Sign in
        </Button>
      </div>
    </Navbar>
  </Container>
)
export default LnNavbar

//xmlns="http://www.w3.org/2000/svg"
