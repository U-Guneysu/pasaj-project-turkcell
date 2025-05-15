import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/slider.css";
import "../styles/main.css";
import "../styles/section.css";

const chunkSize = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

const PagedSlider = ({ title, products = [] }) => {
    const productGroups = chunkSize(products, 4); //Her sayfada 4 ürün gösterilecek

    return (
      <div className="container-main">
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
          <h2 className="section-title special">{title}</h2>

          <div
            id={`slider-${title.replace(/\s/g, "-")}`}
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-touch="true"
          >
            <div className="carousel-inner">
              {productGroups.map((group, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row w-100">
                    {group.map((product) => (
                      <div className="col-md-3" key={product.id}>
                        <div className="card">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#slider-${title.replace(/\s/g, "-")}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon custom-previous-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#slider-${title.replace(/\s/g, "-")}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon custom-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default PagedSlider;