import React from 'react';
import "./UpComingEvents.css"
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const UpComingEvents = () => {
    return (
        <div className='container'>
            <h1 className='upComingEventsHeading'>UpComing Events</h1>
            <p className='upComingEventsPara'>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            {/* Card Section */}
            <div className='cardMainContainer'>
                {/* Card One */}
                <div className='cardOne'>
                    <div className='calender'>
                        {/* <p>28 <br />March</p> */}
                    </div>
                    <div className='infoContainer'>
                        <div className='dateAndTime'>
                            <div className='time'>
                                <FaCalendar />
                                <p>8.00 am - 5.00 am</p>
                            </div>
                            <div className='locaction'>
                                <FaMapMarkerAlt />
                                <p>Vanconver, Canada</p>
                            </div>
                        </div>
                    </div>
                    <p className='eventParagraph'>Elegant Light Box Paper Cut Dioramas
                        New Design Conference</p>
                </div>
                {/* Card Two */}
                <div className='cardOne'>
                    <div className='calender'>
                        {/* <p>28 <br />March</p> */}
                    </div>
                    <div className='infoContainer'>
                        <div className='dateAndTime'>
                            <div className='time'>
                                <FaCalendar />
                                <p>8.00 am - 5.00 am</p>
                            </div>
                            <div className='locaction'>
                                <FaMapMarkerAlt />
                                <p>Vanconver, Canada</p>
                            </div>
                        </div>
                    </div>
                    <p className='eventParagraph'>Elegant Light Box Paper Cut Dioramas
                        New Design Conference</p>
                </div>
                {/* Card Three */}
                <div className='cardOne'>
                    <div className='calender'>
                        {/* <p>28 <br />March</p> */}
                    </div>
                    <div className='infoContainer'>
                        <div className='dateAndTime'>
                            <div className='time'>
                                <FaCalendar />
                                <p>8.00 am - 5.00 am</p>
                            </div>
                            <div className='locaction'>
                                <FaMapMarkerAlt />
                                <p>Vanconver, Canada</p>
                            </div>
                        </div>
                    </div>
                    <p className='eventParagraph'>Elegant Light Box Paper Cut Dioramas
                        New Design Conference</p>
                </div>
            </div>
        </div>
    );
};

export default UpComingEvents;