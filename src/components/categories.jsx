import { populerCategories } from "../data/categoryData";
import "./category.css";

const Category = () => {
    return (
      <div className="category-container">
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
          <h2 className="text-2xl font-bold mb-4">Popüler Kategoriler</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {populerCategories.map((category) => (
              <div
                key={category.id}
                className="category-item"
              >
                <img
                  src={category.image}
                  alt={category.name}
                />
                <span className="font-medium text-gray-800">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Category;