import "./ChoseSchool.scss";
import {
  AiFillRightCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const ChoseSchool = () => {
  return (
    <div className="choseschool-container">
      <div className="image-container">
        <img src="/images/basketball.png" alt="table image" />
        <div className="wall" />
      </div>
      <div className="bg-image">
        <div className="content-container">
          <p className="sub-heading">LOREM IPSUM</p>
          <div className="container-1">
            <div className="content">
              <h3>SENIOR SCHOOL</h3>
              <div className="item">
                <AiFillRightCircle size={20} color="var(--red)" />
                <p>School Calendar</p>
              </div>
              <div className="item">
                <AiFillRightCircle size={20} color="var(--red)" />
                <p>School Uniform</p>
              </div>
            </div>
            <div className="icon">
              <AiOutlineMinusCircle size={30} color="var(--green)" />
            </div>
          </div>
          <div className="container-2">
            <div className="content">
              <h3>JUNIOR SCHOOL</h3>
            </div>
            <div className="icon">
              <AiOutlinePlusCircle size={30} color="var(--green)" />
            </div>
          </div>
          <div className="container-3">
            <div className="content">
              <h3>PRE-PRIMARY SCHOOL</h3>
            </div>
            <div className="icon">
              <AiOutlinePlusCircle size={30} color="var(--green)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseSchool;
