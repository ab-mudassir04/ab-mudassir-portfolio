import { FaArrowUpRightFromSquare, FaCertificate } from "react-icons/fa6";

import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      number: "01",
      name: "Full Stack Java Developer",
      issuer: "NIT Hyderabad",
      year: "2025",
      description:
        "Training focused on Java full-stack development and practical software development concepts.",
      link: "https://drive.google.com/file/d/1LZBAiqSZWd-jc7izw1xL3jMACY4nTWot/view?usp=drivesdk",
    },
    {
      number: "02",
      name: "YMIT Fest Participation",
      issuer: "Yeshwant Mahavidyalaya, Nanded",
      year: "2024",
      description:
        "Certificate recognizing participation in YMIT Fest activities at Yeshwant Mahavidyalaya, Nanded.",
      link: "https://drive.google.com/file/d/1_9XKknJ8TtRs6q8lth9VvpBlpxfXV0zj/view?usp=drivesdk",
    },
    {
      number: "03",
      name: "Web Development",
      issuer: "Great Learning",
      year: "2023",
      description:
        "Web development learning focused on fundamental technologies and practical web concepts.",
      link: "https://drive.google.com/file/d/16Nxfy-33y_Ik6NBqaEfZAFGz69P1dC01/view?usp=drivesdk",
    },
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container-custom">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="section-header certificates-header" data-aos="fade-up">
          <span className="section-label">
            CERTIFICATIONS &amp; ACHIEVEMENTS
          </span>

          <h2 className="section-title">
            Continuous learning, <span>practical growth.</span>
          </h2>

          <p className="section-description">
            Certifications and achievements that reflect my technical
            development and continuous learning.
          </p>
        </div>

        {/* =================================================
            CERTIFICATE CARDS
        ================================================= */}

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article
              className="certificate-card"
              key={certificate.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Top */}

              <div className="certificate-card-top">
                <div className="certificate-icon">
                  <FaCertificate />
                </div>

                <span className="certificate-number">{certificate.number}</span>
              </div>

              {/* Certificate Content */}

              <div className="certificate-content">
                <div className="certificate-meta">
                  <span>{certificate.issuer}</span>
                  <span>•</span>
                  <span>{certificate.year}</span>
                </div>

                <h3 className="certificate-title">{certificate.name}</h3>

                <p className="certificate-description">
                  {certificate.description}
                </p>
              </div>

              {/* View Certificate */}

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-view"
              >
                <span>View Certificate</span>

                <FaArrowUpRightFromSquare />
              </a>
            </article>
          ))}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="certificates-footer" data-aos="fade-up">
          <span className="certificates-footer-line" />

          <p>
            Continuously strengthening my skills through projects, technical
            practice and real-world development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
