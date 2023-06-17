import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignIn = () => {

    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div className="">
            <h1 className="text-center text-5xl font-semibold">Please Sign In</h1>
            <form className="grid grid-cols-1 gap-4 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
                <input className="btn bg-[#F45050]" value="sign in" type="submit" />
            </form>
            <div className="w-1/2 mx-auto">
                <SocialLogin></SocialLogin>
            </div>
            <p className="text-center mt-4">New to MusicPulse? please  <Link to="/signup" className="text-orange-500 font-bold">Sign Up</Link></p>
            <p className="text-center text-red-600">{error}</p>
        </div>

    );
};
export default SignIn;