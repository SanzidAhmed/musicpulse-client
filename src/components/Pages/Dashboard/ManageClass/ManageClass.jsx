import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:3500/allclasses')
        return res.json()
    })
    const handleStatusApproval = (class1) => {
        fetch(`http://localhost:3500/classes/approved/${class1._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${class1.courseName} is an approved course`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleStatusDenied = (class1) => {
        fetch(`http://localhost:3500/classes/denied/${class1._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${class1.courseName} is an denied course`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h1>Manage Class will be here</h1>
            <div className="overflow-x-auto min-h-screen">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((class1, index)=> <tr key={class1._id}>
                            <th>{index + 1}</th>
                            <td></td>
                            <td>{class1.courseName}</td>
                            <td>{class1.displayName}</td>
                            <td>{class1.postedBy}</td>
                            <td>{class1.seats}</td>
                            <td>${class1.coursePrice}</td>
                            <th className="dropdown dropdown-left">
                                <label tabIndex={0} className="btn m-1">{class1.status ? class1.status : "Pending"}</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-32">
                                    <li>{class1.status === 'approved'? 'approved':<button onClick={() => handleStatusApproval(class1)}>Approved</button>}</li>
                                    <li>{class1.status === 'denied'? 'denied':<button onClick={() => handleStatusDenied(class1)}>Denied</button>}</li>
                                    
                                </ul>
                            </th>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;