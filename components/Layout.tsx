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
