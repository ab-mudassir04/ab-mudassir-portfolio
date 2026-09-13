import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "email",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleContactMethodChange = (method) => {
    setFormData((previous) => ({
      ...previous,
      contactMethod: method,
      email: method === "email" ? previous.email : "",
      phone: method === "phone" ? previous.phone : "",
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    const contactValue =
      formData.contactMethod === "email"
        ? formData.email
        : formData.phone;

    const templateParams = {
      from_name: formData.name,
      contact_method:
        formData.contactMethod === "email" ? "Email" : "Phone",
      contact_value: contactValue,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });

      setFormData({
        name: "",
        contactMethod: "email",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message right now. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
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

              {/* Email */}
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

              {/* Location */}
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

            {/* Form Header */}
            <div className="contact-form-header">
              <div>
                <span>02</span>
                <h3>Send a message</h3>
              </div>

              <FaPaperPlane />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              {/* Name */}
              <div className="contact-field">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Contact Preference */}
              <div className="contact-field">

                <label>
                  Preferred Contact Method
                </label>

                <div className="contact-method-options">

                  <button
                    type="button"
                    className={`contact-method ${
                      formData.contactMethod === "email"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleContactMethodChange("email")
                    }
                  >
                    <FaEnvelope />
                    <span>Email</span>
                  </button>

                  <button
                    type="button"
                    className={`contact-method ${
                      formData.contactMethod === "phone"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleContactMethodChange("phone")
                    }
                  >
                    <FaPhone />
                    <span>Phone</span>
                  </button>

                </div>
              </div>

              {/* Email */}
              {formData.contactMethod === "email" && (
                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />

                </div>
              )}

              {/* Phone */}
              {formData.contactMethod === "phone" && (
                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[+]?[0-9\s()-]{10,16}"
                    required
                  />

                </div>
              )}

              {/* Message */}
              <div className="contact-field">

                <label htmlFor="message">
                  Message
                </label>

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

              {/* Success / Error */}
              {status.message && (
                <div
                  className={`contact-status ${status.type}`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                <span>
                  {isSending ? "Sending..." : "Send Message"}
                </span>

                {!isSending && <FaArrowRight />}

                {isSending && (
                  <span className="contact-spinner" />
                )}
              </button>

            </form>

            <p className="contact-form-note">
              Your message will be delivered directly to my inbox.
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
