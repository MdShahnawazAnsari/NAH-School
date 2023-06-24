import "./Icons.scss";
const icons = [
  { name: "TRANSPORT", image: "/icons/icon1.PNG" },
  { name: "MEDICAL FACILITIES", image: "/icons/icon2.PNG" },
  { name: "LIBRARY", image: "/icons/icon3.PNG" },
  { name: "SPORTS", image: "/icons/icon4.PNG" },
  { name: "CLASSROOMS", image: "/icons/icon5.PNG" },
  { name: "LABS", image: "/icons/icon6.PNG" },
  { name: "CAFETERIA", image: "/icons/icon7.PNG" },
];

const Icons = () => {
  return (
    <div className="icons-container">
      <div className="heading">
        <h3>LOREM IPSUM</h3>
        <h2>INFRASTRUCTURE</h2>
      </div>
      <div className="icons">
        {icons.map((item) => (
          <div className="icon" key={item.image}>
            <div className="bg-image">
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
