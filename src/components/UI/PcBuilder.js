import Link from "next/link";

const PcBuilder = ({ category }) => {
  console.log(category);
  return (
    <Link href={`/categories/${category?.id}`}>
      <div className="card-container">
        <div
          style={{ margin: "5rem" }}
          className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{category?.category}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PcBuilder;


