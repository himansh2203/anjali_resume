import "../styles/professinalSummary.css";

function Proffesinal() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Professional Experience</h2>
      <div className="timeline">
        {/* High Court Internship */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Internship – High Court</h3>
            <span className="timeline-date">May 2024 – June 2024</span>
            <ul>
              <li>
                Observed court proceedings and developed insights into judicial
                practices.
              </li>
              <li>
                Assisted in legal drafting and prepared documentation for
                ongoing cases.
              </li>
              <li>
                Engaged in case file management and legal filing procedures.
              </li>
            </ul>
          </div>
        </div>

        {/* District Court Internship */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Internship – District Court</h3>
            <span className="timeline-date">Jan 2024 – Feb 2024</span>
            <ul>
              <li>
                Performed document review for active case files under
                supervision.
              </li>
              <li>
                Conducted legal research and case law analysis to support trial
                preparation.
              </li>
              <li>
                Enhanced understanding of courtroom protocols and litigation
                strategies.
              </li>
            </ul>
          </div>
        </div>
        {/* Additional Experience */}
      </div>
    </div>
  );
}

export default Proffesinal;
