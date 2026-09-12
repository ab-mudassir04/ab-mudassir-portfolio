import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container-custom">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              <span>AM</span>
            </a>

            <div>
              <h3>Abdul Mudassir</h3>
              <p>Java Full Stack Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Social */}
          <div className="footer-socials">
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

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="footer-top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Abdul Mudassir. All rights reserved.
          </p>

          <p>Designed &amp; built with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
