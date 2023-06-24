import "./Updates.scss";

import { CiMobile4 } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiContractRightLine } from "react-icons/ri";
const data = [
  {
    date: "JANUARY 20, 2022",
    title: "COMPUTER SC Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update1.png",
  },
  {
    date: "JANUARY 20, 2022",
    title: "COMPUTER SC Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update2.png",
  },
  {
    date: "JANUARY 20, 2022",
    title: "ACCOUNTS Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update3.png",
  },
  {
    date: "JANUARY 20, 2022",
    title: "BIOLOGY Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update4.png",
  },
  {
    date: "JANUARY 20, 2022",
    title: "CHEMISTRY Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update5.png",
  },
  {
    date: "JANUARY 20, 2022",
    title: "BIOLOGY Specimen QP",
    class: "Class XI - 2019",
    image: "/images/update6.png",
  },
];

const Updates = () => {
  return (
    <div className="update-container">
      <section className="carousel-section">
        <div className="heading">
          <p>FEATURED NEWS</p>
          <h2>
            LATEST <span>UPDATES</span>
          </h2>
        </div>
        <div className="carousel-container">
          {data.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt={item.title} />
              <p className="date">{item.date}</p>
              <h3>{item.title}</h3>
              <h3 className="class">{item.class}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-section">
        <div className="search">
          <div className="search-icon">
            <AiOutlineFileSearch />
          </div>
          <h3>
            FOR ENROLLMENT & ENQUIRY <br /> <span>CONTACT US AT</span>
          </h3>
        </div>
        <div className="phone">
          <div className="icon">
            <CiMobile4 />
            <p>+9112345678</p>
          </div>
          <div className="icon">
            <CiMobile4 />
            <p>+9112345678</p>
          </div>
          <div className="icon">
            <CiMobile4 />
            <p>+9112345678</p>
          </div>
          <div className="icon">
            <CiMobile4 />
            <p>+9112345678</p>
          </div>
        </div>
      </section>
      <section className="tour-section">
        <div className="tour-container">
          <div className="image">
            <img src="/images/tour1.PNG" alt="Educational Tour" />
          </div>
          <div className="content">
            <div className="text">
              <h2>
                EDUCATIONAL <br />
                <span>TOUR</span>
              </h2>
            </div>
            <div className="tour-icon">
              <RiContractRightLine />
            </div>
          </div>
        </div>
        <div className="tour-container">
          <div className="image">
            <img src="/images/tour2.PNG" alt="Educational Tour" />
          </div>
          <div className="content">
            <div className="text">
              <h2>
                EXCHANGE <br /> <span>PROGRAME</span>
              </h2>
            </div>
            <div className="tour-icon">
              <RiContractRightLine />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;
