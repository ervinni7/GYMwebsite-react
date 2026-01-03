import { useEffect, useState } from "react";
import { Row, Col, Badge } from "react-bootstrap";

export default function HoursBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-4 rounded-3 p-3" style={{ background: "#fff2df" }}>
      <Row className="align-items-center">
        <Col md={8} className="fw-bold">
          ORARI I HAPJES:{" "}
          <span className="fw-semibold text-secondary">
            E hënë - E shtunë 06:00 - 00:00
          </span>
        </Col>

        <Col md={4} className="text-md-end mt-2 mt-md-0">
          <Badge
            className="px-3 py-2 rounded-3"
            style={{ background: "#ff7a00", fontSize: 16 }}
          >
            ⏱ {time}
          </Badge>
        </Col>
      </Row>
    </div>
  );
}
