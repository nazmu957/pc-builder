import { Card, Col, Image, Row } from "antd";

import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "@/styles/AllProducts.module.css";

const AllProducts = ({ allProducts }) => {
  const products = allProducts.data;

  const { Meta } = Card;
  return (
    <>
      <h1 className={styles.heading}>Products</h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
          <Col
            key={product.id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              hoverable
              className={styles.card}
              cover={
                <Image
                  src={product?.image_url}
                  layout="responsive"
                  
                  height={300}
                  alt="news image"
                />
              }
            >
              <h3 className={styles.title}>Product Name: {product?.title}</h3>
              <h3>Category: {product?.category}</h3>
              <h3>Price: {product?.price}</h3>
              <h3>Status: {product?.status}</h3>
              <h3>Rating: {product?.rating}</h3>
              <Link href={`/products/${product?.id}`}>
                <p className={styles.link}>More Detail</p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllProducts;
