import './TopCourse.css'
import img from "../../assets/logo/harbour-logo.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { MdMessage } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const TopCourse = () => {
  return (
    <div className='topCourseMainDiv'>
      <div className="container">
        <div className="browsAndTop">
          <h1 className="browse">Browse Our Top Course</h1>
          <a href="" className="topCourse">
            Top Course
          </a>
        </div>

        <div className="cardMainDiv">
          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 4 */}


          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* card 5 */}
          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* card 6 */}


          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 7 */}

          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 8 */}




          <div className="card">
            <div className="cardImage">
              <img src={img} className="image" alt="" />
              <div className="bestSellerAndPreviewCourse">
                <div className="bestSeller">
                  <button className="bestSellerButton">Best Seller</button>
                </div>

                <div className="previewCourse">
                  <Link to="" className="previewCourseLink">
                    Preview Course
                  </Link>
                </div>
              </div>
            </div>

            <div className="fiftyDiscount">
              <p className="fiftyPercentDiscount">-50%</p>
            </div>

            <div className="paddingDiv">
              <div className="cardTitles">
                <p className="cardText">
                  Creative Graphics Design <br />
                  Course-Offline (Student)
                </p>
              </div>

              <div className="starAndButton">
                <div className="starMain">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />

                  <p> (6)</p>
                </div>

                <button className=" buttons">Enroll Course</button>
              </div>

              <div className="cardFooter">
                <div className="manAndMessage">
                  <div className="iconAndNumber">
                    <FcBusinessman />
                    <p className="">1548</p>
                  </div>

                  <div className="iconAndNumber">
                    <MdMessage />
                    <p>25</p>
                  </div>
                </div>

                <div className="money">
                  <div>
                    <div className="originalPrice">
                      <p className="taka">
                        <TbCurrencyTaka />
                        7500
                      </p>
                      <p className="discountPrice ">
                        <TbCurrencyTaka />
                        15000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopCourse;