import { FaPencilAlt } from "react-icons/fa";
import useClasses from "../../../../hooks/useClasses";
import { Link } from "react-router-dom";


const MyClass = () => {
    const [classes] = useClasses();
    return (
        <div>
            <h1>{classes.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Status</th>
                            <th>Available Seat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((class2, index) => <tr key={class2._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={class2.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{class2.courseName}</div>
                                            <div className="text-sm opacity-50">{class2.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{class2.status? class2.status : 'Pending'}</td>
                                <td>{class2.seats}</td>
                                <th>
                                    <Link className="btn btn-ghost btn-xs"><FaPencilAlt></FaPencilAlt> Update</Link>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;