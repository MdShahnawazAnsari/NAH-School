import { AiFillExclamationCircle } from "react-icons/ai";

import "./Principle.scss";

const notice = [
  "Fee Structure for the Academic Session 2021-22.",
  "Admission Notice for Class XI for Internal Students Only, Session 2021-22.",
  "The Online Payment Portal for the Fees.",
  "Parents Notice for Transport Fees.",
  "Fee Structure for the Academic Session 2021-22.",
  "Admission Notice for Class XI for Internal Students Only, Session 2021-22.",
  "The Online Payment Portal for the Fees.",
  "Parents Notice for Transport Fees.",
];

const Principle = () => {
  return (
    <div className="principle-container">
      <div className="img-container">
        <img src="/images/principal.PNG" alt="" />
        <p>
          Mrs. Indrani Sanyal - <span>Principal</span>
        </p>
        <div>LOGO GOES HERE</div>
      </div>
      <div className="message-container">
        <h3>
          PRINCIPAL&apos;S <br /> <span>MESSAGE</span>
        </h3>
        <p>
          <span>Lorem ipsum</span> has been able to carve a niche in the field
          of the city&apos;s educational scenario and this is an apt reflection
          of the earnest and untiring effort of all concern, Our objective is
          always to create a happy...
        </p>
        <div className="button-container">
          <button>READ MORE</button>
        </div>
      </div>
      <div className="notice-container">
        <h3>NOTICES</h3>
        <div className="scrollable">
          {notice.map((item, index) => (
            <div className="notice" key={index}>
              <AiFillExclamationCircle size={20} color="var(--red)" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Principle;
