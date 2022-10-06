import { GetStaticProps } from "next";
import NavBar from "../../components/NavBar";
import { sanityClient, urlFor } from "../../sanity";
import { Service } from "../../types";

interface Props {
  service: Service;
}

const Service = ({ service }: Props) => {

  return <main></main>;
};

export default Service;

export const getStaticPaths = async () => {
  const query = `*[_type == "service"]{
    _id,
    slug {
        current
    }
}`;

  const services = await sanityClient.fetch(query);

  const paths = services.map((service: Service) => ({
    params: {
      slug: service.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    description,
images,
price
}`;

  const service = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
