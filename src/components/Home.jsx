import {
  FaArrowDown,
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-background">
        <span className="home-grid" />
        <span className="home-glow home-glow-one" />
        <span className="home-glow home-glow-two" />
      </div>

      <div className="container-custom">
        <div className="home-layout">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="home-content" data-aos="fade-up">

            <div className="home-availability">
              <span className="availability-dot" />
              Open to Full-Time Opportunities
            </div>

            <p className="home-greeting">
              Hello, I’m
            </p>

            <h1 className="home-name">
              Abdul <span>Mudassir</span>
            </h1>

            <h2 className="home-role">
              Java Full Stack Developer
            </h2>

            <p className="home-description">
              Computer Science graduate focused on building reliable and
              user-friendly web applications using Java, Spring Boot,
              React and database technologies.
            </p>

            <div className="home-actions">

              <a
                href="/Ab_Mudasssir_Java.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary-custom"
              >
                <FaDownload />
                Download Resume
              </a>

              <button
                type="button"
                className="btn-outline-custom"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <FaArrowRight />
              </button>

            </div>

            <div className="home-meta">

              <span>
                <FaMapMarkerAlt />
                India
              </span>

              <span className="home-meta-divider" />

              <span>
                B.Sc. Computer Science · 2025
              </span>

            </div>

            <div className="home-socials">

              <span className="home-social-label">
                Connect
              </span>

              <a
                href="https://github.com/ab-mudassir04"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ab-mudassir04/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>


          {/* =========================
              RIGHT PROFILE
          ========================= */}
          <div
            className="home-profile-area"
            data-aos="fade-left"
            data-aos-delay="100"
          >

            <div className="profile-orbit profile-orbit-one" />
            <div className="profile-orbit profile-orbit-two" />

            <div className="home-profile-card">

              <div className="profile-card-top">
                <span>
                  PORTFOLIO
                </span>

                <span className="profile-line" />
              </div>

              <div className="profile-image-wrapper">

                <div className="profile-image-ring" />

                <img
                  src="/profile.jpg"
                  alt="Abdul Mudassir"
                  className="profile-image"
                />

              </div>

              <div className="profile-caption">

                <span>
                  JAVA FULL STACK
                </span>

                <p>
                  Developer
                </p>

              </div>

            </div>
          </div>

        </div>


        {/* =========================
            SCROLL INDICATOR
        ========================= */}
        <button
          type="button"
          className="home-scroll-indicator"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
        >
          <span>
            Scroll to explore
          </span>

          <FaArrowDown />
        </button>

      </div>
    </section>
  );
}

export default Home;