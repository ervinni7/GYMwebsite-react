import { Card, Row, Col } from "react-bootstrap";
import foto1 from "../assets/rrethnesh.png";
import foto2 from "../assets/ourmission.png";
import foto3 from "../assets/pajisjemoderne.png";

export default function AboutSection() {
  return (
    <>
      {/* Header */}
      <div
        className="about-header"
        style={{
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div
          className="about-quote"
          style={{
            maxWidth: 520,
            margin: "0 auto",
            padding: "10px 14px",
            borderRadius: 12,
            backgroundColor: "#ff8a1e",
            color: "#fff",
            fontStyle: "italic",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          ✨ “Suksesi fillon me vendimin për të provuar.”
        </div>

        <h1
          className="about-title"
          style={{
            marginTop: 24,
            fontWeight: 700,
            color: "#ff7a00",
          }}
        >
          Rreth nesh
        </h1>

        <div
          className="about-subtitle"
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#6c757d",
          }}
        >
          Performancë. Vetëbesim.
        </div>

        <div
          className="about-note"
          style={{
            marginTop: 8,
            fontWeight: 600,
            color: "#ff7a00",
          }}
        >
          😴 Ç&apos;ke ngel? Gjumi është i rëndësishëm!
        </div>

        <hr
          style={{
            marginTop: 24,
            border: "none",
            height: 2,
            backgroundColor: "#ff7a00",
          }}
        />
      </div>

      {/* Sections */}
      <Row style={{ rowGap: 24 }}>
        {/* 1 */}
        <Col md={12}>
          <Card style={{ border: "none" }}>
            <Row style={{ alignItems: "center" }}>
              <Col md={5}>
                <img
                  src={foto1}
                  alt="Gym"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                  }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 style={{ fontWeight: 700 }}>
                    Me shumë rreth nesh
                  </h3>
                  <p style={{ color: "#6c757d", marginBottom: 0 }}>
                    Në gym-in tonë, shëndeti dhe forca shkojnë bashkë. Prej vitit
                    2018 kemi qenë zgjedhja e mijëra personave që kërkojnë
                    rezultate të qëndrueshme. Trajnerë të certifikuar, ambient i
                    pastër dhe programe të personalizuara.
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 2 */}
        <Col md={12}>
          <Card style={{ border: "none" }}>
            <Row style={{ alignItems: "center" }}>
              <Col md={5}>
                <img
                  src={foto2}
                  alt="Mission"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                  }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 style={{ fontWeight: 700 }}>
                    Misioni ynë
                  </h3>
                  <p style={{ color: "#6c757d", marginBottom: 0 }}>
                    Duke ofruar programe të personalizuara dhe trajnerë ekspertë,
                    synojmë të ndihmojmë çdo anëtar të arrijë formën më të mirë
                    dhe disiplinën që zgjat.
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 3 */}
        <Col md={12}>
          <Card style={{ border: "none" }}>
            <Row style={{ alignItems: "center" }}>
              <Col md={5}>
                <img
                  src={foto3}
                  alt="Equipment"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                  }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 style={{ fontWeight: 700 }}>
                    Pajisje moderne
                  </h3>
                  <p style={{ color: "#6c757d", marginBottom: 0 }}>
                    Pajisjet moderne sigurojnë stërvitje më efikase, të sigurt
                    dhe komode, duke ofruar teknologji të avancuar dhe rezultate
                    më të mira në çdo ushtrim.
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
