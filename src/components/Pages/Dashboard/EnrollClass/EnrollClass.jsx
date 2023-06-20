import usePayments from "../../../../hooks/usePayment";


const EnrollClass = () => {
    const [payments] = usePayments();
    console.log(payments);
    return (
        <div>
            <h1>Enroll Class {payments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product name:</th>
                            <th>Transaction Id</th>
                            <th>Payment money</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>
                                <td>{row.itemName}</td>
                                <td>{row.transactionId}</td>
                                <td>${row.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;