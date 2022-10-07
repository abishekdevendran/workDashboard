import UserContext from '../contexts/userContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

type IProps = {
    children: JSX.Element; // 👈️ type children
};

const AntiProtectedRoute = ({ children }: IProps) => {
    const { user } = useContext(UserContext);
    if (user) {
        return <Navigate to="/dashboard" />;
    } else {
        return children;
    }
};

export default AntiProtectedRoute;
