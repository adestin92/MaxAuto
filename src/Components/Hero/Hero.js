import './Hero.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero" data-testid="hero">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Driven by Excellence, Fueled by Expertise</h1>
          <p>
            At Max Auto Repair, we promise to always provide value and
            outstanding service, regardless of repair size or difficulty.
          </p>
          <div className="address">
            <img src="./icons/pin_drop.svg"></img>
            <p>545 E Max Ave, Worcestershire, MA 16033</p>
          </div>
          <div className="address">
            <img src="./icons/hours.svg"></img>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
          <div className="address-n">
            <img src="./icons/phone.svg"></img>
            <p>(774) 555-2222</p>
          </div>
        </div>
        <div className="image-container">
          <img
            className="hero-image"
            alt="picuture of mechanic working on car"
            src="./photos/pexels-gustavo-fring-6870319.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
