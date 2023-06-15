import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:3500/users')
        return res.json()
    })

    const handleMakeAdmin = (user) =>{
        fetch(`http://localhost:3500/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now.`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = (user) =>{
        fetch(`http://localhost:3500/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor now.`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h1>{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-[#c9b649]">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <th className="dropdown dropdown-left">
                                    <label tabIndex={0} className="btn m-1">{user.role? user.role : <FaUsers></FaUsers>}</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-32">
                                        <li>{user.role === 'admin'? 'admin':<button onClick={() => handleMakeAdmin(user)}>admin</button>}</li>
                                        <li>{user.role === 'instructor'? 'instructor':<button onClick={() => handleMakeInstructor(user)}>instructor</button>}</li>
                                    </ul>
                                </th>
                                <th>
                                    <button className="btn btn-square bg-red-700 text-white">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;