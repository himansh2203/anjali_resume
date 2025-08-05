import React from "react";
import "../styles/aeroplane.css";
import { Plane } from "lucide-react"; // ✅ Fix applied here

const steps = [
  { text: "Intern , District Court ", side: "left" },
  { text: "3rd year B.A,LLB , Asian Law College", side: "right" },
  { text: "Intern , District Court ", side: "left" },
  { text: "2nd year B.A,LLB , Asian Law College, ", side: "right" },

  {
    text: "1st year B.A,LLB , Asian Law College",
    side: "left",
  },
  {
    text: "Senior Secondary (CBSE) ,D.A.V. Public School",
    side: "right",
  },
  { text: "Secondary (CBSE) ,Rawal Public School", side: "left" },
];

const Aeroplane = () => {
  return (
    <div>
      <div className="timeline-container">
        <center>
          <strong>CAREER JOURNEY</strong>
        </center>
      </div>
      <div className="timeline-container">
        <div className="plane-line">
          <div className="plane-icon">
            <Plane size={28} color="#5c6bc0" /> {/* ✅ Fix applied here */}
          </div>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${step.side === "left" ? "left" : "right"}`}
            >
              <div className="content">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aeroplane;
