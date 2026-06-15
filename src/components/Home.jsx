import { Container, Button, Row, Col, Badge } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload, FaCode } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="text-white"
      style={{
        minHeight: "100vh",

        paddingTop: "70px",

        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container>
        <Row
          className="align-items-center"
          style={{
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {/* LEFT */}

          <Col lg={7}>
            <Badge
              bg="info"
              text="dark"
              className="mb-4 px-3 py-2 rounded-pill"
            >
              Available for Developer Opportunities
            </Badge>

            <h5 className="text-info">Hello, I'm</h5>

            <h1 className="display-2 fw-bold">Abdul Mudassir</h1>

            <h2 className="text-info fw-bold">Java Full Stack Developer</h2>

            <p
              className="lead text-secondary mt-4"
              style={{
                maxWidth: "600px",
              }}
            >
              I build responsive, scalable and secure web applications using
              React, Java, Spring Boot, REST API and MySQL.
            </p>

            <div className="my-4">
              {["Java", "React", "Spring Boot", "MySQL", "Oracle", "AWS"].map(
                (skill) => (
                  <Badge
                    key={skill}
                    bg="dark"
                    className="
                    border border-info
                    rounded-pill
                    px-3 py-2
                    me-2 mb-2
                  "
                  >
                    {skill}
                  </Badge>
                ),
              )}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="info"
                href="/Abdul_Mudassir_AE.pdf"
                download
                className="fw-bold rounded-pill px-4"
              >
                <FaDownload className="me-2" />
                Resume
              </Button>

              <Button
                variant="outline-light"
                href="https://github.com/ab-mudassir04"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill px-4"
              >
                <FaGithub className="me-2" />
                GitHub
              </Button>

              <Button
                variant="outline-info"
                href="https://www.linkedin.com/in/ab-mudassir04/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill px-4"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </Button>
            </div>
          </Col>

          {/* RIGHT PROFILE */}

          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <div
              style={{
                maxWidth: "380px",

                margin: "auto",

                padding: "25px",

                borderRadius: "30px",

                background: "rgba(255,255,255,0.06)",

                backdropFilter: "blur(15px)",

                WebkitBackdropFilter: "blur(15px)",

                border: "1px solid rgba(255,255,255,0.12)",

                boxShadow: "0 0 40px rgba(13,202,240,0.25)",
              }}
            >
              <FaCode className="text-info fs-1 mb-3" />

              <img
                src="/profile.jpg"
                alt="Abdul Mudassir"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
                style={{
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              <h4 className="text-info mt-4 mb-0">Full Stack Developer</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
