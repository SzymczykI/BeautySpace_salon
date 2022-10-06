import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Category } from "../../types";

interface Props {
  category: Category;
}

const Category = ({}: Props) => {
  return <main></main>;
};

export default Category;

export const getStaticPaths = async () => {
  const query = `*[_type == "category"]{
    _id,
    slug {
        current
    }
}`;

  const categories = await sanityClient.fetch(query);

  const paths = categories.map((category: Category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "category" ]{
    _id,
    title,
    description,
    "relatedServices": *[_type=='service' && references(^._id)]{ 
      title,
      slug,
    }
}`;

  const category = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
};
