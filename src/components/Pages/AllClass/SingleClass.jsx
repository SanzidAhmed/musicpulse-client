import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const SingleClass = ({classes}) => {
    const {user} = useContext(AuthContext)
    const {name, instructor, _id,price} = classes;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const handleAddToCart =() => {
        const cartClass = {classId: _id, name: name, instructor: instructor, price: price, email:user.email}
        if(user && user.email){
            fetch('http://localhost:3500/carts',{
                method: 'POST',
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
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
        else{
            Swal.fire({
                title: 'Do you want login now?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please login now',
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/signin', {state: {from: location}});
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor Name:</span> {instructor}</p>
                <div className="card-actions justify-end">
                    <div onClick={() => handleAddToCart(classes)} className="btn btn-outline btn-xs">Add to cart</div>
                    <div className="btn btn-outline btn-xs">Buy now</div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;