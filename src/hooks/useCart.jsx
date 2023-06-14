import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
const useCart = () =>{
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access_token');
    const {  data: cart = [] , refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3500/carts?email=${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },
      })
      return[ cart, refetch];
}

export default useCart;