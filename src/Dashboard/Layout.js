import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import GeneralApp from "../Components/GeneralApp";

function Layout() {
  return (
    <div>
      <Dashboard />
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generalApp" element={<GeneralApp />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
