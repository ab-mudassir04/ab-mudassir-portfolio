import { Container, Card, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  const glass = {
    background: "rgba(255,255,255,0.06)",

    backdropFilter: "blur(15px)",

    WebkitBackdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.12)",

    borderRadius: "25px",
  };

  return (
    <section
      id="about"
      className="text-white"
      style={{
        minHeight: "100vh",

        paddingTop: "70px",

        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container className="py-5">
        <h1 className="text-center text-info mb-5">About Me</h1>

        <Row className="g-4 align-items-stretch">
          {/* LEFT */}

          <Col lg={6}>
            <div className="d-flex flex-column gap-4 h-100">
              {/* SUMMARY */}

              <Card
                className="border-0 shadow-lg text-white flex-grow-1"
                style={glass}
              >
                <Card.Body className="p-4">
                  <h3 className="text-info mb-4">
                    <FaCode className="me-2" />
                    Professional Summary
                  </h3>

                  <p className="text-secondary">
                    Computer Science graduate and Java Full Stack Developer
                    focused on building modern, responsive and scalable web
                    applications.
                  </p>

                  <div className="mt-4">
                    <p className="text-secondary mb-3">
                      ⚡ React based responsive frontend development
                    </p>

                    <p className="text-secondary mb-3">
                      ⚡ Java & Spring Boot backend development
                    </p>

                    <p className="text-secondary mb-3">
                      ⚡ REST API and database integration
                    </p>

                    <p className="text-secondary mb-0">
                      ⚡ Clean code and problem solving approach
                    </p>
                  </div>
                </Card.Body>
              </Card>

              {/* FOCUS */}

              <Card className="border-0 shadow-lg text-white" style={glass}>
                <Card.Body className="p-4">
                  <h5 className="text-info">
                    <FaLaptopCode className="me-2" />
                    Current Focus
                  </h5>

                  <p className="text-secondary mb-0">
                    Full Stack Development, AWS Cloud and DevOps practices.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* RIGHT */}

          <Col lg={6}>
            <Card className="border-0 shadow-lg text-white h-100" style={glass}>
              <Card.Body className="p-4">
                <h3 className="text-info mb-4">
                  <FaGraduationCap className="me-2" />
                  Education
                </h3>

                {[
                  {
                    title: "Bachelor of Science - Computer Science",
                    text: "Yeshwant Mahavidyalaya Nanded\n2025 | CGPA: 8.56",
                  },

                  {
                    title: "Higher Secondary Certificate",
                    text: "Moulana Azad Jr. College, Nanded\n2022 | Percentage: 66.50%",
                  },

                  {
                    title: "Secondary School Certificate",
                    text: "Moulana Azad High School, Nanded\n2019 | Percentage: 71.40%",
                  },
                ].map((edu, index) => (
                  <Card
                    key={index}
                    className="border-0 mb-3 text-white"
                    style={{
                      background: "rgba(255,255,255,0.05)",

                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Card.Body>
                      <h6 className="text-info">{edu.title}</h6>

                      <p
                        className="text-secondary mb-0"
                        style={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {edu.text}
                      </p>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
