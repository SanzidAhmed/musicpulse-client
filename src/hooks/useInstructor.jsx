import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/users/instructor/${user?.email}`)
            return response.data.instructor;
        }
    })
    return[isInstructor, isInstructorLoading]
};

export default useInstructor;