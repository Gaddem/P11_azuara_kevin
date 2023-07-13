import React from "react";
import "./StyleLayout.css";
import CompHeader from "../components/Header/CompHeader";
import CompFooter from "../components/Footer/CompFooter";

const Layout = ({ children }) => {
  return (
    <div className="layout_container">
      <div className="layout_incontainer">
        <CompHeader />
        {children}
      </div>
      <CompFooter />
    </div>
  );
};

export default Layout;
