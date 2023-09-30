import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllProducts from "@/components/UI/AllProducts";
import AllCategories from "@/components/UI/AllCategories";
import { useGetCategoriesQuery } from "@/redux/api/api";

const ListPage = ({ category }) => {
  console.log(category);
  const lists = category.data;
  console.log(lists);

  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  const categories = data;
  return (
    <>
      <Head>
        <title>PC-Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllCategories lists={lists} />
    </>
  );
};
export default ListPage;

ListPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:5000/products");
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      category: data,
    },
    revalidate: 10,
  };
};
