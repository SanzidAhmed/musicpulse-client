
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}}></Navigate>
};

export default PrivateRoute;