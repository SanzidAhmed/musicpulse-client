import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navbarOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Dashboard</Link></li>
    </>
    return (
        <div className="bg-[#B799FF] text-white ">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-[#F45050]  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 p-2 text-black shadow bg-[#F45050] rounded-box w-52 ">
                            {navbarOptions}
                        </ul>
                    </div>
                    <Link><img className="h-20 w-28 btn btn-ghost hover:bg-[#B799FF]" src="https://i.ibb.co/BnRMS9g/Red-Elegant-Abstract-Podcast-Free-Logo-1-removebg-preview.png" alt="" /></Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal ">
                            {navbarOptions}
                        </ul>
                    </div>
                    {!user && <Link className="btn bg-[#F45050] border-[#F45050]">Login</Link>}
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/3WZTF2q/Red-Elegant-Abstract-Podcast-Free-Logo-removebg-preview.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#F45050]">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;