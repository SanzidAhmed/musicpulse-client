import { FaShoppingCart, FaBriefcase, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open bg-slate-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-20 text-center mx-10">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#c9b649] text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/mycart" className=" "><FaShoppingCart></FaShoppingCart>Manage Classes 
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard/mycart" className=" "><FaShoppingCart></FaShoppingCart>My Selected Cart
                                    <div className="badge badge-secondary bg-white text-black">
                                        +{cart?.length || 0}
                                    </div>
                                </NavLink>
                                </li>
                                <li><NavLink to="/dashboard/enrollclass"><FaBriefcase></FaBriefcase> My Enrolled Classes</NavLink></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;