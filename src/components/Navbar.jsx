import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

function Navigation() {
  const [active, setActive] = useState("home");

  const menu = [
    "home",
    "about",
    "skills",
    "projects",
    "certificates",
    "contact",
  ];

  // Active menu while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll with navbar spacing
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 55;

      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      style={{
        height: "55px",
        overflow: "visible",
        zIndex: 1000,
      }}
    >
      <Container>
        {/* Horizontal Logo */}

        <Navbar.Brand
          onClick={() => scrollToSection("home")}
          className="d-flex align-items-center"
          style={{
            cursor: "pointer",
            overflow: "visible",
          }}
        >
          <img
            src="/amlogo.png"
            alt="AM Logo"
            style={{
              width: "150px",
              height: "95px",
              objectFit: "contain",
              transform: "scale(1.4)",
              transformOrigin: "left center",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            {menu.map((item) => (
              <Nav.Link
                key={item}
                onClick={() => scrollToSection(item)}
                className={active === item ? "text-info fw-bold" : "text-white"}
                style={{
                  cursor: "pointer",
                  marginLeft: "15px",
                  textTransform: "capitalize",
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
