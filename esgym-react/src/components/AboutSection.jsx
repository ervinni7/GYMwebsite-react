import { Card, Row, Col } from "react-bootstrap";
import foto1 from "../assets/rrethnesh.png";
import foto2 from "../assets/ourmission.png";
import foto3 from "../assets/pajisjemoderne.png";

export default function AboutSection() {
  return (
    <>
      <div className="text-center mb-4">
        <div
          className="mx-auto px-3 py-2 rounded-3 shadow-sm"
          style={{
            maxWidth: 520,
            background: "#ff8a1e",
            color: "white",
            fontStyle: "italic",
          }}
        >
          ✨ “Suksesi fillon me vendimin për të provuar.”
        </div>

        <h1 className="mt-4 fw-bold" style={{ color: "#ff7a00" }}>
          Rreth nesh
        </h1>

        <div className="fw-semibold text-uppercase text-secondary">
          Performancë. Vetëbesim.
        </div>

        <div className="mt-2 fw-semibold" style={{ color: "#ff7a00" }}>
          😴 Ç&apos;ke ngel? Gjumi është i rëndësishëm!
        </div>

        <hr className="mt-4" style={{ borderTop: "2px solid #ff7a00" }} />
      </div>

      <Row className="g-4">
        {/* 1 */}
        <Col md={12}>
          <Card className="border-0">
            <Row className="g-0 align-items-center">
              <Col md={5}>
                <img
                src={foto1}
                className="img-fluid rounded-3"
                alt="Gym"
                />

              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 className="fw-bold">Me shumë rreth nesh</h3>
                  <p className="text-muted mb-0">
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
          <Card className="border-0">
            <Row className="g-0 align-items-center">
              <Col md={5}>
                <img
                src={foto2}
                className="img-fluid rounded-3"
                alt="Gym"
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 className="fw-bold">Misioni ynë</h3>
                  <p className="text-muted mb-0">
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
          <Card className="border-0">
            <Row className="g-0 align-items-center">
              <Col md={5}>
                <img
                src={foto3}
                className="img-fluid rounded-3"
                alt="Gym"
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h3 className="fw-bold">Pajisje moderne</h3>
                  <p className="text-muted mb-0">
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
