import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "abmudassir04",
        "template_cdxfmh4",
        form.current,
        "htfr0QtHSESzMuchA",
      )

      .then(() => {
        setStatus("Message sent successfully 🚀");

        form.current.reset();
      })

      .catch(() => {
        setStatus("Failed to send message ❌");
      })

      .finally(() => {
        setLoading(false);
      });
  };

  const glassCard = {
    background: "rgba(255,255,255,0.06)",

    backdropFilter: "blur(15px)",

    WebkitBackdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.12)",

    borderRadius: "25px",
  };

  return (
    <section
      id="contact"
      className="text-white"
      style={{
        minHeight: "100vh",

        paddingTop: "70px",

        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="text-info fw-bold">Contact Me</h1>

          <p className="text-secondary">
            Let's connect for opportunities and projects
          </p>
        </div>

        <Row className="g-4">
          {/* LEFT */}

          <Col lg={5}>
            <Card
              className="border-0 shadow-lg h-100 text-white"
              style={glassCard}
            >
              <Card.Body className="p-4">
                <h3 className="text-info mb-4">Get In Touch</h3>

                <p className="text-secondary">
                  <FaEnvelope className="text-info me-2" />
                  mudassirabdul84@gmail.com
                </p>

                <p className="text-secondary">
                  <FaPhoneAlt className="text-info me-2" />
                  +91 8237209779
                </p>

                <p className="text-secondary">
                  <FaMapMarkerAlt className="text-info me-2" />
                  India
                </p>

                <hr className="border-secondary" />

                <a
                  href="https://www.linkedin.com/in/ab-mudassir04/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-block text-white text-decoration-none mb-3"
                >
                  <FaLinkedin className="text-info me-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/ab-mudassir04"
                  target="_blank"
                  rel="noreferrer"
                  className="d-block text-white text-decoration-none"
                >
                  <FaGithub className="text-info me-2" />
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* FORM */}

          <Col lg={7}>
            <Card className="border-0 shadow-lg h-100" style={glassCard}>
              <Card.Body className="p-4">
                <h3 className="text-info mb-4">Send Message</h3>

                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Control
                    className="custom-input mb-3"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />

                  <Form.Control
                    className="custom-input mb-3"
                    name="user_email"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />

                  <Form.Control
                    className="custom-input mb-3"
                    name="user_phone"
                    placeholder="Enter phone number"
                  />

                  <Form.Control
                    className="custom-input mb-3"
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Write your message here..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="info"
                    className="rounded-pill px-4 fw-bold"
                    disabled={loading}
                  >
                    <FaPaperPlane className="me-2" />

                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                  {status && <p className="mt-3 text-success">{status}</p>}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
