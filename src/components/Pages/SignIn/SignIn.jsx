import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SignIn = () => {


    const {signInUser} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInUser(data.email, data.password)
        .then(() => {})
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
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
            <p className="text-center mt-4">New to MusicPulse? please  <Link to="/signup" className="text-orange-500 font-bold">Sign Up</Link></p>
        </div>

    );
};
export default SignIn;