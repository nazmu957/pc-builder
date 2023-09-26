import React from "react";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const CategoryCard = ({ product }) => {
  console.log(product);

  return (
    <Link href={`/info/${product?.id}`}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src=""
          />
        }
      >
        <Meta title={product?.name} description={product.category} />
      </Card>
    </Link>
  );
};

export default CategoryCard;
