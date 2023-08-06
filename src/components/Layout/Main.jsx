import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen mx-auto pt-20 mb-28">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;