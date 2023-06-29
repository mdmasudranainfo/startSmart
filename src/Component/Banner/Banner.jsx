import MainNav from "../MainNav/MainNav";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerMainDiv">
      <div className="">
        <MainNav />
      </div>
      <div className="bannerMainContainer">
        <div className="bannerContainerContent">
          <div>
            <h1>Find The Best Courses</h1>
            <p>Technology is brining a massive wave of evolution on learning things on different ways.</p>
            <div className="getStartedContainer"><button className="getStartedBtn">Ready To Get Started?</button></div>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Banner;
