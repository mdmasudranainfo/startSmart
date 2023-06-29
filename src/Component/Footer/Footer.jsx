import { Link } from "react-router-dom";
import "./Footer.css";
import { FaGooglePlay, FaFacebookF } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import logo from "../../assets/logo/harbour-logo.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" ">
        <div className="footerFourDiv">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-md-3 col-lg-3">
                <div className="">
                  <h4 className="footerHeader">CONTACT</h4>
                  <p className="footerContactTitle">
                    Yahya Tower (2nd Floor), 335, M.M. Ali Road
                  </p>
                  <p className="footerContactTitle">
                    CDA Avenue, Lalkhan Bazar, Chittagong-4000
                  </p>
                  <p className="footerContactTitle">+880 166 010 1704</p>
                  <p className="footerContactTitle">support@startsmart.study</p>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                <div className="">
                  <h4 className="footerHeader">COMPANY</h4>
                  <ul className="">
                    <li>
                      <Link to="" className="footerLinkTag">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Become a Teacher
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                <div className="footer_program_widget home3">
                  <h4 className="footerHeader">PROGRAMS</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="" className="footerLinkTag">
                        Nanodegree Plus
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Veterans
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Georgia
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Self-Driving Car
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                <div className="footer_support_widget home3">
                  <h4 className="footerHeader">SUPPORT</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="" className="footerLinkTag">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Forums
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Language Packs
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footerLinkTag">
                        Release Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-md-3 col-lg-3">
                <div className="">
                  <h4 className="footerHeader">MOBILE</h4>
                  <div className="footerMobileAndText">
                    <div className="">
                      <FaGooglePlay className="playStore" />
                    </div>

                    <div>
                      <p className="title">Google Play</p>
                      <p className="title">Get in on</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondFooter">
          <div className="logoAndIcon container">
            <div className="secondFooterLogo">
              <div className="image">
                <img src={logo} className="secondFooterImage" alt="" />
              </div>
              {/* <hr className="line" /> */}
              <div className="linkTag">
                <li className="list-inline-item">
                  <Link href="#">Home</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">Privacy</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">Terms</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">Sitemap</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">Purchase</Link>
                </li>
              </div>
            </div>

            {/* <div className="icons">
              <FaFacebookF />
              <FcBusinessman />
            </div> */}
            <div className="footerIcon">
              <FaFacebookF />
              <FcBusinessman />
            </div>
          </div>
        </div>
        <div className="copyWrite">
          <p>Copyright Harbour IT © 2021. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
