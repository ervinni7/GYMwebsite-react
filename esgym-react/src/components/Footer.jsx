import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-5" style={{ background: "#111", color: "#fff" }}>
      {/* Email bar */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <Container className="py-4" style={{ maxWidth: 1100 }}>
          <Row className="align-items-center g-3">
            <Col md={6}>
              <div className="fw-bold" style={{ color: "#ff7a00", fontSize: 20 }}>
                📩 MOS I HUMBISNI OFERTAT!
              </div>
              <div className="text-white-50">
                Regjistrohuni me email për të marrë njoftime për pakot dhe zbritjet e reja.
              </div>
            </Col>

            <Col md={6}>
              <div className="d-flex gap-2 justify-content-md-end">
                <Form.Control
                  placeholder="Shkruani emailin tuaj..."
                  className="rounded-pill"
                  style={{
                    maxWidth: 320,
                    background: "#000",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                />
                <Button
                  className="rounded-pill fw-bold px-4"
                  style={{ background: "#ff7a00", border: "none" }}
                >
                  REGJISTROHU
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom */}
      <Container className="py-5" style={{ maxWidth: 1100 }}>
        <Row className="g-4">
          <Col md={4}>
           <img
            src={logo}
            alt="E's GYM logo"
            style={{ height: 170 }}
            />

          </Col>

          <Col md={4}>
            <div className="fw-bold mb-3" style={{ color: "#ff7a00" }}>
              ORARI:
            </div>
            <div className="fw-semibold">Hënë - E Premte:</div>
            <div className="text-white-50 mb-2">06:00 - 22:00</div>
            <div className="fw-semibold">E Shtunë:</div>
            <div className="text-white-50 mb-2">08:00 - 20:00</div>
            <div className="fw-semibold">E Diele:</div>
            <div className="text-white-50">10:00 - 18:00</div>
          </Col>

          <Col md={2}>
            <div className="fw-bold mb-3" style={{ color: "#ff7a00" }}>
              NAVIGIMI:
            </div>
            <div className="text-white-50">Kreu</div>
            <div className="text-white-50">Pakot</div>
            <div className="text-white-50">Dietat</div>
            <div className="text-white-50">Kontakti</div>
          </Col>

          <Col md={2}>
            <div className="fw-bold mb-3" style={{ color: "#ff7a00" }}>
              NA KONTAKTONI:
            </div>
            <div className="text-white-50">📍 Rruga B</div>
            <div className="text-white-50">📍 Fakulteti Teknik</div>
            <div className="text-white-50">📍 Albi Mall</div>
            <div className="text-white-50">📞 +383 45 123 456</div>
          </Col>
        </Row>

        <div
          className="text-center pt-4 mt-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          © 2025 E&apos;s GYM. Të gjitha të drejtat e rezervuara.
        </div>
      </Container>
    </footer>
  );
}
