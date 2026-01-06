import React, { useEffect, useState } from "react";
import axios from "axios";

function CibilCheck() {

  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1111/enquiry/display")
      .then((res) => {
        // Fetch only FORWARDED_TO_OE enquiries
        const forwarded = res.data.filter(
          (item) => item.loanStatus === "FORWARDED_TO_OE"
        );
        setEnquiries(forwarded);
      })
      .catch((err) => {
        console.error("Error fetching enquiries:", err);
      });
  }, []);

  const checkCibil = (customerId) => {
    setLoadingId(customerId);
    setSelectedEnquiry(null);

    axios.put(`http://localhost:1111/enquiry/updatecibil/${customerId}`)
      .then((res) => {
        setSelectedEnquiry(res.data);
      })
      .catch((err) => {
        console.error("Error updating CIBIL:", err);
      })
      .finally(() => {
        setLoadingId(null);
      });
  };

  return (
    <div className="container-fluid min-vh-100 p-4 bg-light">

      <h4 className="text-center mb-4 text-primary">
        CIBIL Check – Forwarded Enquiries
      </h4>

      <div className="card shadow-lg">
        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Customer ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Loan Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.length > 0 ? (
                  enquiries.map((item) => (
                    <tr key={item.customerId}>
                      <td>{item.customerId}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.mobileNo}</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          {item.loanStatus}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => checkCibil(item.customerId)}
                          disabled={loadingId === item.customerId}
                        >
                          {loadingId === item.customerId
                            ? "Checking..."
                            : "Check CIBIL"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No Forwarded Enquiries Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* CIBIL Result Card */}
          {selectedEnquiry && (
            <div className="card mt-4 border-primary">
              <div className="card-header bg-primary text-white">
                CIBIL Result (Customer ID: {selectedEnquiry.customerId})
              </div>
              <div className="card-body">
                <p><b>Name:</b> {selectedEnquiry.firstName} {selectedEnquiry.lastName}</p>
                <p><b>Email:</b> {selectedEnquiry.email}</p>
                <p><b>Mobile:</b> {selectedEnquiry.mobileNo}</p>
                <p><b>CIBIL Score:</b> 
                  <span className="ms-2 badge bg-info">
                    {selectedEnquiry.cibilScore}
                  </span>
                </p>
                <p>
                  <b>Loan Status:</b>{" "}
                  <span className="badge bg-success">
                    {selectedEnquiry.loanStatus}
                  </span>
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default CibilCheck;
