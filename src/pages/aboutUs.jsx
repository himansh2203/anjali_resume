import "../styles/aboutUs.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="main-heading">About Me</h1>
      <p className="intro-text">
        Passionate, driven, and detail-oriented{" "}
        <strong>3rd-year law student</strong> with a deep interest in
        Constitutional Law, Corporate Law, Criminal Justice, and Public Policy.
        Equipped with strong research, writing, and analytical skills, I thrive
        on solving complex legal problems and advocating for justice through
        academic excellence and practical exposure.
      </p>

      <div className="about-edu section">
        <h2>
          <FaGraduationCap className="icon" /> Skills
        </h2>
        <ul>
          <li>
            <strong>Core Legal Skills:</strong>
            <br />
            Legal Research & Analysis, Case Law Interpretation, Drafting Legal
            Documents, Legal Writing
          </li>
          <li>
            <strong>Subject Matter Knowledge:</strong>
            <br />
            Constitutional Law, Corporate Law, Criminal Law, Contract Law
          </li>
          <li>
            <strong>Practical Legal Skills:</strong>
            <br />
            Court Procedure Observation, Legal Drafting, Document Review
          </li>
          <li>
            <strong>Legal Tools & Software:</strong>
            <br />
            Indian Kanoon , MS Office
          </li>
          <li>
            <strong>Soft Skills:</strong>
            <br />
            Critical Thinking, Attention to Detail, Written & Verbal
            Communication, Time Management, Team Collaboration
          </li>
        </ul>
      </div>

      <div className="about-edu section">
        <h2>
          <FaGraduationCap className="icon" /> Education
        </h2>
        <ul>
          <li>
            <strong>BA LLB (Hons.)</strong>
            <br />
            Asian Law College ,<span className="date"> 2022 – Present</span>
          </li>
          <li>
            <strong>Senior Secondary (CBSE)</strong>
            <br />
            D.A.V. Public School <span className="date"></span>
          </li>
          <li>
            <strong>Secondary (CBSE)</strong>
            <br />
            Rawal Public School <span className="date"></span>
          </li>
        </ul>
      </div>

      <div className="about-certification section">
        <h2>
          <FaCertificate className="icon" /> Certifications & Internships
        </h2>
        <ul>
          <li>
            <strong>Internship – District Court</strong>
            <br />
            Observed court proceedings, legal drafting, and case file management
            <span className="date"> </span>
          </li>
          <li>
            <strong>Internship – District Court</strong>
            <br />
            Document Review, Legal Research & Analysis, Case Law Interpretation,
            <span className="date"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
