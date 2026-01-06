import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Enquiry from "../CRM/Enquiry";
import ViewEnquiry from "../CRM/ViewEnquiry";
import ViewApprovedEnquiry from "../CRM/ViewApprovedEnquiry";
import ViewRejectedEnquiry from "../CRM/ViewRejectedEnquiry";
import CibilCheck from "../OE/CibilCheck";
import DocumentVerify from "../OE/DocumentVerify";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container-fluid">
      <div className="row">

        
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar usertype={user.usertype} />
        </div>

        
        <div className="col-md-9 col-lg-10 p-0">

          
          <div className="bg-light border-bottom px-4 py-3">
            <h5 className="mb-0">{user.usertype} Dashboard</h5>
          </div>

          
          <div className="p-4">
            <Routes>
              {user.usertype === "CRM" && (
                <>
                  <Route path="enquiry" element={<Enquiry />} />
                  <Route path="viewenquiry" element={<ViewEnquiry />} />
                  <Route path="viewapprovedenquiry" element={<ViewApprovedEnquiry />} />
                  <Route path="viewrejectedenquiry" element={<ViewRejectedEnquiry />} />
                </>
              )}

              {user.usertype === "OE" && (
                <>
                  <Route path="cibilcheck" element={<CibilCheck />} />
                  <Route path="documentverify" element={<DocumentVerify />} />
                </>
              )}
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
