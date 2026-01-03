import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      className="footer-root"
      style={{
        marginTop: 40,
        backgroundColor: "#111",
        color: "#fff",
        width: "100%",
      }}
    >
      {/* Email bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Container style={{ maxWidth: 1100, paddingTop: 22, paddingBottom: 22 }}>
          <Row style={{ alignItems: "center", rowGap: 14 }}>
            <Col md={6}>
              <div
                style={{
                  fontWeight: 700,
                  color: "#ff7a00",
                  fontSize: 20,
                  marginBottom: 6,
                }}
              >
                📩 MOS I HUMBISNI OFERTAT!
              </div>
              <div style={{ color: "rgba(255,255,255,0.65)" }}>
                Regjistrohuni me email për të marrë njoftime për pakot dhe zbritjet e reja.
              </div>
            </Col>

            <Col md={6}>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Control
                  placeholder="Shkruani emailin tuaj..."
                  style={{
                    width: 320,
                    maxWidth: "100%",
                    borderRadius: 999,
                    backgroundColor: "#000",
                    border: "1px solid #333",
                    color: "#fff",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                />
                <Button
                  style={{
                    borderRadius: 999,
                    backgroundColor: "#ff7a00",
                    border: "none",
                    padding: "10px 22px",
                    fontWeight: 700,
                  }}
                >
                  REGJISTROHU
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom */}
      <Container style={{ maxWidth: 1100, paddingTop: 40, paddingBottom: 40 }}>
        <Row style={{ rowGap: 22 }}>
          {/* Logo */}
          <Col md={4}>
            <img
              src={logo}
              alt="E's GYM logo"
              style={{
                height: 170,
                maxWidth: "100%",
                display: "block",
              }}
            />
          </Col>

          {/* Orari */}
          <Col md={4}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: "#ff7a00" }}>
              ORARI:
            </div>

            <div style={{ fontWeight: 600 }}>Hënë - E Premte:</div>
            <div style={{ color: "rgba(255,255,255,0.65)", marginBottom: 8 }}>
              06:00 - 22:00
            </div>

            <div style={{ fontWeight: 600 }}>E Shtunë:</div>
            <div style={{ color: "rgba(255,255,255,0.65)", marginBottom: 8 }}>
              08:00 - 20:00
            </div>

            <div style={{ fontWeight: 600 }}>E Diele:</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>
              10:00 - 18:00
            </div>
          </Col>

          {/* Navigimi */}
          <Col md={2}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: "#ff7a00" }}>
              NAVIGIMI:
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>Kreu</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>Pakot</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>Dietat</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>Kontakti</div>
          </Col>

          {/* Kontakti */}
          <Col md={2}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: "#ff7a00" }}>
              NA KONTAKTONI:
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>📍 Rruga B</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>📍 Fakulteti Teknik</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>📍 Albi Mall</div>
            <div style={{ color: "rgba(255,255,255,0.65)" }}>📞 +383 45 123 456</div>
          </Col>
        </Row>

        {/* Copyright */}
        <div
          style={{
            marginTop: 26,
            paddingTop: 18,
            textAlign: "center",
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
