import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Banner/Banner';
import SubHeader from '../Component/SubHeader/SubHeader';

const Student = () => {
    return (
        <div>
            <SubHeader />
            <Navbar />
            <Banner />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Student;