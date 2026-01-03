import { Button, Card } from "react-bootstrap";

export default function ContactCard() {
  return (
    <Card
      className="contactcard-root"
      style={{
        marginTop: 20,
        border: "none",
        borderRadius: 16,
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      }}
    >
      <Card.Body
        className="contactcard-body"
        style={{
          padding: 24,
        }}
      >
        <h4
          className="contactcard-title"
          style={{
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          NA KONTAKTONI
        </h4>

        <p
          className="contactcard-text"
          style={{
            color: "#6c757d",
            marginBottom: 16,
          }}
        >
          Për bashkëpunime dhe informata shtesë na kontaktoni:
        </p>

        <Button
          className="contactcard-button"
          style={{
            backgroundColor: "#ff7a00",
            border: "none",
            padding: "10px 22px",
            fontWeight: 600,
          }}
        >
          Na kontakto
        </Button>
      </Card.Body>
    </Card>
  );
}
