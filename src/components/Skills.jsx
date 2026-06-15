import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FaJava, FaReact, FaDatabase, FaTools } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Backend",
      icon: <FaJava />,
      items: ["Java", "Spring Boot", "Hibernate", "REST API", "JWT"],
    },

    {
      title: "Frontend",
      icon: <FaReact />,
      items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      items: ["MySQL", "Oracle", "MongoDB", "PL/SQL"],
    },

    {
      title: "Tools",
      icon: <FaTools />,
      items: ["Git", "GitHub", "Postman", "Docker"],
    },
  ];

  const glassCard = {
    background: "rgba(255,255,255,0.06)",

    backdropFilter: "blur(15px)",

    WebkitBackdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.12)",

    borderRadius: "25px",

    transition: "0.3s",
  };

  return (
    <section
      id="skills"
      className="text-white"
      style={{
        minHeight: "100vh",

        paddingTop: "70px",

        background: "linear-gradient(135deg,#050505,#101820)",
      }}
    >
      <Container className="py-5">
        <h1 className="text-center text-info mb-5">Technical Skills</h1>

        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col lg={3} md={6} key={index}>
              <Card
                className="text-white border-0 shadow-lg h-100"
                style={glassCard}
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
                  <h3 className="text-info mb-4">
                    {skill.icon}

                    <span className="ms-2">{skill.title}</span>
                  </h3>

                  <div className="mb-3">
                    {skill.items.map((item) => (
                      <Badge
                        key={item}
                        bg="dark"
                        text="info"
                        className="
                        border border-info
                        rounded-pill
                        px-3 py-2
                        m-1
                        "
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-secondary small mt-auto mb-0">
                    {skill.items.length} technologies
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
