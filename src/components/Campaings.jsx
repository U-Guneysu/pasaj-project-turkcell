import "../styles/campaings.css";
import "../styles/section.css";

const Campaings = ({ campaings = [] }) => {
    if (campaings.length < 3) return null;

    const [campaing1, campaing2, campaing3] = campaings;

    return (
      <div className="container-main py-3">
        <div className="campaings-inner px-3">
          <h2 className="section-title">Kampanyalar</h2>
          <div className="row campaings-wrapper">
            <div className="col-md-8 d-flex flex-column gap-3">
              <img
                src={campaing1.image}
                alt={campaing1.name}
                className="img-fluid rounded"
              />
              <img
                src={campaing2.image}
                alt={campaing2.name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-4">
              <img
                src={campaing3.image}
                alt={campaing3.name}
                className="img-fluid rounded h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Campaings;