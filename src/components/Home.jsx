import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Home() {
  return (
    <div>
      
      <section
        className="py-5 text-white d-flex align-items-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581092795360-6c6c8c6e0a4c?auto=format&fit=crop&w=1950&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          position: "relative",
        }}
      >
        
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>

        <div className="container text-center position-relative">
          <h1 className="display-4 fw-bold">Welcome to HomeLoanApp</h1>
          <p className="lead mb-4">
            Simplifying home loans with EMI calculation, enquiries, and easy management.
          </p>
          <Link className="btn btn-light btn-lg me-2 mb-2" to="/emicheck">
            Check EMI
          </Link>
          <Link className="btn btn-outline-light btn-lg mb-2" to="/enquiry">
            Make an Enquiry
          </Link>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
           
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560184897-6aa0e4c9750e?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top transition-transform hover-zoom"
                    alt="EMI Calculator"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Easy EMI Calculation</h5>
                  <p>Calculate your EMIs instantly and plan your budget effectively.</p>
                  <Link className="btn btn-warning" to="/emicheck">
                    Go to EMI Calculator
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581093458412-2e4b04813b92?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top transition-transform hover-zoom"
                    alt="Quick Enquiry"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Quick Enquiry</h5>
                  <p>Submit a loan enquiry and get quick assistance from our team.</p>
                  <Link className="btn btn-warning" to="/enquiry">
                    Submit Enquiry
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top transition-transform hover-zoom"
                    alt="Secure Login"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Secure Login</h5>
                  <p>Login safely to manage your dashboard and loan details.</p>
                  <Link className="btn btn-warning" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
