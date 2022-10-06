import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getEnabledCategories } from "trace_events";
import About from "../components/About";
import Academy from "../components/Academy";
import CTA from "../components/CTA";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import { sanityClient, urlFor } from "../sanity";
import { Props } from "../types";

const Home = ({ categories }: Props) => {

  return (
    <div>
      <Head>
        <title>Paulina Szymczyk Beauty Space</title>
        <meta
          name="description"
          content="Beauty Space - salon kosmetyczny w Lublinie"
        />
      </Head>
      <Header />
      <About />
      <Academy />
      <CTA />
      <Testimonials />
    </div>
  );
};



export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "category"]{
    title,
    description, 
    slug
  }`;

  const categories = await sanityClient.fetch(query);
  return {
    props: {
      categories,
    },
  };
};