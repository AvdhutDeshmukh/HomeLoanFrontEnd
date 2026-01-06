
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Documents({ documents, setDocuments, prevStep, submitRegistration }) {
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const documentList = [
    { key: "addressProof", label: "Address Proof" },
    { key: "panCard", label: "PAN Card" },
    { key: "incomeTax", label: "Income Tax Return" },
    { key: "aadharCard", label: "Aadhar Card" },
    { key: "photo", label: "Passport Size Photo" },
    { key: "signature", label: "Signature" },
    { key: "bankCheque", label: "Cancelled Bank Cheque" },
    { key: "salarySlips", label: "Salary Slips" },
  ];

  const handleSubmit = () => {
    const missing = documentList
      .filter((doc) => !documents[doc.key])
      .map((doc) => doc.label);

    if (missing.length > 0) {
      setError(`Please upload all documents. Missing: ${missing.join(", ")}`);
      return;
    }

    setError("");
    submitRegistration();

    navigate("/");
  };

  const handleFileChange = (e, key) => {
    setDocuments({ ...documents, [key]: e.target.files[0] });
  };

  return (
    <div className="card p-4">
      <h5>Step 6: Upload Documents</h5>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showPreview ? (
        <>
          {documentList.map((doc) => (
            <div className="mb-3" key={doc.key}>
              <label className="form-label fw-bold">{doc.label}</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleFileChange(e, doc.key)}
              />
              {documents[doc.key] && (
                <small className="text-success">
                  Selected: {documents[doc.key].name}
                </small>
              )}
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={prevStep}
            >
              Previous
            </button>
            <div>
              <button
                type="button"
                className="btn btn-info me-2"
                onClick={() => setShowPreview(true)}
              >
                Preview Form
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit Application
              </button>
            </div>
          </div>
        </>
      ) : (
        // Preview Section
        <div>
          <h6 className="mb-3">Preview Your Uploaded Documents:</h6>
          <ul className="list-group mb-3">
            {documentList.map((doc) => (
              <li className="list-group-item" key={doc.key}>
                <strong>{doc.label}:</strong>{" "}
                {documents[doc.key] ? documents[doc.key].name : "Not uploaded"}
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowPreview(false)}
            >
              Back to Edit
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;
