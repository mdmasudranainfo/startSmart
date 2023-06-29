import "./Register.css";
// import { BsArrowRight } from 'react-icons/bs';
import { HiArrowNarrowRight } from "react-icons/hi";
import Select from 'react-select'

const Register = () => {
  const country = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const district = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const date = [
    { value: '1', label: '1' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const month = [
    { value: '1', label: '1' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const year = [
    { value: '1', label: '1' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
      <div className="container">
        <h5 className="text-center registerHeadLine">
          Student Registration Form
        </h5>
        <div className="formData">
          <div className="mobileOtpHead">
            <div>
              <label className="labelReq">Mobile Number *</label>
              <div className="inputMobileBody">
                <div>
                  <input
                    type="text"
                    className="inputPrimary"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <button className="verifyBtn">Sent OTP</button>
              </div>
            </div>
            <div>
              <label className="labelReq">OTP Number *</label>
              <div className="inputMobileBody">
                <div>
                  <input
                    type="text"
                    className="inputPrimary"
                    placeholder="XXXXX"
                  />
                </div>
                <button className="verifyBtn">Verify</button>
              </div>
            </div>
          </div>

          <div className=" inputBody paddingTopPrimary">
            <div className="">
              <label htmlFor="">Name</label>
              <br />
              <input type="text" className="inputClg6" placeholder="Name" />
            </div>
            <div className="">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" className="inputClg6" placeholder="Email" />
            </div>
          </div>
          <div className="AddressBody paddingTopPrimary">
            <label htmlFor="">Address</label>
            <br />
            <input type="text" className="inputClg6" placeholder="Address" />
          </div>

          <div className=" inputBody paddingTopPrimary">
            <div className="">
              <label htmlFor="">Father Name</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Father Name"
              />
            </div>
            <div className="">
              <label htmlFor="">Father Contact Number</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="01XXXXXXXX"
              />
            </div>
          </div>

          <div className=" inputBody paddingTopPrimary">
            <div className="">
              <label htmlFor="">Guardian Name</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Guardian Name"
              />
            </div>
            <div className="">
              <label htmlFor="">Guardian Number</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="01XXXXXXXX"
              />
            </div>
          </div>

          <div className=" inputBody paddingTopPrimary">
            <div className="">
              <label htmlFor="">District</label>
              <br />
              <Select options={district} placeholder="District Name" />
            </div>
            <div className="">
              <label htmlFor="">Country</label>
              <br />
              <Select options={country} />
            </div>
          </div>

          <div>
            <label htmlFor="" className="labelReq ">Date of Birth*</label>
            <div className="dateOfBirthBody paddingTopPrimary">
              <div>
                <Select options={date} placeholder="Date" />
              </div>
              <div>
                <Select options={month} placeholder="Date" />
              </div>
              <div>
                <Select options={year} placeholder="Date" />
              </div>
            </div>
          </div>

          <div className=" inputBody paddingTopPrimary">
            <div className="">
              <label htmlFor="" className="labelReq">Contact Person *</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Guardian Name"
              />
            </div>
            <div className="">
              <label htmlFor="">NID No</label>
              <br />
              <input type="text" className="inputClg6" placeholder="XXXXXXXX" />
            </div>
          </div>

          <div className="dateOfBirthBody paddingTopPrimary">
            <div>
              <label htmlFor="" className="labelReq">Password *</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Guardian Name"
              />
            </div>
            <div>
              <label htmlFor="" className="labelReq">Confirm Password *</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Guardian Name"
              />
            </div>
            <div>
              <label htmlFor="" className="labelReq">what is the result of 17 + 12 ? *</label>
              <br />
              <input
                type="text"
                className="inputClg6"
                placeholder="Guardian Name"
              />
            </div>
          </div>

          <div className="submitBtn marginTopPrimary">
            <input type="submit" value="Save" className="submitInput" />
            <HiArrowNarrowRight className="colorWhite fs-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
