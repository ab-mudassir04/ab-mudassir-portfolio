import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      name: "Full Stack Java Developer",
      issuer: "NIT Hyderabad - 2025",
      link: "https://drive.google.com/file/d/1LZBAiqSZWd-jc7izw1xL3jMACY4nTWot/view?usp=drivesdk",
    },

    {
      name: "YMIT Fest Participation",
      issuer: "Yeshwant Mahavidyalaya Nanded - 2024",
      link: "https://drive.google.com/file/d/1_9XKknJ8TtRs6q8lth9VvpBlpxfXV0zj/view?usp=drivesdk",
    },

    {
      name: "Web Development",
      issuer: "Great Learning - 2023",
      link: "https://drive.google.com/file/d/16Nxfy-33y_Ik6NBqaEfZAFGz69P1dC01/view?usp=drivesdk",
    },
  ];

  return (
    <section
      id="certificates"
      className="text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "55px",
        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container className="py-5">
        <h1 className="text-center text-info mb-5">Certificates</h1>

        <Row className="g-4">
          {certificates.map((certificate, index) => (
            <Col lg={4} md={6} key={index}>
              <Card
                className="text-white border-0 shadow-lg h-100"
                style={{
                  background: "rgba(255,255,255,0.06)",

                  backdropFilter: "blur(15px)",

                  WebkitBackdropFilter: "blur(15px)",

                  borderRadius: "25px",

                  border: "1px solid rgba(255,255,255,0.12)",

                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";

                  e.currentTarget.style.boxShadow =
                    "0 0 35px rgba(13,202,240,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";

                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Body className="p-4 d-flex flex-column">
                  <div
                    style={{
                      minHeight: "90px",
                    }}
                  >
                    <h4 className="text-info">
                      <FaCertificate className="me-2" />

                      {certificate.name}
                    </h4>

                    <p className="text-secondary mb-0">{certificate.issuer}</p>
                  </div>

                  <p className="text-secondary mt-4">
                    Professional certification showcasing practical knowledge
                    and technical skills.
                  </p>

                  <Button
                    variant="outline-info"
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-pill mt-auto"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certificates;
