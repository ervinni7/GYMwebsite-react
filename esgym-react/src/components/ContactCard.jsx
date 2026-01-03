import { Button, Card } from "react-bootstrap";

export default function ContactCard() {
  return (
    <Card className="mt-4 border-0 shadow-sm rounded-4">
      <Card.Body className="p-4">
        <h4 className="fw-bold">NA KONTAKTONI</h4>
        <p className="text-muted">
          Për bashkëpunime dhe informata shtesë na kontaktoni:
        </p>

        <Button
          style={{ background: "#ff7a00", border: "none" }}
          className="px-4 py-2 fw-semibold"
        >
          Na kontakto
        </Button>
      </Card.Body>
    </Card>
  );
}
