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

  // Handle input changes
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

  // Handle Email / Phone selection
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

  // Send message through EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    // Frontend validation
    if (!name) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    if (formData.contactMethod === "email" && !email) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (formData.contactMethod === "phone" && !phone) {
      setStatus({
        type: "error",
        message: "Please enter your phone number.",
      });
      return;
    }

    if (!message) {
      setStatus({
        type: "error",
        message: "Please enter your message.",
      });
      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    // These names MUST match the EmailJS template variables
    const templateParams = {
      user_name: name,
      user_email: formData.contactMethod === "email" ? email : "",
      user_phone: formData.contactMethod === "phone" ? phone : "",
      message: message,
    };

    // Temporary debugging information
    console.log("EmailJS Configuration:", {
      service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    console.log("EmailJS Template Params:", templateParams);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      console.log("EmailJS Success:", response);

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
      console.error("========== EMAILJS ERROR ==========");
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);
      console.error("Message:", error?.message);
      console.error("Full Error:", error);

      setStatus({
        type: "error",
        message:
          error?.text ||
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
            Have a development opportunity, project idea, or simply want to
            connect? Feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* Left Side */}
          <div
            className="contact-intro"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            <div className="contact-intro-top">
              <span className="contact-number">01</span>

              <h3>Start a conversation.</h3>

              <p>
                I am open to developer opportunities, real-world projects, and
                meaningful technical collaborations where I can continue growing
                as a Java Full Stack Developer.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <a
                href="mailto:mudassirabdul84@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <FaEnvelope />
                </span>

                <span className="contact-detail-content">
                  <small>Email</small>
                  <strong>mudassirabdul84@gmail.com</strong>
                </span>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </span>

                <span className="contact-detail-content">
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
                  rel="noopener noreferrer"
                  aria-label="Visit Abdul Mudassir's GitHub profile"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ab-mudassir04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Abdul Mudassir's LinkedIn profile"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="contact-form-wrapper"
            data-aos="fade-left"
            data-aos-delay="140"
          >
            <div className="contact-form-header">
              <div className="contact-form-title">
                <span>02</span>
                <h3>Send a message</h3>
              </div>

              <FaPaperPlane aria-hidden="true" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={80}
                />
              </div>

              {/* Contact Method */}
              <div className="contact-field">
                <label>Preferred Contact Method</label>

                <div
                  className="contact-method-options"
                  role="group"
                  aria-label="Preferred contact method"
                >
                  <button
                    type="button"
                    className={`contact-method ${
                      formData.contactMethod === "email" ? "active" : ""
                    }`}
                    onClick={() => handleContactMethodChange("email")}
                    aria-pressed={formData.contactMethod === "email"}
                  >
                    <FaEnvelope />
                    <span>Email</span>
                  </button>

                  <button
                    type="button"
                    className={`contact-method ${
                      formData.contactMethod === "phone" ? "active" : ""
                    }`}
                    onClick={() => handleContactMethodChange("phone")}
                    aria-pressed={formData.contactMethod === "phone"}
                  >
                    <FaPhone />
                    <span>Phone</span>
                  </button>
                </div>
              </div>

              {/* Email */}
              {formData.contactMethod === "email" && (
                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    maxLength={120}
                  />
                </div>
              )}

              {/* Phone */}
              {formData.contactMethod === "phone" && (
                <div className="contact-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={20}
                  />
                </div>
              )}

              {/* Message */}
              <div className="contact-field contact-message-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  rows={4}
                  maxLength={1000}
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`contact-status ${status.type}`}
                  role="alert"
                  aria-live="polite"
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
                <span>{isSending ? "Sending..." : "Send Message"}</span>

                {!isSending && <FaArrowRight aria-hidden="true" />}

                {isSending && (
                  <span className="contact-spinner" aria-hidden="true" />
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
            Open to connecting with developers, recruiters, and teams working on
            meaningful software products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
