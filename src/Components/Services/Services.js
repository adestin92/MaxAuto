import './Services.css';

const ServicesProducts = () => {
  return (
    <section className="services-products" data-testid="service">
      <div>
        {/* Description of the services offered or products available */}
        <h1>Our Services</h1>
        <div className="services">
          <div className="service-items">
            <img
              className="service-logo"
              alt="battery logo"
              src="./Logos/battery.png"
            ></img>
            <li>Electrical Diagnosis/Repair</li>
            <li>Batteries</li>
            <li>Alternator Repair</li>
            <li>Spark Plugs/Fuse</li>
          </div>

          <div className="service-items">
            <img
              className="service-logo"
              src="./Logos/tire.png"
              alt="tire logo"
            ></img>
            <li>Brake Repair/inspection</li>
            <li>Suspension/Steering Repair</li>
            <li>Wheel alignment</li>
            <li>Tire rotation</li>
          </div>

          <div className="service-items">
            <img
              className="service-logo"
              src="./Logos/checklist.png"
              alt="maintnance logo"
            ></img>
            <li>Air Conditioning Service</li>
            <li>Maintenance Inspections</li>
            <li>Oil Change</li>
            <li>Tune Up</li>
          </div>

          <div className="service-items">
            <img
              className="service-logo"
              src="./Logos/diagnostic.png"
              alt="diag logo"
            ></img>
            <li>Mufflerss</li>
            <li>Engine Replacement</li>
            <li>Transmission Service</li>
            <li>Fuel Injection</li>
          </div>
        </div>
        <div>
          <img
            className="car-logo"
            src="./cars/dodge-logo.webp"
            alt="Dodge Logo"
          ></img>
          <img
            className="car-logo"
            src="./cars/ford-logo.webp"
            alt="ford logo"
          ></img>
          <img
            className="car-logo"
            src="./cars/honda-logo.webp"
            alt="honda logo"
          ></img>
          <img
            className="car-logo"
            src="./cars/subaru-logo.webp"
            alt="subaru logo"
          ></img>
          <img
            className="car-logo"
            src="./cars/toyota-logo.webp"
            alt="toyota logo"
          ></img>
          <img
            className="car-logo"
            src="./cars/mazda-logo.webp"
            alt="mazda-logo"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default ServicesProducts;
