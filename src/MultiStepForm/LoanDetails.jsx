import React, { useState } from "react";

function LoanDetails({ registration, setRegistration, nextStep, prevStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (
      !registration.customerDateOfBirth ||
      !registration.requiredTenure ||
      !registration.customerTotalLoanRequired ||
      !registration.customerAmountPaidForHome
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="card p-4">
      <h5>Step 2: Loan Details</h5>
      {error && <div className="alert alert-danger">{error}</div>}

      <input
        type="date"
        className="form-control mb-2"
        placeholder="customerDateOfBirth"
        value={registration.customerDateOfBirth}
        onChange={(e) =>
          setRegistration({ ...registration, customerDateOfBirth: e.target.value })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Required Tenure (years)"
        value={registration.requiredTenure || ""}
        onChange={(e) =>
          setRegistration({ ...registration, requiredTenure: Number(e.target.value) })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Loan Amount Required"
        value={registration.customerTotalLoanRequired || ""}
        onChange={(e) =>
          setRegistration({ ...registration, customerTotalLoanRequired: Number(e.target.value) })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Amount Paid for Home"
        value={registration.customerAmountPaidForHome || ""}
        onChange={(e) =>
          setRegistration({ ...registration, customerAmountPaidForHome: Number(e.target.value) })
        }
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Additional Mobile Number"
        value={registration.customerAdditionalMobileNumber || ""}
        onChange={(e) =>
          setRegistration({ ...registration, customerAdditionalMobileNumber: e.target.value })
        }
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

export default LoanDetails;