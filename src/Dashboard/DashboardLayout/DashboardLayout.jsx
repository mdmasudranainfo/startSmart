/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardMenu from '../DashboardMenu/DashboardMenu'
import MainDashboard from '../MainDashboard/MainDashboard'

const DashboardLayout = () => {
  return (
    <div className=" container">
      <div className="d-flex min-vh-100">
        <div className="bg-dark white text-light h-100vh w-25 ">
          <DashboardMenu />
        </div>
        <div className="w-100 px-3  ">
          <MainDashboard />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
