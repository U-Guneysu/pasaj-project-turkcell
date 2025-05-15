import { populerCategories } from "../data/categoryData";
import "../styles/category.css";
import "../styles/main.css";
import "../styles/section.css";

const Category = () => {
    return (
      <div className="container-main">
        <div className="category-container">
          <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
            <h2 className="section-title">Popüler Kategoriler</h2>
            <div className="flex flex-wrap justify-center">
              {populerCategories.map((category) => (
                <div
                  key={category.id}
                  className="category-item category-image-container"
                >
                  <img src={category.image} alt={category.name} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Category;