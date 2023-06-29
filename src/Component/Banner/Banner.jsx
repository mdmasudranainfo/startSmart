import MainNav from '../MainNav/MainNav'
import './Banner.css'
import curve from '../../assets/logo/wave2.svg'

const Banner = () => {
  return (
    <div className="bannerMainDiv">
      {/* absulate  */}
      <div className="CurveDiv">
        <img src={curve} alt="" />
      </div>

      <div className="">
        <MainNav />
      </div>
      <div className="bannerMainContainer">
        <div className="bannerContainerContent">
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
        </div>
      </div>
      <div className="background"></div>
    </div>
  )
}

export default Banner
