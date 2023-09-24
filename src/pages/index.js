import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllProducts from "@/components/UI/AllProducts";



const HomePage = ({ allProducts}) => {
  console.log(allProducts);
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
      <Banner />
      <AllProducts allProducts={allProducts} />
      
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {

//   if(typeof window === 'undefined') {
//     return {
//     props: {
//       allProducts: [],
//     },
    
//    };
// }
  
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);
  
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
   };
};
