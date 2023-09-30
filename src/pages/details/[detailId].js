import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const DetailPage = ({ detail }) => {
  console.log(detail);

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        // cover={<img alt="example" src={product?.image_url} />}
      >
        <img src={detail?.image_url} alt="" />
        <h3>Category: {detail?.name}</h3>
        <h3>Category: {detail?.description}</h3>
      </Card>
    </div>
  );
};

export default DetailPage;

DetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-ruddy.vercel.app/details");
  const details = await res.json();

  const paths = details?.data?.map((detail) => ({
    params: { detailId: detail.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-ruddy.vercel.app/details/${params.detailId}`
  );
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      detail: data,
    },
  };
};
