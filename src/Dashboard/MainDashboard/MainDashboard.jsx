/* eslint-disable no-unused-vars */
import React from 'react'
import './MainDashboard.css'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const MainDashboard = () => {
  return (
    <div>
      <div className="d-flex justify-content-between py-2">
        <div className="">
          <MdKeyboardDoubleArrowLeft className="h3 pointer" />
        </div>
        <div className="d-flex gap-3 align-items-center">
          <h4>Md Masud Rana</h4>

          <AiOutlineMenu className="d-block d-lg-none h4" />

          <div className="">
            <img
              className="profileImage"
              src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/344411332_587587676717129_3715679923250277619_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEW5E6e6JeHXEn8ICOGYqnZxPUiNkmLAG7E9SI2SYsAbu2GyUIAGXwcRL0D2eY0F7nVDZtoDJscE_76scZIfEsu&_nc_ohc=FeNICZ7DThUAX_w4iXx&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDwoscUPDfTs2JXWPEiCJyoBauWY1wEm562DFmuipPcYg&oe=64A10D84"
              alt=""
            />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default MainDashboard
