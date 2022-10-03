import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import About from "../components/About";
import Academy from "../components/Academy";
import CTA from "../components/CTA";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export async function getStaticProps() {
  const data = [""];

  return {
    props: {
      data,
    },
    revalidate: 4 * 60 * 60,
  };
}
