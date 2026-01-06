import React, { useState } from "react";

function AccountGuarantor({ registration, setRegistration, nextStep, prevStep }) {
  const [error, setError] = useState("");

  // EXACT backend field names
  const account = registration.accountDetails || {};
  const guarantor = registration.guarantorDetails || {};

  const handleNext = () => {
    if (
      !account.accountType ||
      !account.accountHolderName ||
      !account.accountNumber
    ) {
      setError("All account details are required");
      return;
    }

    if (
      !guarantor.guarantorName ||
      !guarantor.guarantorDateOfBirth ||
      !guarantor.guarantorRelationshipwithCustomer ||
      !guarantor.guarantorMobileNumber ||
      !guarantor.guarantorAdharCardNo
    ) {
      setError("All guarantor details are required");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="card p-4">
      <h5>Step 5: Account & Guarantor Details</h5>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* ================= Account Details ================= */}

      <input
        className="form-control mb-2"
        placeholder="Account Type"
        value={account.accountType || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            accountDetails: {
              ...account,
              accountType: e.target.value
            }
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Account Holder Name"
        value={account.accountHolderName || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            accountDetails: {
              ...account,
              accountHolderName: e.target.value
            }
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Account Number"
        value={account.accountNumber || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            accountDetails: {
              ...account,
              accountNumber: e.target.value
            }
          })
        }
      />

      {/* ================= Guarantor Details ================= */}

      <h6 className="mt-3">Guarantor Details</h6>

      <input
        className="form-control mb-2"
        placeholder="Guarantor Name"
        value={guarantor.guarantorName || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            guarantorDetails: {
              ...guarantor,
              guarantorName: e.target.value
            }
          })
        }
      />

      <input
        type="date"
        className="form-control mb-2"
        value={guarantor.guarantorDateOfBirth || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            guarantorDetails: {
              ...guarantor,
              guarantorDateOfBirth: e.target.value
            }
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Relationship With Customer"
        value={guarantor.guarantorRelationshipwithCustomer || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            guarantorDetails: {
              ...guarantor,
              guarantorRelationshipwithCustomer: e.target.value
            }
          })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Guarantor Mobile Number"
        value={guarantor.guarantorMobileNumber || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            guarantorDetails: {
              ...guarantor,
              guarantorMobileNumber: Number(e.target.value)
            }
          })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Guarantor Aadhar Card Number"
        value={guarantor.guarantorAdharCardNo || ""}
        onChange={(e) =>
          setRegistration({
            ...registration,
            guarantorDetails: {
              ...guarantor,
              guarantorAdharCardNo: Number(e.target.value)
            }
          })
        }
      />

      <div className="d-flex justify-content-between mt-3">
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

export default AccountGuarantor;
