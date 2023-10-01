import { Card, Row, Col } from "antd";
import { useGetCategoriesQuery } from "@/redux/api/api";
import Link from "next/link";

const AllCategories = ({ allCategories }) => {
  const categories = allCategories.data;

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Featured Products
      </h1>
      <Row style={{ marginBottom: "2.5rem"}} gutter={[16, 16]}>
        {categories.map((category) => (
          <Col xs={24} sm={12} md={8} lg={6} key={category.id}>
            <Link href={`/categories/${category?.id}`}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,5,13,1) 0%, rgba(12,35,86,1) 96%)", // Specify your gradient colors here
                  color: "white",
                  border: "none",
                }}
              >
                <h1 style={{ fontSize: "1.2rem"}} >{category.category}</h1>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllCategories;
