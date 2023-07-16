import { AiFillStar, AiOutlineUser } from 'react-icons/ai'

import { BiCommentDetail } from 'react-icons/bi'
import Accordion from 'react-bootstrap/Accordion'

import './Coursedetail.css'

const Coursedetail = () => {
  return (
    <div className="container">
      <div className=" CoursedetailBar p-3 d-flex  gap-2 rounded">
        <div className="">Home /</div>
        <div className="">Courses /</div>
        <div className="">Digital Marketing - Online ( Professional ) </div>
      </div>

      {/*  */}
      <div className=" my-5 row ">
        <div className="col-8 p-2">
          <h3 className="text-bold couseTitle">
            Digital Marketing - Online ( Professional )
          </h3>
          <div className="d-flex align-content-center gap-2">
            <p className="courseButtonBg text-white d-inline-block p-1 rounded px-2">
              Best Seller
            </p>
            <div className="">
              <AiFillStar className="courseStarColor" />
              <AiFillStar className="courseStarColor" />
              <AiFillStar className="courseStarColor" />
              <AiFillStar className="courseStarColor" />
              <AiFillStar className="" />
            </div>
          </div>
          <div className="d-flex gap-3 mt-2">
            <div className=" d-flex align-items-center gap-1">
              <AiOutlineUser />
              <span> 57 students enrolled</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <BiCommentDetail />
              <span> 25 Review</span>
            </div>
          </div>

          <div className="">
            <img
              className="img-fluid"
              src="https://www.startsmart.study/assets/images/courses/ITM000058.jpg"
              alt=""
            />
          </div>

          <div className="mt-5 p-5 px-4  border rounded ">
            <h4>Overview</h4>
            <h5 className="my-3">Course Description</h5>
            <p>
              Digital Marketing - Online ( Professional ) Course Details: Total
              Classes: 22 Class Duration- 1.5 Hours Per week: 01 Class Class
              Room: Zoom App
            </p>
          </div>

          <div className="my-5 p-5 px-4  border rounded">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h4>Course Content</h4>
              <p>0 Lectures</p>
            </div>

            {/*  */}

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Getting Started</Accordion.Header>
                <Accordion.Body>
                  <p>Video 1</p>
                  <p>Video 2</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/*  */}
          </div>
        </div>

        <div className="col-4">
          <div className=" d-flex  align-items-center justify-content-between">
            <h4>Discount:</h4>
            <p className="d-inline bg-danger text-white p-1 rounded-5 py-2">
              40%
            </p>
          </div>
          <h5 className="">
            <del className="">৳13800</del>
          </h5>

          <h3 className="text-center font-bold coursePrice">৳8280</h3>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Coursedetail
