import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="component">
        { children }
      </div>
      <Footer />
    </>
  );
};

export default Layout;
