import { useContext } from 'react';
import UserContext from '../contexts/userContext';
import React from 'react';
import { Link } from 'react-router-dom';
import TasksView from './TasksView';

const EmployeeDashboard = () => {
    const { logout } = useContext(UserContext);
    return (
        <div>
            <div className=" w-full bg-white p-4 flex justify-between">
                <Link className="font-bold text-4xl" to={'/dashboard'}>
                    Employee Dashboard
                </Link>
                <button
                    onClick={logout}
                    className="hover:scale-125 transition-all">
                    Logout
                </button>
            </div>
            <TasksView />
        </div>
    );
};

export default EmployeeDashboard;
