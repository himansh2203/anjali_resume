import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/bottom.css"; // Importing the CSS file

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom-links">
        <Nav.Link href="/" className="bottom-link">
          Home
        </Nav.Link>
        <Nav.Link href="/aboutUs" className="bottom-link">
          About
        </Nav.Link>
        <Nav.Link href="/contact" className="bottom-link">
          Contact
        </Nav.Link>
      </div>

      <div className="bottom-about">
        <div className="bottom-about-title">Why do hire me?</div>
        <div className="bottom-about-text">
          Over the past two years, I’ve honed my legal acumen through
          internships, engaging in case law research, drafting legal documents,
          and observing real-time courtroom proceedings. With a strong
          foundation in legal theory and practical exposure, I am eager to take
          on new challenges, contribute meaningfully to the legal field, and
          make a lasting impact. ⚖️ I'm not just learning law—I’m preparing to
          practice it with purpose, passion, and professionalism.
        </div>
      </div>
    </div>
  );
}

export default Bottom;
