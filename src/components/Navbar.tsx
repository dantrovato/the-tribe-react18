import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Always visible Home button */}
        <Link
          className="navbar-brand fw-bold text-muted"
          to="/home"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>

        {/* Burger button */}
        <button
          className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/events" onClick={closeMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/join" onClick={closeMenu}>
                Join
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rules" onClick={closeMenu}>
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={closeMenu}>
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback" onClick={closeMenu}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
