import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch((err) => {
                console.log(err.message);
            });
    }
    const navbarOptions = <>
        <li><Link>Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/allclasses">All Classes</Link></li>
    </>
    return (
        <div className="bg-[#c9b649] text-white fixed z-30 w-full h-28 max-w-screen-xl">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-[#F45050]  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 p-2 text-black shadow bg-[#F45050] rounded-box w-52 ">
                            {navbarOptions}
                            {user &&<li><Link to="/dashboard">Dashboard</Link></li>}
                        </ul>
                    </div>
                    <Link><img className="h-20 w-28 btn btn-ghost hover:bg-[#c9b649]" src="https://i.ibb.co/BnRMS9g/Red-Elegant-Abstract-Podcast-Free-Logo-1-removebg-preview.png" alt="" /></Link>
                </div>

                <div className="navbar-end mr-10">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal ">
                            {navbarOptions}
                            {user && <li><Link to="/dashboard">Dashboard</Link></li>}
                        </ul>
                    </div>
                    {!user && <Link to="/signin" className="btn bg-[#F45050] border-[#F45050]">Sign In</Link>}
                    {user && <div className="dropdown dropdown-end relative">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm absolute dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#F45050]">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleSignOut}><a>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;