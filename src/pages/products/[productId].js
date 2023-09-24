import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";
import MultiProducts from "@/components/UI/MultiProducts";
const { Meta } = Card;

const ProductDetailPage = ({ product }) => {
  const moreProducts = product.features;
  console.log(moreProducts);
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={product?.image_url} />}
      >
        <Meta title={product.title} />
        <h3>Category: {product?.category}</h3>
        <h3>Price: {product?.price}</h3>
        <h3>Status: {product?.status}</h3>
        <h3>Rating: {product?.rating}</h3>
      </Card>
     <MultiProducts moreProducts={moreProducts} />
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));


  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      product: data,
    },
  };
};

