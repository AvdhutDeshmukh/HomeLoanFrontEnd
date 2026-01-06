import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function LoanMultiStepForm() {
  const { customerId } = useParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // ------------------ Registration Data ------------------
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    mobileNo: "",
    gender: "",
    aadharNo: "",
    panNo: "",
    employeeType: "",
    customerDateOfBirth: "",
    requiredTenure: 0,
    customerAdditionalMobileNumber: "",
    customerAmountPaidForHome: 0,
    customerTotalLoanRequired: 0,
    loanStatus: "APPLIED",
    familydependentInfo: {},
    customerAddress: {},
    accountdetails: {},
    gurantordetails: {},
    allpersonalDocument: {}
  });

  const [documents, setDocuments] = useState({
    addressProof: null,
    panCard: null,
    incomeTax: null,
    aadharCard: null,
    photo: null,
    signature: null,
    bankCheque: null,
    salarySlips: null
  });

  // ------------------ Step Handlers ------------------
  const submitStep1 = async () => {
    try {
      setLoading(true);
      await axios.post(
        `http://localhost:3333/register/save/${customerId}`,
        registration
      );
      setStep(2);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to save registration");
    } finally {
      setLoading(false);
    }
  };

  const submitStep2 = async () => {
    setStep(3);
  };

  const submitStep3 = async () => {
    setStep(4);
  };

  const submitStep4 = async () => {
    setStep(5);
  };

  const submitStep5 = async () => {
    setStep(6);
  };

  const submitStep6 = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("registration", JSON.stringify(registration));
      Object.entries(documents).forEach(([key, file]) => {
        if (file) formData.append(key, file);
      });
      await axios.post(
        `http://localhost:3333/register/post/${customerId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setStep(7);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to upload documents");
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Render Form Steps ------------------
  return (
    <div className="container mt-4">
      <h4 className="text-center">Home Loan Multi-Step Form</h4>

      {step === 1 && (
        <div className="card p-4">
          <h5>Step 1: Personal Details</h5>
          <input placeholder="First Name" className="form-control mb-2"
            value={registration.firstName}
            onChange={e => setRegistration({...registration, firstName: e.target.value})}/>
          <input placeholder="Last Name" className="form-control mb-2"
            value={registration.lastName}
            onChange={e => setRegistration({...registration, lastName: e.target.value})}/>
          <input placeholder="Age" type="number" className="form-control mb-2"
            value={registration.age}
            onChange={e => setRegistration({...registration, age: Number(e.target.value)})}/>
          <input placeholder="Email" className="form-control mb-2"
            value={registration.email}
            onChange={e => setRegistration({...registration, email: e.target.value})}/>
          <input placeholder="Mobile No" className="form-control mb-2"
            value={registration.mobileNo}
            onChange={e => setRegistration({...registration, mobileNo: Number(e.target.value)})}/>
          <input placeholder="Gender" className="form-control mb-2"
            value={registration.gender}
            onChange={e => setRegistration({...registration, gender: e.target.value})}/>
          <input placeholder="Aadhar No" className="form-control mb-2"
            value={registration.aadharNo}
            onChange={e => setRegistration({...registration, aadharNo: e.target.value})}/>
          <input placeholder="PAN No" className="form-control mb-2"
            value={registration.panNo}
            onChange={e => setRegistration({...registration, panNo: e.target.value})}/>
          <input placeholder="Employee Type" className="form-control mb-2"
            value={registration.employeeType}
            onChange={e => setRegistration({...registration, employeeType: e.target.value})}/>
          <input placeholder="Date of Birth" type="date" className="form-control mb-2"
            value={registration.customerDateOfBirth}
            onChange={e => setRegistration({...registration, customerDateOfBirth: e.target.value})}/>
          <button className="btn btn-success mt-2" onClick={submitStep1} disabled={loading}>
            {loading ? "Saving..." : "Next"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="card p-4">
          <h5>Step 2: Loan Details</h5>
          <input placeholder="Required Tenure" type="number" className="form-control mb-2"
            value={registration.requiredTenure}
            onChange={e => setRegistration({...registration, requiredTenure: Number(e.target.value)})}/>
          <input placeholder="Additional Mobile Number" className="form-control mb-2"
            value={registration.customerAdditionalMobileNumber}
            onChange={e => setRegistration({...registration, customerAdditionalMobileNumber: e.target.value})}/>
          <input placeholder="Amount Paid For Home" type="number" className="form-control mb-2"
            value={registration.customerAmountPaidForHome}
            onChange={e => setRegistration({...registration, customerAmountPaidForHome: Number(e.target.value)})}/>
          <input placeholder="Total Loan Required" type="number" className="form-control mb-2"
            value={registration.customerTotalLoanRequired}
            onChange={e => setRegistration({...registration, customerTotalLoanRequired: Number(e.target.value)})}/>
          <button className="btn btn-primary mt-2" onClick={submitStep2}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="card p-4">
          <h5>Step 3: Dependent Information</h5>
          {/* Add dependent fields like name, relationship, age, etc. */}
          <input placeholder="Dependent Name" className="form-control mb-2"
            onChange={e => setRegistration({...registration, familydependentInfo: {...registration.familydependentInfo, name: e.target.value}})}/>
          <button className="btn btn-primary mt-2" onClick={submitStep3}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div className="card p-4">
          <h5>Step 4: Address</h5>
          <input placeholder="Street" className="form-control mb-2"
            onChange={e => setRegistration({...registration, customerAddress: {...registration.customerAddress, street: e.target.value}})}/>
          <input placeholder="City" className="form-control mb-2"
            onChange={e => setRegistration({...registration, customerAddress: {...registration.customerAddress, city: e.target.value}})}/>
          <button className="btn btn-primary mt-2" onClick={submitStep4}>Next</button>
        </div>
      )}

      {step === 5 && (
        <div className="card p-4">
          <h5>Step 5: Account & Guarantor</h5>
          <input placeholder="Account Number" className="form-control mb-2"
            onChange={e => setRegistration({...registration, accountdetails: {...registration.accountdetails, accountNumber: e.target.value}})}/>
          <input placeholder="Guarantor Name" className="form-control mb-2"
            onChange={e => setRegistration({...registration, gurantordetails: {...registration.gurantordetails, name: e.target.value}})}/>
          <button className="btn btn-primary mt-2" onClick={submitStep5}>Next</button>
        </div>
      )}

      {step === 6 && (
        <div className="card p-4">
          <h5>Step 6: Upload Documents</h5>
          {Object.keys(documents).map((key) => (
            <div className="mb-2" key={key}>
              <label>{key}</label>
              <input type="file" onChange={e => setDocuments({...documents, [key]: e.target.files[0]})}/>
            </div>
          ))}
          <button className="btn btn-success mt-2" onClick={submitStep6}>Submit Application</button>
        </div>
      )}

      {step === 7 && (
        <div className="alert alert-success text-center">
          <h5>Application Submitted Successfully 🎉</h5>
          <p>Status: DOCUMENT_SUBMITTED</p>
        </div>
      )}
    </div>
  );
}

export default LoanMultiStepForm;
