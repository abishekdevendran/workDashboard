import UserContext from '../contexts/userContext';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type IProps = {
    children: JSX.Element; // 👈️ type children
};

const ProtectedRoute = ({children}: IProps) => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    if(!user){
        return (
            <Navigate to="/login" replace state={{ path: location.pathname }} />
        );
    }
    else{
        return children;
    }
};

export default ProtectedRoute;
