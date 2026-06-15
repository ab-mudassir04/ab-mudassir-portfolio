import IconLink from "./IconLink";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const glassCard = {
    background: "rgba(255,255,255,0.06)",

    backdropFilter: "blur(15px)",

    WebkitBackdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.12)",

    borderRadius: "25px",

    height: "100%",

    padding: "25px",
  };

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(135deg,#050505,#101820)",

        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          {/* ABOUT */}

          <div className="col-lg-4">
            <div style={glassCard}>
              <h4 className="text-info fw-bold">Abdul Mudassir</h4>

              <p className="text-secondary">
                <FaCode className="me-2" />
                Java Full Stack Developer
              </p>

              <div className="text-secondary small">
                <p>⚡ React + Java + MySQL</p>

                <p>🚀 AWS & DevOps Learning</p>

                <p>🛠 REST API Development</p>

                <p className="mb-0">📍 Open to Opportunities</p>
              </div>
            </div>
          </div>

          {/* LINKS */}

          <div className="col-lg-4">
            <div style={glassCard} className="text-center">
              <h5 className="text-info fw-bold mb-4">Quick Links</h5>

              <div className="d-flex flex-wrap justify-content-center gap-2">
                {links.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-decoration-none"
                    style={{
                      color: "#adb5bd",

                      background: "rgba(255,255,255,0.05)",

                      padding: "8px 16px",

                      borderRadius: "20px",

                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0dcaf0";

                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#adb5bd";

                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT */}

          <div className="col-lg-4">
            <div style={glassCard}>
              <h5 className="text-info fw-bold mb-4">Get In Touch</h5>

              <p className="text-secondary">
                <FaEnvelope className="me-2 text-info" />
                mudassirabdul84@gmail.com
              </p>

              <p className="text-secondary">
                <FaPhoneAlt className="me-2 text-info" />
                +91 8237209779
              </p>

              <div className="d-flex gap-3 fs-4 mt-4">
                <IconLink
                  href="https://github.com/Abdul-Mudassir"
                  icon={FaGithub}
                />

                <IconLink
                  href="https://www.linkedin.com/in/ab-mudassir04/"
                  icon={FaLinkedin}
                />

                <IconLink
                  href="mailto:mudassirabdul84@gmail.com"
                  icon={FaEnvelope}
                  isExternal={false}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center">
          <button
            onClick={goTop}
            className="btn btn-outline-info rounded-circle mb-3"
          >
            <FaArrowUp />
          </button>

          <p className="text-secondary mb-1">
            © {new Date().getFullYear()} Abdul Mudassir. All rights reserved.
          </p>

          <p className="text-secondary small mb-0">
            Built with React • Bootstrap • Java • MySQL
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
