import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='container'>
            <div className='contactContainer'>
                <div className='locationContainer'>
                    <h1 className='locationHeading'>Our Location</h1>
                    <p>Yahya Tower (2nd Floor), 335, M.M. Ali Road, CDA Avenue, Lalkhan Bazar, Chittagong-4000</p>
                </div>
                <div className='locationContainer'>
                    <h1 className='locationHeading'>Email Us</h1>
                    <p>support@startsmart.study</p>
                </div>
                <div className='locationContainer'>
                    <h1 className='locationHeading'>Call Us</h1>
                    <p>+880 166 010 1704</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;