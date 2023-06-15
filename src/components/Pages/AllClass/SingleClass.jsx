import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SingleClass = ({ classes }) => {
    const { user } = useContext(AuthContext)
    const { photo, courseName, displayName, _id, coursePrice, seats } = classes;
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = () => {

        if (user && user?.email) {
            const cartClass = { classId: _id, name: courseName, instructor: displayName, price: coursePrice, seats: seats, email: user?.email }
            fetch('http://localhost:3500/carts', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Your product has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Do you want login now?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please login now',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } });
                }
            })
        }
    }
    return (
        <div className={`${(seats == 0) ? "bg-red-200" : ""} card w-96 bg-base-100 shadow-xl`}>
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p><span className="font-semibold">Instructor Name:</span> {displayName}</p>
                <p><span className="font-semibold">Available Seats:</span> {seats}</p>
                <p><span className="font-semibold">Course Price:</span> ${coursePrice}</p>
                <div className="card-actions justify-end">
                    <div onClick={() => handleAddToCart(classes)} disabled={seats === '0' || user?.role === 'instructor' || user?.role === 'admin'} className="btn btn-outline btn-xs" >Add to cart</div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;