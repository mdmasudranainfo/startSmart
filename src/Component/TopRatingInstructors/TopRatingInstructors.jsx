import React, { Component } from 'react';
import "./TopRatingInstructors.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';

class TopRatingInstructors extends Component {
    render() {
        return (
            <div className='continer'>
                <h1 className='topRatingHeading'>Top Rating Instructors</h1>
                <p className='topRatingPara'>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <div className='container'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                        {/* Card One */}
                        <SwiperSlide>
                            <div className='bannerOne'>
                                <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                                <div className='starContainer'>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>(5)</p>
                                </div>
                                <div>
                                    <h4 className='instructorName'>Ali tufan</h4>
                                    <p className='instructorDesignation'>Ui/Ux Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Card Two */}
                        <SwiperSlide>
                            <div className='bannerOne'>
                                <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                                <div className='starContainer'>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>(5)</p>
                                </div>
                                <div>
                                    <h4 className='instructorName'>Ali tufan</h4>
                                    <p className='instructorDesignation'>Ui/Ux Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Card three */}
                        <SwiperSlide>
                            <div className='bannerOne'>
                                <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                                <div className='starContainer'>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>(5)</p>
                                </div>
                                <div>
                                    <h4 className='instructorName'>Ali tufan</h4>
                                    <p className='instructorDesignation'>Ui/Ux Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Card Four */}
                        <SwiperSlide><div className='bannerOne'>
                            <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                            <div className='starContainer'>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>(5)</p>
                            </div>
                            <div>
                                <h4 className='instructorName'>Ali tufan</h4>
                                <p className='instructorDesignation'>Ui/Ux Designer</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Card Five */}
                        <SwiperSlide><div className='bannerOne'>
                            <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                            <div className='starContainer'>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>(5)</p>
                            </div>
                            <div>
                                <h4 className='instructorName'>Ali tufan</h4>
                                <p className='instructorDesignation'>Ui/Ux Designer</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Card Six */}
                        <SwiperSlide><div className='bannerOne'>
                            <img src="https://i.ibb.co/BtbJBRT/banner.png" alt="Top Instructors Banner Image" />
                            <div className='starContainer'>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>(5)</p>
                            </div>
                            <div>
                                <h4 className='instructorName'>Ali tufan</h4>
                                <p className='instructorDesignation'>Ui/Ux Designer</p>
                            </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        );
    }
}

export default TopRatingInstructors;