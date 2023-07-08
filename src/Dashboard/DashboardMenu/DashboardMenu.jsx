// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import logo from '../../assets/logo/harbour-logo.jpg'
import { Link } from 'react-router-dom'
import '../../Dashboard/dashboard.css'

import { HiComputerDesktop } from 'react-icons/hi2'
import {
  AiFillSetting,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
} from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

const DashboardMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="px-4 py-2 ">
      <div className="">
        <img className="img-fluid" src={logo} alt="" />
      </div>

      {/* menu items */}
      <div className=" mt-5">
        <ul>
          <li className="my-1">
            <Link
              className="menuItem d-flex align-items-center gap-2 "
              to="/admin"
            >
              <HiComputerDesktop />
              <span> Dashboard</span>
            </Link>
          </li>

          <li className="my-1 menuAnimation">
            <Link
              onClick={() => setOpen(!open)}
              className="menuItem d-flex align-items-center gap-2  "
            >
              <AiFillSetting />
              <span> Class Operation</span>

              {open ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
            </Link>

            <ul
              className={`menuContent ${open ? 'open' : ''} ms-3 menuAnimation`}
            >
              <li className="my-1">
                <Link
                  className="menuItem d-flex align-items-center gap-2 "
                  to="/admin/JoinClass"
                >
                  <BsDot />
                  <span> Join Class</span>
                </Link>
              </li>
              <li className="my-1">
                <Link
                  className="menuItem d-flex align-items-center gap-2 "
                  to="/admin/HomeworkSubmit"
                >
                  <BsDot />
                  <span> Homework Submit</span>
                </Link>
              </li>

              {/* <li className="my-1">
                <Link
                  className="text-white d-flex align-items-center gap-2 "
                  to="/admin"
                >
                  <BsDot />
                  <span> Exams</span>
                </Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardMenu
