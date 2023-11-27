import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button } from "react-bootstrap";
import { IoFootballSharp } from "react-icons/io5";

function FootballNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="bg-success-subtle w-100">
        <Navbar.Brand
          href="#home"
          className="bg-success-subtle rounded-3 px-2 fw-semibold fst-italic"
        >
          <IoFootballSharp className="mb-1 me-1" />
          OneFootball
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-dark ms-3">Home</Nav.Link>
            <Nav.Link className="text-dark ms-3">Link</Nav.Link>
            <NavDropdown title="Catalogo" id="colors" className="ms-3">
              <div id="series">
                <NavDropdown.Item href="#action/3.2">Serie A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Serie B</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Serie C</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Serie D</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Ligue 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Liga</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Premier League
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Bundesliga
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Conference League
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Europa League
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Champions League
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-3 mt-1 mb-1"
            aria-label="Search"
          />
          <Button variant="outline-success" className="mb-1 mt-1">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default FootballNav;
