import { useGetCategoriesQuery } from "@/redux/api/api";
import Link from "next/link";

const AllCategories = ({ allCategories }) => {
  console.log(allCategories.data);
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
        Fetured Products
      </h1>
      {categories.map((category) => (
        <Link
          className="btn"
          key={category.id}
          href={`/categories/${category?.id}`}
        >
          {category.category}{" "}
        </Link>
      ))}
    </>
  );
};

export default AllCategories;

