import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";


const Main = () => {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );

};

export default Main;
