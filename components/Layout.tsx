import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div className='relative'>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
