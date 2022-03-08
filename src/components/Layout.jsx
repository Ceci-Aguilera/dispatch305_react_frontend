import React from "react";
import Footer from "./Footer";
import CustomNavbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <CustomNavbar />
      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
