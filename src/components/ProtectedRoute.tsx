import UserContext from '../contexts/userContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

type IProps = {
    children: JSX.Element; // 👈️ type children
};

const ProtectedRoute = ({children}: IProps) => {
    const { user } = useContext(UserContext);
    if(!user){
        return (
            <Navigate to="/login" />
        );
    }
    else{
        return children;
    }
};

export default ProtectedRoute;
