import React, { useState } from "react";

function DependentInfo({ registration, setRegistration, nextStep, prevStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    const dep = registration.familyDependentInfo || {};
    if (
      !dep.noOfFamilyMember ||
      dep.noOfChild === undefined ||
      !dep.maritalStatus ||
      !dep.dependentMember ||
      !dep.familyIncome
    ) {
      setError("All dependent fields are required!");
      return;
    }
    setError("");
    nextStep();
  };

  const updateDependent = (key, value) => {
    setRegistration({
      ...registration,
      familyDependentInfo: {
        ...registration.familyDependentInfo,
        [key]: value,
      },
    });
  };

  const dep = registration.familyDependentInfo || {};

  return (
    <div className="card p-4">
      <h5>Step 3: Dependent Information</h5>
      {error && <div className="alert alert-danger">{error}</div>}

      <input
        className="form-control mb-2"
        placeholder="No Of Family Member"
        value={dep.noOfFamilyMember || ""}
        onChange={(e) => updateDependent("noOfFamilyMember", e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Number of Children"
        value={dep.noOfChild || ""}
        onChange={(e) => updateDependent("noOfChild", e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Marital Status"
        value={dep.maritalStatus || ""}
        onChange={(e) => updateDependent("maritalStatus", e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Dependent Member"
        value={dep.dependentMember || ""}
        onChange={(e) => updateDependent("dependentMember", e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Family Income"
        value={dep.familyIncome || ""}
        onChange={(e) => updateDependent("familyIncome", e.target.value)}
      />

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>
        <button className="btn btn-success" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DependentInfo;
