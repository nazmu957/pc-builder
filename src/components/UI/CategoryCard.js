import React from "react";
import { Button, Card } from "antd";
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
            src={product.image}
          />
        }
      >
        <Meta title={product?.name} description={product.category} />
        <p>price: {product?.price}</p>
        <p>ratting: {product?.rating}</p>
        <p>status: {product?.status}</p>
        <Button>Add To Builder</Button>
      </Card>
    </Link>
  );
};

export default CategoryCard;
