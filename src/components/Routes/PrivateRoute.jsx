
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if(user || loading){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}}></Navigate>
};

export default PrivateRoute;