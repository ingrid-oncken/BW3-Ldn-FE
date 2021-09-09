import "../index.css"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import LnCopyright from "./Footer/LnCopyright"

const LnJoinNow = () => (
  <>
    <Container fluid style={{ backgroundColor: "#f3f2ef" }} className="pb-4">
      <Container>
        <Row className="justify-content-center row-cols-lg-1">
          <img
            alt="LinkedIn logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            height="35rem"
            className="mt-4"
          />
          <h1 id="joinnow-h1-topo" className="my-3 display-4">
            Make the most of your professional life
          </h1>
        </Row>
        <Row className="justify-content-center row-cols-lg-3">
          <Form id="joinnow-form" className="rounded-lg p-3">
            <Form.Group
              controlId="formBasicEmail"
              className="text-left text-muted"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" className="border border-secondary" />
            </Form.Group>
            <Form.Group
              controlId="formBasicPassword"
              className="text-left text-muted"
            >
              <Form.Label>Password (6 or more characters)</Form.Label>
              <Form.Control
                type="password"
                className="border border-secondary"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              <span>
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <a
                  target="_blank"
                  class="font-weight-bold"
                  href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
                >
                  User Agreement
                </a>
                ,{" "}
                <a
                  target="_blank"
                  class="font-weight-bold"
                  href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
                >
                  Privacy Policy
                </a>
                , and{" "}
                <a
                  target="_blank"
                  class="font-weight-bold"
                  href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy"
                >
                  Cookie Policy
                </a>
                .{" "}
              </span>
            </Form.Text>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
              Submit
            </Button>

            <Col className="my-2">
              <span className="text-dark">or</span>
            </Col>

            <Button variant="outline-primary" type="submit" size="lg" block>
              <img
                alt="login with google"
                height="25rem"
                src="https://madeby.google.com/static/images/google_g_logo.svg"
              />{" "}
              Join with Google
            </Button>
            <p class="mt-3">
              Already on LinkedIn?{" "}
              <a href="https://www.linkedin.com/uas/login?fromSignIn=true&amp;trk=cold_join_sign_in">
                Sign in
              </a>
            </p>
          </Form>
        </Row>
      </Container>
    </Container>
    <LnCopyright />
  </>
)
export default LnJoinNow
