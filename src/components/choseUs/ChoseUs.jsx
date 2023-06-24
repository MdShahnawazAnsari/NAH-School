import "./ChoseUs.scss";
const ChoseUs = () => {
  return (
    <div className="choseus-container">
      <div className="bg-image">
        <div className="content">
          <p className="action-text">WHY CHOOSE US?</p>
          <h3 className="heading">LOREM IPSUM DOLOR SIT AMET</h3>
          <p className="sub-heading">
            One of the premier and most progressive educationl institutions in
            India! More about school
          </p>
          <button>EXPLORE MORE</button>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/table.png" alt="table image" />
        <div className="wall" />
      </div>
    </div>
  );
};

export default ChoseUs;
