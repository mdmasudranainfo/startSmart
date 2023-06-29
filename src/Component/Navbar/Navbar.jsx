import "./Navbar.css";
import logo from "../../assets/logo/harbour-logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setStickyNav(true);

    }
    else {
      setStickyNav(false);
    }
  });
  return (

    <div className="navbarMainDiv">
      <div className="container">
        <div className={`MainNav ${stickyNav ? `sticky container ` : ""}`}>
          <div className="">
            <nav>
              <div className="navbarBody">
                <div>
                  <a href="#">
                    <img className="logo" src={logo} alt="" />
                  </a>

                  <a href="" className="harbour">
                    harbour it
                  </a>
                </div>
                <ul className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;