import "./HeroBanner.scss";
const HeroBanner = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="banner">
          <span className="shadow" />
        </div>
        <div className="content-container">
          <span className="line" />
          <h1>
            BETTER FUTURE
            <br />
            <span>FOR YOU KID.</span>
          </h1>
          <button>EXPLORE MORE</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
