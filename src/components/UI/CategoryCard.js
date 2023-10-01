import React from "react";
// import { Button, Card } from "antd";
import Link from "next/link";
// const { Meta } = Card;

const CategoryCard = ({ product }) => {
  console.log(product);

  return (
    <>
      <Link href={`/info/${product?.id}`}>
        {/* <Card
        hoverable
        style={{
          width: "100%", // Set the width to 100% to make it responsive
          maxWidth: "300px", // Set a maximum width if you don't want it to expand infinitely
          margin: "0 auto", // Center the card on larger screens
        }}
        cover={
          <img
            alt="example"
            src={product.image}
            style={{
              width: "100%", // Make sure the image inside the card is also responsive
              height: "auto",
            }}
          />
        }
      >
        <Meta title={product?.name} description={product.category} />
        <p>price: {product?.price}</p>
        <p>rating: {product?.rating}</p>
        <p>status: {product?.status}</p>
        <Button>Add To Builder</Button>
      </Card> */}

        <div
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          className="card lg:card-side bg-base-100 shadow-xl "
        >
          <figure>
            <img
              style={{ width: "50rem", height: "30rem" }}
              src={product.image}
              alt="Products"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Name:{product?.name}</h2>
            <p>Category: {product.category}</p>
            <p>price: {product?.price}</p>
            <p>rating: {product?.rating}</p>
            <p>status: {product?.status}</p>
            <div className="card-actions justify-end">
              <Link href={"/pc_builder"}>
                <button className="btn btn-primary">Add To Builder</button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
