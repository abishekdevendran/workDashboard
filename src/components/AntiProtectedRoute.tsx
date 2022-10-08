import UserContext from '../contexts/userContext';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type IProps = {
    children: JSX.Element; // 👈️ type children
};

const AntiProtectedRoute = ({ children }: IProps) => {
    const { user } = useContext(UserContext);
    const {state}=useLocation();
    if (user) {
        if(state){
            return <Navigate to={state.path} />;
        }
        else{
            return <Navigate to="/dashboard" />;
        }
    } else {
        return children;
    }
};

export default AntiProtectedRoute;
