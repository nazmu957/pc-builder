import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllProducts = ({ allProducts }) => {
  // console.log(allProducts.data)
  const products = allProducts.data
  console.log(products)
  

  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
         Products
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
          <Col key={product.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <h3>Product Name: {product?.title}</h3>
              <h3>Category: {product?.category}</h3>
              <h3>Price: {product?.price}</h3>
              <h3>Status: {product?.status}</h3>
              <h3>Rating: {product?.rating}</h3>

              

             
              <Link href={`/products/${product?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  More Detail
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  
  );
};

export default AllProducts;

