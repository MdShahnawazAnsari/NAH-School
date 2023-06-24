import "./HeroCard.scss";
import Card from "./card/Card";

const cardData = [
  {
    title: "ADMISSION",
    subTtitle: "INFORMATION",
    content: ["For enrollment enquiry Call us @", "+9173985539, +91836067424."],
    button: "LEARN MORE",
    color: "green",
    image: "/images/hero1.png",
    bg: "/images/hero1-bg.png",
  },
  {
    title: "SESSION",
    subTtitle: "2021-2022",
    content: [
      "Announcements",
      "School Calender",
      "Awards & Achievements",
      "ICSE and ISC Result",
    ],
    color: "yellow",
    image: "/images/hero2.png",
  },
  {
    title: "ACADEMICS",
    content: [
      "Syllabus",
      "Exam Schedule",
      "Subjects We Offer",
      "List of Toppers",
    ],
    color: "light-green",
    image: "/images/hero3.png",
  },
  {
    title: "TRANSPORT",
    content: ["Bus Route", "Dos and Don'ts", "Contact Information"],
    color: "red",
    image: "/images/hero4.png",
  },
];
const HeroCard = () => {
  return (
    <div className="heroCard-container">
      {cardData.map((item) => (
        <Card key={item.image} data={item} />
      ))}
    </div>
  );
};

export default HeroCard;
