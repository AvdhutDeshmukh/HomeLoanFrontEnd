import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PersonalInfo from "./PersonalInfo";
import LoanDetails from "./LoanDetails";
import DependentInfo from "./DependentInfo";
import Address from "./Address";
import AccountGuarantor from "./AccountGuarantor";
import Documents from "./Documents";

function MultiStepForm() {
  const { customerId } = useParams();
  const [step, setStep] = useState(1);

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
    requiredTenure: "",
    customerAdditionalMobileNumber: "",
    customerAmountPaidForHome: "",
    customerTotalLoanRequired: "",
    loanStatus: "APPLIED",

    familyDependentInfo: {},

    customerAddress: {
      permanentAddress: {},
      localAddress: {}
    },

    accountDetails: {},
    guarantorDetails: {}
  });

  const [documents, setDocuments] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  
  const submitRegistration = async () => {
    const formData = new FormData();

    
    formData.append("registration", JSON.stringify(registration));

    
    Object.keys(documents).forEach((key) => {
      formData.append(key, documents[key]);
    });

    try {
      await axios.post(
        `http://localhost:3333/register/post/${customerId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Registration completed successfully");
    } catch (error) {
      console.error(error.response || error);
      alert("Registration failed");
    }
  };

  const stepProps = {
    registration,
    setRegistration,
    documents,
    setDocuments,
    nextStep,
    prevStep,
    submitRegistration
  };

  const progress = (step / 6) * 100;

  return (
    <div className="container mt-4">
      <h4 className="text-center">Home Loan Application</h4>

      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{ width: `${progress}%` }}>
          Step {step} of 6
        </div>
      </div>

      {step === 1 && <PersonalInfo {...stepProps} />}
      {step === 2 && <LoanDetails {...stepProps} />}
      {step === 3 && <DependentInfo {...stepProps} />}
      {step === 4 && <Address {...stepProps} />}
      {step === 5 && <AccountGuarantor {...stepProps} />}
      {step === 6 && <Documents {...stepProps} />}
    </div>
  );
}

export default MultiStepForm;
