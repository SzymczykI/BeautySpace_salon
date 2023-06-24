import React, { ReactNode } from "react";
import { sanityClient } from "../sanity";
import { Category } from "../types";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
children: ReactNode,
categories: [Category]
}

const Layout = ({ children, categories }: Props) => {

  return (
    <>
      <NavBar  />
      {children}
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const categories = await sanityClient.fetch(`*[_type == "category"]`);

  return {
    props: {
      categories,
    },
  };
}

export default Layout;
