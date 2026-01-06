import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark fw-bold fs-3" to="/home">HomeLoanApp</Link>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex flex-column flex-lg-row">
            <Link className="btn btn-dark m-1" to="/home">Home</Link>
            <Link className="btn btn-dark m-1" to="/about">About</Link>
            <Link className="btn btn-dark m-1" to="/contact">Contact</Link>
            <Link className="btn btn-dark m-1" to="/emicheck">EmiCheck</Link>
            <Link className="btn btn-dark m-1" to="/enquiry">Enquiry</Link>
            <Link className="btn btn-dark m-1" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
