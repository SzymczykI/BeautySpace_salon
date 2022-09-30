import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
