import { useGetCategoriesQuery } from "@/redux/api/api";
import Link from "next/link";
import PcBuilderPage from "./PcBuilder";

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
        Pc Builder
      </h1>
      {categories.map((category) => (
       
        <PcBuilderPage key={category.id} category={category} />
      ))}
    </>
  );
};

export default AllCategories;
