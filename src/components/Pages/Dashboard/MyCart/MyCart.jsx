import { FaMoneyCheckAlt, FaTrash } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0) ;
    const grandTotal = parseFloat(total).toFixed(2) ;

    const handleRemove = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3500/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-6 px-32">
                <h1 className="text-2xl font-semibold">Total Item: {cart.length}</h1>
                <h2 className="text-2xl font-semibold">Total Price: ${grandTotal}</h2>
                <Link className="btn btn-sm bg-[#F45050]">Payment all</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#c9b649]">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{row.name}</div>
                                            <div className="text-sm opacity-50">{row.instructor}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${row.price}</td>
                                <th>
                                    <button onClick={() => handleRemove(row)} className="btn btn-square bg-red-700 text-slate-200">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-square bg-green-600 text-white">
                                        <FaMoneyCheckAlt></FaMoneyCheckAlt>
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

export default MyCart;