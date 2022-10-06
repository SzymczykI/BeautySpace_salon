import React from "react";
import { sanityClient } from "../sanity";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children, categories }: any) => {
  return (
    <>
      <NavBar categories={categories} />
      {children}
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "category"]{
    title,
    description, 
    slug
  }`;

  const categories = await sanityClient.fetch(query);

  return {
    props: { categories },
  };
}

export default Layout;
