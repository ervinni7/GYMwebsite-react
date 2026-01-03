import { Container } from "react-bootstrap";
import NavbarTop from "../components/NavbarTop";
import AboutSection from "../components/AboutSection";
import HoursBar from "../components/HoursBar";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export default function RrethNeshPage() {
  return (
    <div style={{ background: "#f6f6f6", minHeight: "100vh" }}>
      <NavbarTop />

      <Container className="py-4" style={{ maxWidth: 980 }}>
        <div className="bg-white rounded-4 shadow-sm p-4">
          <AboutSection />
          <HoursBar />
          <ContactCard />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
