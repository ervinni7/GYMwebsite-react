import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar bg="white" expand="lg" className="navbar-root">
      <Container fluid className="navbar-container">
        <Navbar.Brand
          className="navbar-logo"
          style={{
            color: "#ff7a00",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          E&apos;s GYM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />

        <Navbar.Collapse id="nav">
          <Nav
            className="navbar-links"
            style={{
              marginLeft: "auto",
              gap: 20,
              fontWeight: 600,
            }}
          >
            <Nav.Link href="#kreu">Kreu</Nav.Link>
            <Nav.Link href="#dietat">Dietat</Nav.Link>
            <Nav.Link href="#pakot">Pakot</Nav.Link>
            <Nav.Link href="#kontakti">Kontakti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
