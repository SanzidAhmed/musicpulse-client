import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data.photo);
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photo };
                        fetch('https://music-pulse-server-sanzidahmed.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    
                                    reset();
                                    navigate('/')
                                    Swal.fire(
                                        'Good job!',
                                        'Your signup successful!',
                                        'success'
                                      )
                                }
                            })

                    })

            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div>
            <form className="grid grid-cols-1 gap-4 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full " {...register("name", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-full" {...register("email", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="input input-bordered w-full" {...register("password", { required: true, minLength: 6 })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" {...register("photo", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>
                    <select className="input input-bordered w-full" {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <input className="btn bg-[#F45050]" type="submit" value="Sign Up" />
            </form>
            <div className="w-1/2 mx-auto">
                <SocialLogin></SocialLogin>
            </div>
            <p className="text-center mt-4">Already have an account? please  <Link to="/signin" className="text-orange-500 font-bold">Sign In</Link></p>
            <p className="text-center text-red-600">{error}</p>
        </div>
    );
};

export default SignUp;