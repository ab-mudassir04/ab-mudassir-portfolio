import { useState } from "react";

import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:mudassirabdul84@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Contact</span>

          <h2 className="section-title">
            Let's connect and build something useful.
          </h2>

          <p className="section-description">
            Whether you have a development opportunity, project idea or simply
            want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Information */}
          <div
            className="contact-intro"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            <span className="contact-number">01</span>

            <h3>Start a conversation.</h3>

            <p>
              I am interested in opportunities where I can contribute to
              real-world software development, work with experienced teams and
              continue growing as a developer.
            </p>

            <div className="contact-details">
              <a
                href="mailto:mudassirabdul84@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <small>Email</small>
                  <strong>mudassirabdul84@gmail.com</strong>
                </span>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  <small>Location</small>
                  <strong>India</strong>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-area">
              <span>CONNECT WITH ME</span>

              <div className="contact-socials">
                <a
                  href="https://github.com/ab-mudassir04"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ab-mudassir04/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="contact-form-wrapper"
            data-aos="fade-left"
            data-aos-delay="140"
          >
            <div className="contact-form-header">
              <div>
                <span>02</span>
                <h3>Send a message</h3>
              </div>

              <FaPaperPlane />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <FaArrowRight />
              </button>
            </form>

            <p className="contact-form-note">
              Your email client will open with the message prepared for sending.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className="contact-closing"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <span className="contact-closing-line" />

          <p>
            Open to connecting with developers, recruiters and teams working on
            meaningful software products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
