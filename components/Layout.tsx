import React from "react";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
