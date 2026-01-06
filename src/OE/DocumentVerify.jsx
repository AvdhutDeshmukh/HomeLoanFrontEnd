import React, { useEffect, useState } from "react";
import axios from "axios";

function DocumentVerify() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1111/enquiry/display")
      .then((res) => {
        
        const filtered = res.data.filter(
          (e) => e.loanStatus === "DOCUMENT_SUBMITTED"
        );
        setEnquiries(filtered);
      })
      .catch((err) => console.error("Error fetching enquiries:", err));
  }, []);

  const verifyDocument = (customerId) => {
    axios
      .put(`http://localhost:2222/oe/docVerified/${customerId}`)
      .then(() => {
        alert("Documents Verified Successfully");

        // remove verified enquiry from OE list
        setEnquiries((prev) =>
          prev.filter((e) => e.customerId !== customerId)
        );
      })
      .catch(() => alert("Verification failed"));
  };

  const rejectDocument = (customerId) => {
    const remark = prompt("Enter rejection remark");
    if (!remark) return;

    axios
      .put(
        `http://localhost:2222/oe/docRejected/${customerId}?remark=${remark}`
      )
      .then(() => {
        alert("Documents Rejected");

        // remove rejected enquiry from OE list
        setEnquiries((prev) =>
          prev.filter((e) => e.customerId !== customerId)
        );
      })
      .catch(() => alert("Rejection failed"));
  };

  return (
    <div className="container mt-3">
      <h4 className="text-center mb-3">
        OE – Document Verification
      </h4>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Loan Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length > 0 ? (
              enquiries.map((e) => (
                <tr key={e.customerId}>
                  <td>{e.customerId}</td>
                  <td>{e.firstName} {e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.mobileNo}</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      {e.loanStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => verifyDocument(e.customerId)}
                    >
                      Verify
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => rejectDocument(e.customerId)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No DOCUMENT_SUBMITTED enquiries
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentVerify;
