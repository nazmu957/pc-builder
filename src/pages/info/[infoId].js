import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";
const { Meta } = Card;




const InfoPage = ({ info }) => {
  console.log(info)

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={info.image}
        />
      }
    >
      <Meta title={info.name} description={info?.description} />

      <p>Category: {info.category}</p>
      <p>Individual_Rating: {info.individual_rating}</p>
      <p>Average Rating: {info.rating}</p>
      <p>Key_Features: {info.key_features}</p>
      <p>Price:$ {info.price}</p>
      <p>Reviews: {info.reviews}</p>
      <p>Status: {info.status}</p>
    </Card>
  );
};

export default InfoPage;

InfoPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/info");
  const infos = await res.json();

  const paths = infos?.map((info) => ({
    params: { infoId: info.id },
  }));
 
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/info/${params.infoId}`);
  const data = await res.json();
   
  return {
    props: {
      info: data,
    },
  };
};
