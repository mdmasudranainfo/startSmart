import { FaUser, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SubHeader.css"

const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="topNavBar">
        <div className="container">
          <div className="topNavMain">
            <div className="topNavMainSecondDiv">
              <a href="#">+8801 660 101 704</a>
              <a href="#">info@startsmart.study</a>
            </div>
            <div className="">
              <div className="topNavMainSecondDiv">
                <Link  >
                  <FaUser className="navListItem" />
                </Link>

                <div className="loginRegisterBtn">
                  <Link to="/login" className="navListItem">Login/</Link>

                  <Link to="/student" className="navListItem">Register</Link>
                </div>
                <Link  >
                  <FaCartPlus className="navListItem" />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
