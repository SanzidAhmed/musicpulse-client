import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
const usePayments = () =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {  data: payments = [] , refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/paymentshistory?email=${user?.email}`)
            return response.data;
        },
      })
      return[ payments, refetch];
}

export default usePayments;