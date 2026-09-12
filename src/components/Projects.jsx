import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";

import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
} from "react-icons/si";

import "./Projects.css";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    number: "01",
    category: "FULL STACK APPLICATION",

    title: "Zara Beauty Collection",
    subtitle: "E-Commerce Web Application",

    image: "/ecommerce.png",

    desc: "A full-stack e-commerce application developed to provide a complete online shopping experience. The application includes product management, authentication, cart functionality, order processing and REST API integration.",

    role: "Developed the React frontend and integrated it with a Spring Boot REST API and MySQL database.",

    features: [
      "User Authentication",
      "Product Management",
      "Shopping Cart",
      "Order Management",
      "REST API Integration",
    ],

    tech: [
      {
        name: "Java",
        icon: <FaCode />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
      },
    ],

    githubFrontend: "https://github.com/ab-mudassir04/zara-beauty-frontend",

    githubBackend: "https://github.com/ab-mudassir04/zara-beauty-backend",

    demo: "https://zarabeauty-collection.netlify.app/",
  },

  {
    id: 2,
    number: "02",
    category: "FRONTEND PROJECT",

    title: "Developer Portfolio",
    subtitle: "Personal Developer Website",

    image: "/portfolio.png",

    desc: "A responsive personal portfolio website designed to present my technical skills, projects, education and professional profile through a clean and modern developer-focused interface.",

    role: "Designed and developed the complete frontend with reusable React components, responsive layouts and interactive UI elements.",

    features: [
      "Responsive Design",
      "Project Showcase",
      "Skills & Education",
      "Contact Section",
      "Smooth Navigation",
    ],

    tech: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS3",
        icon: <SiCss />,
      },
    ],

    github: "https://github.com/ab-mudassir04/ab-mudassir-portfolio",

    demo: "https://abmudassir.netlify.app/",
  },

  {
    id: 3,
    number: "03",
    category: "FINAL YEAR PROJECT",

    title: "SkyCast",
    subtitle: "Weather Forecasting App",

    image: "/weather.png",

    desc: "A responsive weather forecasting application that displays current weather information and forecast data using a free Weather API.",

    role: "Worked as a frontend developer in a three-member team. My responsibilities included developing the user interface and researching suitable free Weather API options.",

    features: [
      "Current Weather Data",
      "City Search & Suggestions",
      "Hourly Forecast",
      "Multi-Day Forecast",
      "Weather Highlights",
      "Recent Cities",
      "Responsive Interface",
    ],

    tech: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS3",
        icon: <SiCss />,
      },
    ],

    github: "https://github.com/ab-mudassir04/weather-forecasting-app",

    demo: "https://weathernow-ab.netlify.app/",
  },
];

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

function Projects() {
  const [current, setCurrent] = useState(0);

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => {
        return (previous + 1) % projects.length;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     NEXT PROJECT
  ======================================================= */

  const nextSlide = () => {
    setCurrent((previous) => {
      return (previous + 1) % projects.length;
    });
  };

  /* =======================================================
     PREVIOUS PROJECT
  ======================================================= */

  const prevSlide = () => {
    setCurrent((previous) => {
      return (previous - 1 + projects.length) % projects.length;
    });
  };

  /* =======================================================
     CURRENT PROJECT
  ======================================================= */

  const project = projects[current];

  return (
    <section id="projects" className="projects-section">
      <Container className="projects-container">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="projects-header" data-aos="fade-up">
          <div className="section-label">SELECTED WORK</div>

          <h2>
            Projects I’ve <span>Built</span>
          </h2>

          <p>
            A selection of applications built through practical development,
            problem solving and hands-on experience with modern web
            technologies.
          </p>
        </div>

        {/* =================================================
            PROJECT SLIDER
        ================================================= */}

        <div className="project-slider">
          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            className="slider-arrow left-arrow"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          {/* NEXT BUTTON */}

          <button
            type="button"
            className="slider-arrow right-arrow"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>

          {/* =================================================
              PROJECT CARD
          ================================================= */}

          <article className="project-card" key={project.id} data-aos="fade-up">
            {/* PROJECT VISUAL */}

            <div className="project-visual">
              <div className="project-image-frame">
                <div className="image-topbar">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="preview-label">PROJECT PREVIEW</span>
                </div>

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  PROJECT ACTIONS
              ================================================= */}

              <div className="project-actions">
                {/* LIVE DEMO */}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-btn"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}

                {/* =================================================
                    ZARA FULL STACK REPOSITORIES
                ================================================= */}

                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`View frontend source code of ${project.title}`}
                  >
                    <FaGithub />
                    <span>Frontend</span>
                  </a>
                )}

                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`View backend source code of ${project.title}`}
                  >
                    <FaGithub />
                    <span>Backend</span>
                  </a>
                )}

                {/* =================================================
                    NORMAL SINGLE REPOSITORY
                ================================================= */}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* =================================================
                PROJECT INFORMATION
            ================================================= */}

            <div className="project-info">
              <div className="project-meta">
                <span className="project-number">{project.number}</span>

                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <div className="project-subtitle">{project.subtitle}</div>

              <p className="project-description">{project.desc}</p>

              {/* MY CONTRIBUTION */}

              <div className="project-role">
                <span className="role-label">MY CONTRIBUTION</span>

                <p>{project.role}</p>
              </div>

              {/* PROJECT DETAILS */}

              <div className="project-details">
                {/* KEY FEATURES */}

                <div className="detail-column">
                  <div className="detail-heading">KEY FEATURES</div>

                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <FaCheckCircle />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECHNOLOGY */}

                <div className="detail-column">
                  <div className="detail-heading">TECHNOLOGY</div>

                  <div className="technology-list">
                    {project.tech.map((tech) => (
                      <span className="technology-item" key={tech.name}>
                        {tech.icon}

                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================
              PAGINATION
          ================================================= */}

          <div className="project-pagination">
            <div className="pagination-left">
              <span className="pagination-label">PROJECT</span>

              <div className="slider-dots">
                {projects.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    className={
                      current === index ? "slider-dot active" : "slider-dot"
                    }
                    onClick={() => setCurrent(index)}
                    aria-label={`View ${item.title}`}
                    aria-current={current === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>

            <div className="project-counter">
              <span>{String(current + 1).padStart(2, "0")}</span>

              <i>/</i>

              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
