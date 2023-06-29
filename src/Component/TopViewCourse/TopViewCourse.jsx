import React from 'react';
import "./TopViewCourse.css"
import img from "../../assets/logo/harbour-logo.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { MdMessage } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const TopViewCourse = () => {
    return (
        <div className='container'>
            <h1 className='topViewHeading'>Students Are Viewing</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
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
                                    Digital Marketing <br />
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>


                {/* Card Two */}
                <SwiperSlide>
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Card Three */}
                <SwiperSlide>
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
                                    Web Design Design <br />
                                    Basic to Advance
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Card Four */}
                <SwiperSlide>
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
                                    Easy Spoken English<br />
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Card Five */}
                <SwiperSlide>
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
                                    Fundamental Computer Course <br />
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Card Six */}
                <SwiperSlide>
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
                                            <p className="takas">
                                                <TbCurrencyTaka />
                                                7500
                                            </p>
                                            <p className="discountPrices ">
                                                <TbCurrencyTaka />
                                                15000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopViewCourse;