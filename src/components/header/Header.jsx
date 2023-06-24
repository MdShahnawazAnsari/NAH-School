import { useState } from "react";
import "./Header.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const pages = [
  { name: "HOME", link: "#", id: 0, isActive: true },
  { name: "ABOUT US", link: "#", id: 1, isActive: false },
  { name: "OUR TEAM", link: "#", id: 2, isActive: false },
  { name: "OUR USP", link: "#", id: 3, isActive: false },
  { name: "ACADEMICS", link: "#", id: 4, isActive: false },
  { name: "INFRASTRUCTURE", link: "#", id: 5, isActive: false },
  { name: "ACTIVTIES", link: "#", id: 6, isActive: false },
  { name: "MEDIA", link: "#", id: 7, isActive: false },
  { name: "REACH US", link: "#", id: 9, isActive: false },
];
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <section className="top">
        <div className="news-container">
          <p>Ranked No 1 School - Times of India [Date: January 16, 2014]</p>
          <div>
            For enquiry - Call us at <span>+9112345678</span> |{"  "}
            <span>+9112345678</span>
            <button>EMAIL LOG IN</button>
          </div>
        </div>
      </section>
      <section className="bottom">
        <div className={`header-container ${mobileMenu ? "mobileView" : ""}`}>
          <div className="logo">LOGO GOES HERE</div>
          <div className="menuItems">
            {pages.map((page) => (
              <div
                className="menuItem"
                key={page.id}
                style={{
                  borderBottom: page.isActive && "4px solid var(--red)",
                }}
              >
                <a href={page.link} alt={page.name}>
                  {page.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mobileMenuItems">
          {mobileMenu ? (
            <AiOutlineClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <BiMenuAltRight onClick={() => setMobileMenu(true)} />
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
