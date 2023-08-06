import { useLoaderData } from "react-router-dom";


const AllPaymentHistory = () => {
    const allPayment = useLoaderData();
    console.log(allPayment);
    return (
        <div>
            <h1>All Payment History{allPayment.length} </h1>
            <div className="overflow-x-auto bg-slate-100">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr >
                            <th className="bg-[#c9b649]">#</th>
                            <th className="bg-[#c9b649]">Class Name:</th>
                            <th className="bg-[#c9b649]">Transaction Id</th>
                            <th className="bg-[#c9b649]">Class Id</th>
                            <th className="bg-[#c9b649]">User Name</th>
                            <th className="bg-[#c9b649]">User Email</th>
                            <th className="bg-[#c9b649]">Payment money</th>
                            <th className="bg-[#c9b649]">Status Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPayment.map((row, index) => <tr key={row._id}>
                                <th className="bg-[#c9b649]">{index + 1}</th>
                                <td>{row.itemName}</td>
                                <td>{row.transactionId}</td>
                                <td>{row.classId}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>${row.price}</td>
                                <td className="dropdown dropdown-left bg-slate-100">
                                    <label tabIndex={0} className="btn ">{row.status}</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 text-center rounded-box w-32">
                                        <li>Accept</li>
                                        <li>Delete</li>
                                    </ul>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPaymentHistory;