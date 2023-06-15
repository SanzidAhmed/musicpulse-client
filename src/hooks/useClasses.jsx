import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {  data: classes = [] , refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/allclasses?email=${user?.email}`)
            return response.data;
        },
      })
      return[ classes, refetch];
};

export default useClasses;