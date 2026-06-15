import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full Stack shopping application with authentication, products and cart system.",
      tech: "React | Spring Boot | MySQL",
      github: "https://github.com/",
      demo: "#",
    },

    {
      title: "Portfolio Website",
      desc: "Responsive personal developer portfolio with modern UI design.",
      tech: "React | Bootstrap",
      github: "https://github.com/",
      demo: "#",
    },

    {
      title: "Employee Management System",
      desc: "CRUD application to manage employee records using REST APIs.",
      tech: "Spring Boot | REST API | MySQL",
      github: "https://github.com/",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "55px",
        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container className="py-5">
        <h1 className="text-center text-info mb-5">Projects</h1>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="text-white h-100 border-0 shadow-lg"
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
                  <Card.Title className="text-info mb-3">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    {project.desc}
                  </Card.Text>

                  <p className="text-info small mt-2">{project.tech}</p>

                  <div className="mt-auto">
                    <Button
                      variant="outline-info"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-pill me-2"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </Button>

                    <Button
                      variant="info"
                      href={project.demo}
                      className="rounded-pill"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
