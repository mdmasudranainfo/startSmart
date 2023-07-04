import MainNav from '../MainNav/MainNav'

import curve from '../../assets/logo/wave2.svg'

const LoginBanner = () => {
  return (
    <div className="bannerMainDiv bannar2">
      {/* absulate  */}
      <div className="CurveDiv">
        <img src={curve} alt="" />
      </div>

      <div className="">
        <MainNav />
      </div>
      <div className="bannerMainContainer">
        {/* <div className="bannerContainerContent">
          <div>
            <h1>Find The Best Courses</h1>
            <p>
              Technology is brining a massive wave of evolution on learning
              things on different ways.
            </p>
            <div className="getStartedContainer">
              <button className="getStartedBtn">Ready To Get Started?</button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="background"></div>
    </div>
  )
}

export default LoginBanner
