import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onLogin(data) {
    localStorage.setItem("user", JSON.stringify(data));
    console.log("Login :", data.usertype);
    alert("Login successful!");
    navigate("/dashboard");
  }

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>

      {/* Login Card */}
      <div className="container position-relative px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="card shadow-lg p-4">
              <h3 className="fw-bold text-center mb-2">Login</h3>
              <p className="text-center text-muted mb-4">
                Access your dashboard securely
              </p>

              <form onSubmit={handleSubmit(onLogin)}>
                <div className="mb-3">
                  <input className="form-control"placeholder="Username"{...register("username")}/>
                </div>

                <div className="mb-3">
                  <input type="password"className="form-control"placeholder="Password"{...register("password")}/>
                </div>

                <div className="mb-4">
                  <select className="form-select" {...register("usertype")}>
                    <option value="">Select Role</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="CRM">CRM</option>
                    <option value="OE">OE</option>
                  </select>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
