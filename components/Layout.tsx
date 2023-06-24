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

  console.log('cat', categories) 
  return (
    <>
      <NavBar categories={categories} />
      {children}
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const query = `*[_type == "category"]{
    title,
    description, 
    slug
  }`;

  sanityClient.fetch(query)
  .then((result) => {
    console.log(result);
    return { categories: result };
  })
  .catch((error) => {
    console.error(error);
  });
}

export default Layout;
