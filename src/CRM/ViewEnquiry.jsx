import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1111/enquiry/display")
      .then((res) => setEnquiries(res.data))
      .catch((err) => console.error("Error fetching enquiries:", err));
  }, []);

  const viewByCustomerId = (customerId) => {
    axios
      .get(`http://localhost:1111/enquiry/${customerId}`)
      .then((res) => setSelectedEnquiry(res.data))
      .catch((err) => console.error("Error fetching enquiry:", err));
  };

  const forwardToOE = (customerId) => {
    axios
      .put(`http://localhost:1111/enquiry/ftoe/${customerId}`)
      .then((res) => {
        alert("Forwarded to OE successfully");

        
        setEnquiries((prev) =>
          prev.map((e) =>
            e.customerId === customerId ? res.data : e
          )
        );
      })
      .catch(() => {
        alert("Only PENDING enquiries can be forwarded");
      });
  };
  return (
    <div className="h-100 d-flex flex-column">

      
      <h4 className="text-center mb-3">Enquiry Details</h4>

      
      <div className="flex-grow-1 overflow-auto">
        <div className="table-responsive">
          <table className="table table-bordered table-striped w-100 text-nowrap">
            <thead className="table-dark">
              <tr>
                <th>Customer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Aadhar No</th>
                <th>PAN No</th>
                {/* <th>Employee Type</th> */}
                <th>LoanStatus</th>
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
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.aadharNo}</td>
                    <td>{item.panNo}</td>
                    {/* <td>{item.employeeType}</td> */}
                    <td>
                      <span className="badge bg-info">
                        {item.loanStatus}
                      </span>
                    </td>
                    <td>
                      {/* <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => viewByCustomerId(item.customerId)}
                      >
                        View
                      </button> */}
                      {/* <button
                        className="btn btn-sm btn-success"
                        onClick={() => viewByCustomerId(item.customerId)}
                      >
                        FTOE
                      </button> */}
                      <button className="btn btn-sm btn-success"
                              disabled={item.loanStatus !== "PENDING"}
                               onClick={() => forwardToOE(item.customerId)}
                      >
                             FTOE
                        </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center">
                    No Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      
      {selectedEnquiry && (
        <div className="card mt-3 border-success">
          <div className="card-header bg-success text-white">
            Enquiry Details (Customer ID: {selectedEnquiry.customerId})
          </div>
          <div
            className="card-body"
            style={{ maxHeight: "220px", overflowY: "auto" }}
          >
            <p><b>Name:</b> {selectedEnquiry.firstName} {selectedEnquiry.lastName}</p>
            <p><b>Age:</b> {selectedEnquiry.age}</p>
            <p><b>Gender:</b> {selectedEnquiry.gender}</p>
            <p><b>Email:</b> {selectedEnquiry.email}</p>
            <p><b>Mobile:</b> {selectedEnquiry.mobileNo}</p>
            <p><b>Aadhar:</b> {selectedEnquiry.aadharNo}</p>
            <p><b>PAN:</b> {selectedEnquiry.panNo}</p>
            {/* <p><b>Employee Type:</b> {selectedEnquiry.employeeType}</p> */}
            <p><b>Loan Status:</b> {selectedEnquiry.loanStatus}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default ViewEnquiry;