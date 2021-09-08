import { Container, Navbar, Button } from "react-bootstrap"
import "../../index.css"

const LnNavbar = () => (
  <Container className="px-0">
    <Navbar bg="transparent" className="px-2 pt-2 pb-3">
      <Navbar.Brand href="#home">
        <img
          alt="LinkedIn logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
          width="120"
          height="60rem"
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
