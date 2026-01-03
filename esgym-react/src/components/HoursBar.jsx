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
    <div
      style={{
        marginTop: 20,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff2df",
      }}
    >
      <Row style={{ alignItems: "center" }}>
        <Col md={8} style={{ fontWeight: 700 }}>
          ORARI I HAPJES:{"   "}
          <span style={{ fontWeight: 600, color: "#6c757d" }}>
              E hënë - E shtunë 06:00 - 00:00
          </span>
        </Col>

        <Col md={4} style={{ textAlign: "right", marginTop: 8 }}>
          <Badge
            bg="none"
            style={{
              padding: "8px 14px",
              borderRadius: 10,
              backgroundColor: "#ff7a00",
              color: "#fff",
              fontSize: 16,
            }}
          >
            ⏱ {time}
          </Badge>
        </Col>
      </Row>
    </div>
  );
}
