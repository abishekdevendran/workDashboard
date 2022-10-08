import { useContext } from 'react';
import UserContext from '../contexts/userContext';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';

const Dashboard = () => {
    const {user} = useContext(UserContext);
    if (user.isAdmin){
        return <AdminDashboard/>
    }
    else{
        return <EmployeeDashboard/>
    }
};

export default Dashboard;
