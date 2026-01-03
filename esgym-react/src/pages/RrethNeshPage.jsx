import { Container } from "react-bootstrap";
import NavbarTop from "../components/NavbarTop";
import AboutSection from "../components/AboutSection";
import HoursBar from "../components/HoursBar";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export default function RrethNeshPage() {
  return (
    <div
      className="page-root"
      style={{
        backgroundColor: "#f6f6f6",
        minHeight: "100vh",
      }}
    >
      <NavbarTop />

      <Container
        className="page-container"
        style={{
          maxWidth: 980,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <div
          className="page-card"
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            padding: 24,
          }}
        >
          <AboutSection />
          <HoursBar />
          <ContactCard />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
