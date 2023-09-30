import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllProducts from "@/components/UI/AllProducts";
import AllCategories from "@/components/UI/AllCategories";
import MainCategories from "@/components/UI/MainCategories";
import { useGetCategoriesQuery } from "@/redux/api/api";
import axios from "axios";

const PcBuilderPage = ({ allProducts, allCategories }) => {
  console.log(allProducts);

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
     
      <MainCategories allCategories={allCategories} />
    </>
  );
};
export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  try {
    const apiUrl1 = "https://pc-builder-server-ruddy.vercel.app/products";
    const apiUrl2 = "https://pc-builder-server-ruddy.vercel.app/categories";

    const [data1, data2] = await axios.all([
      axios.get(apiUrl1),
      axios.get(apiUrl2),
    ]);

    console.log(data1.data, data2.data);

    return {
      props: {
        allProducts: data1.data,
        allCategories: data2.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error as needed
    return {
      props: {
        allProducts: [],
        allCategories: [],
      },
    };
  }
};

// export const getStaticProps = async () => {
//   const res = await fetch("https://pc-builder-server-ruddy.vercel.app/products");
//   // const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       allProducts: data,
//     },
//     revalidate: 10,
//   };
// };
