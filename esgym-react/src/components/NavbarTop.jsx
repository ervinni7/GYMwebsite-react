import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container fluid className="px-4">
        <Navbar.Brand className="fw-bold" style={{ color: "#ff7a00", fontSize: 30}}>
          E&apos;s GYM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav className="gap-3 fw-semibold">
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
