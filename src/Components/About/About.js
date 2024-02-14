import './About.css';

const AboutUs = () => {
  return (
    <section className="features-benefits" data-testid="about">
      <div>
        <h1>Why Choose Us?</h1>
        <div className="why-choose-us-1">
          <img
            className="choose-us"
            alt="mechanic smiling with thumbs up"
            src="./photos/pexels-gustavo-fring-6870320.jpg"
          ></img>
          <div className="the-why">
            <div className="care-title">
              <img
                className="care-logo"
                alt="clean car"
                src="./Logos/car-wash.png"
              ></img>
              <h1>We Love Our Job</h1>
            </div>

            <p>
              Our mechanics come to work smiling and are happy to turn a wrench.
              They have a passion for auto repair and are fully qualified to
              work on your car.
            </p>
          </div>
        </div>
        <div className="why-choose-us-2">
          <div className="the-why">
            <div className="care-title">
              <img
                className="care-logo"
                alt="heartbeat"
                src="./Logos/heartbeat.png"
              ></img>
              <h1>Expert Care</h1>
            </div>
            <p>
              The right care extends the life of any car or truck. We bring
              advanced techniques and cutting-edge diagnostics to the table
              every time.
            </p>
          </div>
          <img
            className="choose-us"
            alt="mechanic working on a suspended car"
            src="./photos/pexels-artem-podrez.jpg"
          ></img>
        </div>
        <div className="why-choose-us-3">
          <img
            className="choose-us"
            alt="mechanic working on the engine of car"
            src="./photos/pexels-artem-podre.jpg"
          ></img>
          <div className="the-why">
            <div className="care-title">
              <img
                className="care-logo"
                alt="trust"
                src="./Logos/handshake.png"
              ></img>
              <h1>Our Promise</h1>
            </div>
            <p>
              At Max Auto Repair, we promise to always provide value and
              outstanding service, regardless of repair size or difficulty.Your
              car or truck is in the best of hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
