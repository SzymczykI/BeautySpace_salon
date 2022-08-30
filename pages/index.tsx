import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paulina Szymczyk Beauty Space</title>
        <meta name="description" content="Beauty Space - salon kosmetyczny w Lublinie" />
      </Head>
      
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = [""];

  return {
    props: {
      data
    },
    revalidate: 4 * 60 * 60
  }
}