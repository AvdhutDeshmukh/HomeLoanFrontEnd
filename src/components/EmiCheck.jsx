import React from "react";

function EMICheck() {
  return (
    <div>
      
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581094910907-f2f3c6e2e0f3?auto=format&fit=crop&w=1950&q=80")`,
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

        
        <div className="position-relative container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg p-4">
                <h3 className="card-title fw-bold text-center mb-3">EMI Calculator</h3>
                <p className="text-center mb-4">Calculate your monthly EMI easily</p>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Loan Amount</label>
                    <input type="number" className="form-control" placeholder="Enter amount" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Interest Rate (%)</label>
                    <input type="number" className="form-control" placeholder="Enter rate" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Loan Tenure (Years)</label>
                    <input type="number" className="form-control" placeholder="Enter tenure" />
                  </div>
                  <button type="submit" className="btn btn-warning w-100">
                    Calculate EMI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EMICheck;
