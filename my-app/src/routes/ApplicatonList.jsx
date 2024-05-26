import React, { useState } from "react";
import { Link } from "react-router-dom";

function ApplicationList() {
  const [applicants, setApplicants] = useState([
    { id: 1, name: "applicant 1", role: "Front-end", phone: "010-1234-1234" },
    { id: 2, name: "applicant 2", role: "Back-end", phone: "010-2345-2345" },
    { id: 3, name: "applicant 3", role: "Designer", phone: "010-3456-3456" },
  ]);

  const handleSubmit = (id) => {
    const applicant = applicants.find((applicant) => applicant.id === id);
    alert(`Confirme`);
  };

  return (
    <div>
      <h2>Check Application</h2>
      {applicants.map((applicant) => (
        <div key={applicant.id} className="applicant">
          <h3>
            {applicant.name} - {applicant.role}
          </h3>
          <p>Phone Number: {applicant.phone}</p>
          <button onClick={() => handleSubmit(applicant.id)}>Confirm</button>
          <Link to={`/applicationPortfolio/${applicant.id}`}>Portfolio</Link>
        </div>
      ))}
      <button>Close</button>
    </div>
  );
}

export default ApplicationList;
