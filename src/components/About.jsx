import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaLaptopCode,
} from "react-icons/fa";

import "./About.css";

function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container-custom">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="section-header" data-aos="fade-up">
          <span className="section-label">ABOUT ME</span>

          <h2 className="section-title">
            Building a strong foundation for a career in software.
          </h2>

          <p className="section-description">
            Computer Science graduate focused on software development,
            practical projects and continuous technical growth.
          </p>
        </div>


        {/* =================================================
            PROFILE
        ================================================= */}

        <div className="about-profile" data-aos="fade-up">

          {/* LEFT — INTRODUCTION */}

          <div className="about-intro">

            <div className="about-heading">
              <span className="about-number">01</span>

              <div>
                <span className="about-small-label">
                  PROFILE
                </span>

                <h3>
                  A developer who enjoys solving problems.
                </h3>
              </div>
            </div>

            <div className="about-text">

              <p>
                I am a Computer Science graduate interested in software
                development and modern web applications.
              </p>

              <p>
                My development journey focuses on Java, Spring Boot,
                React and database technologies through practical projects.
              </p>

              <p>
                I am continuously improving my programming fundamentals
                and development practices to become a dependable software
                developer.
              </p>

            </div>

          </div>


          {/* RIGHT — QUICK FACTS */}

          <div className="about-facts">

            <div className="fact-item">

              <div className="fact-icon">
                <FaGraduationCap />
              </div>

              <div className="fact-content">
                <span>Education</span>
                <strong>B.Sc. Computer Science</strong>
              </div>

            </div>


            <div className="fact-item">

              <div className="fact-icon">
                <FaUserGraduate />
              </div>

              <div className="fact-content">
                <span>Graduation</span>
                <strong>2025 · CGPA 8.56</strong>
              </div>

            </div>


            <div className="fact-item">

              <div className="fact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="fact-content">
                <span>Location</span>
                <strong>India</strong>
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            EDUCATION + TRAINING
        ================================================= */}

        <div
          className="education-area"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <div className="education-heading">

            <div className="heading-number">
              02
            </div>

            <div>
              <span className="about-small-label">
                EDUCATION &amp; TRAINING
              </span>

              <h3>
                Academic &amp; professional journey
              </h3>
            </div>

          </div>


          {/* =================================================
              CENTER TIMELINE
          ================================================= */}

          <div className="education-timeline">

            {/* =================================================
                JAVA TRAINING — LEFT
            ================================================= */}

            <article className="timeline-item timeline-left">

              <div className="timeline-content">

                <span className="timeline-year">
                  2025
                </span>

                <h4>
                  Full Stack Java Developer Training
                </h4>

                <p>
                  Naresh IT, Hyderabad
                </p>

                <span className="timeline-type">
                  Professional Training
                </span>

              </div>

              <div className="timeline-dot">
                <FaLaptopCode />
              </div>

              <div className="timeline-space" />

            </article>


            {/* =================================================
                BACHELOR — RIGHT
            ================================================= */}

            <article className="timeline-item timeline-right">

              <div className="timeline-space" />

              <div className="timeline-dot">
                <FaGraduationCap />
              </div>

              <div className="timeline-content">

                <span className="timeline-year">
                  2025
                </span>

                <h4>
                  Bachelor of Science in Computer Science
                </h4>

                <p>
                  Yeshwant Mahavidyalaya, Nanded
                </p>

                <span className="timeline-score">
                  CGPA <strong>8.56</strong>
                </span>

              </div>

            </article>


            {/* =================================================
                HSC — LEFT
            ================================================= */}

            <article className="timeline-item timeline-left">

              <div className="timeline-content">

                <span className="timeline-year">
                  2022
                </span>

                <h4>
                  Higher Secondary Certificate
                </h4>

                <p>
                  Moulana Azad Jr. College, Nanded
                </p>

                <span className="timeline-score">
                  <strong>66.50%</strong>
                </span>

              </div>

              <div className="timeline-dot">
                <FaGraduationCap />
              </div>

              <div className="timeline-space" />

            </article>


            {/* =================================================
                SSC — RIGHT
            ================================================= */}

            <article className="timeline-item timeline-right">

              <div className="timeline-space" />

              <div className="timeline-dot">
                <FaGraduationCap />
              </div>

              <div className="timeline-content">

                <span className="timeline-year">
                  2019
                </span>

                <h4>
                  Secondary School Certificate
                </h4>

                <p>
                  Moulana Azad High School, Nanded
                </p>

                <span className="timeline-score">
                  <strong>71.40%</strong>
                </span>

              </div>

            </article>

          </div>

        </div>


        {/* =================================================
            PROFESSIONAL DIRECTION
        ================================================= */}

        <div
          className="about-direction"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          <span className="direction-label">
            PROFESSIONAL DIRECTION
          </span>

          <p>
            Looking to contribute to a professional development team,
            apply my technical foundation and grow through real-world
            software development.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
