
import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllCategories = ({ categories }) => {
  console.log(categories);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Fetured Products
      </h1>
      {categories?.map((category) => (
        <Link className="btn" key={category.id} href={`/categories/${category?.id}`}>{category.category} </Link>
       
      ))}
    </>
  );
};

export default AllCategories;

