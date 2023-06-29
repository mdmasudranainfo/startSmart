import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

const Account = () => {
    return (
        <div>
           <Outlet/>
            <Footer/>
        </div>
    );
};

export default Account;