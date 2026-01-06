import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewRejectedEnquiry() {

  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1111/enquiry/display')
      .then((res) => {
        
        const rejectedEnquiries = res.data.filter(
          (item) => item.loanStatus === 'REJECTED'
        );
        setEnquiries(rejectedEnquiries);
      })
      .catch((err) => {
        console.error("Error fetching enquiries:", err);
      });
  }, []);

  const viewByCustomerId = (customerId) => {
    axios.get(`http://localhost:1111/enquiry/${customerId}`)
      .then((res) => {
        setSelectedEnquiry(res.data);
      })
      .catch((err) => {
        console.error("Error fetching enquiry:", err);
      });
  };

  return (
    // <div className="container-fluid min-vh-100 p-4 bg-light">
      <div className="w-100 h-100 p-3">
      <h4 className="text-center mb-4 text-danger">Rejected Enquiries</h4>

      <div className="card shadow-lg">
        <div className="card-body">

          
          <div className="table-responsive">
            {/* <table className="table table-bordered table-striped"> */}
            <table className="table table-bordered table-striped w-100">
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
                  {/* <th>Action</th> */}
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
                        <span className="badge bg-danger">
                          {item.loanStatus}
                        </span>
                      </td>
                      <td>
                        {/* <button
                          className="btn btn-sm btn-primary"
                          onClick={() => viewByCustomerId(item.customerId)}
                        >
                          View
                        </button> */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="text-center">
                      No Rejected Enquiries Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

         
          {selectedEnquiry && (
            <div className="card mt-4 border-danger">
              <div className="card-header bg-danger text-white">
                Rejected Enquiry Details (Customer ID: {selectedEnquiry.customerId})
              </div>
              <div className="card-body">
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
      </div>

    </div>
  );
}

export default ViewRejectedEnquiry;
