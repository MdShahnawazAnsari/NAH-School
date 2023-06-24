import { AiFillRightCircle } from "react-icons/ai";
import "./Card.scss";
const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div
        className="image-container"
        style={{ backgroundImage: `${data.bg ? `url(${data.bg})` : ""}` }}
      >
        <img className="image" src={data.image} alt={data.title} />
      </div>
      <div className="content-container">
        <div className="heading">
          <h3 className="title">{data.title}</h3>
          {data.subTtitle && <h2 className="subtitle">{data.subTtitle}</h2>}
        </div>

        {data.button && (
          <div className="contact">
            {data.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <button>{data.button}</button>
          </div>
        )}

        {!data.button &&
          data.content.map((item, index) => (
            <div className="item" key={index}>
              <AiFillRightCircle color={`var(--${data.color})`} />
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
