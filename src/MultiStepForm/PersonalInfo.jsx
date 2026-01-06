import React, { useState } from "react";

function PersonalInfo({ registration, setRegistration, nextStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!registration.firstName || !registration.lastName || !registration.email) {
      setError("First Name, Last Name, and Email are required!");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="card p-4">
      <h5>Step 1: Personal Details</h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <input
        className="form-control mb-2"
        placeholder="First Name"
        value={registration.firstName}
        onChange={(e) => setRegistration({ ...registration, firstName: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Last Name"
        value={registration.lastName}
        onChange={(e) => setRegistration({ ...registration, lastName: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Mobile Number"
        value={registration.mobileNo}
        onChange={(e) => setRegistration({ ...registration, mobileNo: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Email"
        type="email"
        value={registration.email}
        onChange={(e) => setRegistration({ ...registration, email: e.target.value })}
      />

      <button className="btn btn-success mt-2" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default PersonalInfo;