import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navigation.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================================================
     SCROLL + ACTIVE SECTION
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      const currentPosition = scrollY + 150;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.offsetTop <= currentPosition
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
     ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =========================================================
     CLOSE MENU ON DESKTOP
     ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     NAVIGATION
     ========================================================= */

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight =
      window.innerWidth <= 480 ? 66 : 70;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`site-navigation ${
          scrolled
            ? "site-navigation--scrolled"
            : ""
        }`}
      >
        <div className="navigation-inner">

          {/* =================================================
              BRAND
          ================================================= */}

          <button
            type="button"
            className="navigation-brand"
            onClick={() =>
              handleNavigation("home")
            }
            aria-label="Go to homepage"
          >
            <span className="brand-mark">
              AM
            </span>

            <span className="brand-text">
              <strong>
                Abdul Mudassir
              </strong>

              <small>
                Java Full Stack Developer
              </small>
            </span>
          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="navigation-links"
            aria-label="Desktop navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`navigation-link ${
                  activeSection === item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                {item.label}
              </button>
            ))}
          </nav>


          {/* =================================================
              DESKTOP CONNECT
          ================================================= */}

          <button
            type="button"
            className="navigation-connect"
            onClick={() =>
              handleNavigation("contact")
            }
          >
            <span>
              Let's Connect
            </span>

            <FaArrowRight />
          </button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className={`navigation-menu-button ${
              menuOpen
                ? "navigation-menu-button--open"
                : ""
            }`}
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </header>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen
            ? "mobile-navigation--open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-inner">

          <nav
            className="mobile-navigation-links"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-navigation-link ${
                  activeSection === item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(item.id)
                }
                tabIndex={
                  menuOpen ? 0 : -1
                }
              >
                <span className="mobile-link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-link-label">
                  {item.label}
                </span>

                {activeSection === item.id && (
                  <span className="mobile-navigation-indicator" />
                )}
              </button>
            ))}
          </nav>


          {/* =================================================
              MOBILE CONNECT
          ================================================= */}

          <button
            type="button"
            className="mobile-navigation-connect"
            onClick={() =>
              handleNavigation("contact")
            }
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>
              Let's Talk
            </span>

            <FaArrowRight />
          </button>


          {/* =================================================
              MOBILE FOOTER INFO
          ================================================= */}

          <div className="mobile-navigation-meta">
            <span>
              Abdul Mudassir
            </span>

            <span>
              Java Full Stack Developer
            </span>
          </div>

        </div>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <button
        type="button"
        className={`mobile-navigation-overlay ${
          menuOpen
            ? "mobile-navigation-overlay--open"
            : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
}

export default Navigation;