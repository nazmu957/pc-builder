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
      {/* <Card
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
      </Card> */}
      <div style={{ margin: "2rem" }} className="card w-96 glass">
        <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "1rem" }}>
          Components Details
        </h1>
        <figure>
          <img
            style={{ width: "30rem", height: "40rem" }}
            src={product?.image_url}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <h3>Category: {product?.category}</h3>
          <h3>Price: {product?.price}</h3>
          <h3>Status: {product?.status}</h3>
          <h3>Rating: {product?.rating}</h3>
        </div>
      </div>

      <MultiProducts moreProducts={moreProducts} />
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-ruddy.vercel.app/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-ruddy.vercel.app/products/${params.productId}`
  );
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      product: data,
    },
  };
};
