import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Carousel.scss";
import { useRef } from "react";

const data = [
  {
    heading: "Environment Day Celebration",
    subHeading: "13th June, 2020",
    image: "/images/carousel1.png",
  },
  {
    heading: "Independence Day",
    subHeading: "Celebration 2021",
    image: "/images/carousel2.png",
  },
  {
    heading: "Independence Day",
    subHeading: "Celebration 2021",
    image: "/images/carousel3.png",
  },
  {
    heading: "Rabindra Jayanti",
    subHeading: "Celebration - 8th may, 2020",
    image: "/images/carousel4.png",
  },
  {
    heading: "Independence Day",
    subHeading: "Celebration 2021",
    image: "/images/carousel3.png",
  },
  {
    heading: "Rabindra Jayanti",
    subHeading: "Celebration - 8th may, 2020",
    image: "/images/carousel4.png",
  },
  {
    heading: "Independence Day",
    subHeading: "Celebration 2021",
    image: "/images/carousel3.png",
  },
  {
    heading: "Rabindra Jayanti",
    subHeading: "Celebration - 8th may, 2020",
    image: "/images/carousel4.png",
  },
  {
    heading: "Independence Day",
    subHeading: "Celebration 2021",
    image: "/images/carousel3.png",
  },
  {
    heading: "Rabindra Jayanti",
    subHeading: "Celebration - 8th may, 2020",
    image: "/images/carousel4.png",
  },
];

const SingleCarousel = ({ data }) => {
  return (
    <div className="single-carousel">
      <div className="image-container">
        <img src={data.image} alt={data.heading} />
      </div>
      <div className="content">
        <p>{data.heading}</p>
        <p>{data.subHeading}</p>
      </div>
      <span className="line" />
    </div>
  );
};

const Carousel = () => {
  const carouselContainer = useRef();

  // for navigating items inside carousel
  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="main-container">
      <h2>
        LOREM IPSUM <span>DOLAR</span>
      </h2>
      <div className="carousel">
        <div className="filler" onClick={() => navigation("left")}>
          <AiOutlineLeft size={20} />
        </div>
        <div className="carouel-container" ref={carouselContainer}>
          {data.map((item, index) => (
            <SingleCarousel key={index} data={item} />
          ))}
        </div>
        <div className="filler">
          <AiOutlineRight size={20} onClick={() => navigation("right")} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
