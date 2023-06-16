import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3500/classes', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your class has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
                reset(result.data)

            })
    }
    return (
        <div>
            <h1 className="uppercase text-2xl font-bold text-center  mb-10">Add your valuable class</h1>
            <form className="grid grid-cols-1 gap-4 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" className="input input-bordered w-full " {...register("photo", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Course Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full " {...register("courseName", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <input type="text" className="input input-bordered w-full " {...register("courseDetails", { required: true })} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Course Price</span>
                    </label>
                    <input type="number" className="input input-bordered w-full " {...register("coursePrice", { required: true })} />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full " value={user?.displayName} {...register("displayName")} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-full " value={user?.email} {...register("postedBy")} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Available Seat</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" {...register("seats", { required: true })} />
                </div>
                <input className="btn bg-[#F45050]" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;