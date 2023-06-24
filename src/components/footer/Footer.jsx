import { BiDownload } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillRightCircle } from "react-icons/ai";

import "./Footer.scss";

const carouselData = [
  "Click here to Download TC & Security Deposite Refund Form",
  "Click here to Download Transport Registration Form.",
  "Click here to Download Transport Cancillation Form.",
  "Click here to Download Student ID Card Reuisition Form.",
  "Click here to Download TC & Security Deposite Refund Form Form.",
];
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="carousel-section">
        <div className="heading">
          <h3>
            CIRICULAR/<span>DOWNLOADS</span>
          </h3>
          <button>VIEW ALL</button>
        </div>
        <div className="carousel">
          {carouselData.map((item, index) => (
            <div className="item" key={index}>
              <p>{item}</p>
              <div className="icon">
                <BiDownload />
                <p>DOWNLOAD</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-section">
        <section className="contact-section">
          <div className="text">
            <h3>
              GET IN TOUCH <a href="#">WITH US</a>
            </h3>
            <p>To get your personal consultation contact us.</p>
          </div>
          <form>
            <lable className="lable">
              <span>
                <GoMail />
              </span>
              <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
            </lable>
            <button type="submit">SUBSCRIBE</button>
          </form>
        </section>
        <section className="link-section">
          <div className="links">
            <div className="one-section">
              <h5>ABOUT US</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>OUR USP</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>INFRASTRUCTURE</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>ACTIVITES</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>REACH US</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>ACADMICS</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="one-section">
              <h5>OUR TEAM</h5>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
          </div>
          <div className="icons">
            <div className="left">
              <h3>LOGO GOES HERE</h3>
            </div>
            <div className="center">
              <div className="icons">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
              </div>
              <p>
                Copyright 2023 Company Name | Rights Reserved | Powered by
                Intlum
              </p>
            </div>
            <div className="right">
              <p>HOME | PHOTO GALLERY | SCHOOL IN NEWS</p>
            </div>
            <div className="upward-icon">
              <AiFillRightCircle />
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
