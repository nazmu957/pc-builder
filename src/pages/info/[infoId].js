import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const InfoPage = ({ info }) => {
  console.log(info);

  return (
    // <Card
    //   hoverable
    //   style={{
    //     width: 240,
    //   }}
    //   cover={<img alt="example" src={info.image} />}
    // >
    //   <Meta title={info.name} description={info?.description} />

    //   <p>Category: {info.category}</p>
    //   <p>Individual_Rating: {info.individual_rating}</p>
    //   <p>Average Rating: {info.rating}</p>
    //   <p>Key_Features: {info.key_features}</p>
    //   <p>Price:$ {info.price}</p>
    //   <p>Reviews: {info.reviews}</p>
    //   <p>Status: {info.status}</p>
    // </Card>
    <div style={{ margin: "2rem" }} className="card w-96 glass">
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "1rem"}}>Components Details</h1>
      <figure>
        <img
          style={{ width: "30rem", height: "40rem" }}
          src={info.image}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{info.name}</h2>
        <p>Category: {info.category}</p>
        <p>{info?.description}</p>
        <p>Individual_Rating: {info.individual_rating}</p>
        <p>Average Rating: {info.rating}</p>
        <p>Key_Features: {info.key_features}</p>
        <p>Price:$ {info.price}</p>
        <p>Reviews: {info.reviews}</p>
        <p>Status: {info.status}</p>
      </div>
    </div>
  );
};

export default InfoPage;

InfoPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-ruddy.vercel.app/info");
  const infos = await res.json();

  const paths = infos?.data?.map((info) => ({
    params: { infoId: info.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-ruddy.vercel.app/info/${params.infoId}`
  );
  const data = await res.json();

  return {
    props: {
      info: data,
    },
  };
};
