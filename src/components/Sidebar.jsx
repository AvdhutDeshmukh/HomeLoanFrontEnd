// import React from "react";
// import { Link } from "react-router-dom";

// function Sidebar({ usertype }) {
//   return (
//     <>
//       {/* Top Navbar (Mobile Toggle Button) */}
//       <nav className="navbar navbar-dark bg-dark d-md-none">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#roleSidebar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <span className="navbar-brand">{usertype} Panel</span>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div
//         className="offcanvas offcanvas-start d-md-flex bg-dark text-white p-3"
//         tabIndex="-1"
//         id="roleSidebar"
//         style={{ width: "250px", minHeight: "100vh" }}
//       >
//         <h5 className="text-center">{usertype} Panel</h5>
//         <hr />

//         {/* CRM MENU */}
//         {usertype === "CRM" && (
//           <>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/enquiry">Enquiry</Link>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewenquiry">View Enquiry</Link>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewapprovedenquiry">Approved Enquiry</Link>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewrejectedenquiry">Rejected Enquiry</Link>
//           </>
//         )}

//         {/* OE MENU */}
//         {usertype === "OE" && (
//           <>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/cibilcheck">CIBIL Check</Link>
//             <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/documentverify">Document Verify
//             </Link>
//           </>
//         )}

//         <hr />
//         <Link to="/login" className="btn btn-danger w-100">
//           Logout
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ usertype }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="navbar navbar-dark bg-dark d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">{usertype} Panel</span>
        </div>
      </nav>

      {/* Mobile Sidebar (Offcanvas) */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5>{usertype} Panel</h5>
          <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <SidebarMenu usertype={usertype} logout={logout} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="d-none d-md-block bg-dark text-white p-3 vh-100">
        <h5 className="text-center">{usertype} Panel</h5>
        <hr />
        <SidebarMenu usertype={usertype} logout={logout} />
      </div>
    </>
  );
}

function SidebarMenu({ usertype, logout }) {
  return (
    <>
      {usertype === "CRM" && (
        <>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/enquiry">Enquiry</Link>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewenquiry">View Enquiry</Link>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewapprovedenquiry">Approved Enquiry</Link>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/viewrejectedenquiry">Rejected Enquiry</Link>
        </>
      )}

      {usertype === "OE" && (
        <>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/cibilcheck">CIBIL Check</Link>
          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard/documentverify">Document Verify</Link>
        </>
      )}

      <hr />
      <button onClick={logout} className="btn btn-danger w-100">
        Logout
      </button>
    </>
  );
}

export default Sidebar;
