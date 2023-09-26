import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";
import CategoryCard from "@/components/UI/CategoryCard";

const { Meta } = Card;

const CategoryDetailPage = ({ category }) => {
  
  const productCategories = category.products;
//   console.log(productCategories);

  
  return (
    <div>
      {productCategories?.map((product) => (
        
        <CategoryCard key={product.id} product={product} />

      ))}
    </div>
  );
};

export default CategoryDetailPage;

CategoryDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();

  const paths = categories?.map((category) => ({
    params: { categoryId: category.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/categories/${params.categoryId}`
  );
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      category: data,
    },
  };
};
