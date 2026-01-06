import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


function Enquiry() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    console.log("Enquiry Submitted:", data);
    alert("Your enquiry has been submitted!");
    reset();
  }
function EnquiryDetails(data){
        axios.post('http://localhost:1111/enquiry/save' ,data).then(
          res=>{
            if(res.status===201)
            {
              alert("Data Added Successfully...")
              reset();
            }
            else{
              alert("Something went Wrong...")
            }
          }
        ).catch(error=>{
          console.log(error)
          alert("Something went wrong...")
        })
      }
  ;
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>

     
      <div className="container position-relative px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <h3 className="fw-bold text-center mb-2">Loan Enquiry</h3>
              <p className="text-center text-muted mb-4">
                Submit your loan enquiry and get quick assistance
              </p>

              <form onSubmit={handleSubmit(EnquiryDetails)}>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <input className="form-control"{...register("firstName")} placeholder="First Name"/>
                  </div>
                  <div className="col-md-6">
                    <input className="form-control"{...register("lastName")}placeholder="Last Name"/>
                  </div>
                </div>

                
                <div className="mt-3">
                  <input type="number"className="form-control"{...register("age")}placeholder="Age"/>
                </div>

                
                <div className="mt-3">
                  <label className="form-label">Gender</label>
                  <div className="d-flex flex-wrap gap-3">
                    {["Male", "Female", "Other"].map((g) => (
                      <div className="form-check" key={g}>
                        <input className="form-check-input" type="radio"value={g}{...register("gender")}/>
                        <label className="form-check-label">{g}</label>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="mt-3">
                  <input type="email" className="form-control"{...register("email")}placeholder="Email Address"/>
                </div>

                <div className="mt-3">
                  <input type="tel"className="form-control"{...register("mobileNo")}placeholder="Mobile Number"/>
                </div>

                
                <div className="mt-3">
                  <input className="form-control"{...register("aadharNo")}placeholder="Aadhar Number"/>
                </div>

                <div className="mt-3">
                  <input className="form-control"{...register("panNo")}placeholder="PAN Number"/>
                </div>

                <div className="mt-3">
                  <input className="form-control"{...register("employeeType")}placeholder="Employee Type"/>
                </div>

                
                <div className="mt-4">
                  <button className="btn btn-primary w-100 py-2">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
