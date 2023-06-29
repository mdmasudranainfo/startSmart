/* eslint-disable no-unused-vars */
import React from 'react'

const ActiveCourses = () => {
  return (
    <div>
      <h3>Hello, Mehadi Hasan !</h3>
      <h3>Student ID : 120858</h3>

      {/*Table  */}

      <h2 className="mt-5 text-center text-primary">Your Active Courses</h2>

      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">#Invoice</th>
            <th scope="col">Date</th>
            <th scope="col">Total Amount </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ActiveCourses
