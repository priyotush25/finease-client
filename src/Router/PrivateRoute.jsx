
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loading/Loader';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    
    

    if(loading){
        return <Loader />
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;