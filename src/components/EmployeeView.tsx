import { PieChart } from 'react-minimal-pie-chart';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/userContext';
import { useAdminTasks } from '../utility/fetchHandler';
import pieHandler from '../utility/pieHandler';
import { useContext } from 'react';
import React from 'react';

const EmployeeView = () => {
    const { id } = useParams();
    const adminTasksQuery = useAdminTasks(id!);
    const { logout } = useContext(UserContext);
    return (
        <div>
            <div>
                {adminTasksQuery.isLoading && <div>Loading...</div>}
                {adminTasksQuery.isError && <div>Error!</div>}
                {adminTasksQuery.isFetched && (
                    <div>
                        <div className=" w-full bg-white p-4 flex justify-between">
                            <Link
                                className="font-bold text-4xl"
                                to={'/dashboard'}>
                                User Overview
                            </Link>
                            <button
                                onClick={logout}
                                className="hover:scale-125 transition-all">
                                Logout
                            </button>
                        </div>
                        {JSON.stringify(adminTasksQuery.data)}
                        <div className="flex flex-row items-center justify-center w-full">
                            <div className="userCard rounded-3xl bg-slate-100 p-4">
                                {adminTasksQuery.data.user.username}
                            </div>
                            <div className="w-1/3 flex justify-center items-stretch">
                                <PieChart
                                    data={
                                        pieHandler(
                                            adminTasksQuery.data.tasks
                                        )[0]
                                    }
                                    className="h-80 w-80 font-poppins text-xs"
                                    label={({ dataEntry }) => {
                                        return (
                                            dataEntry.title +
                                            ': ' +
                                            Math.round(dataEntry.percentage) +
                                            '%'
                                        );
                                    }}
                                    animate={true}
                                    labelPosition={100}
                                    viewBoxSize={[200, 150]}
                                    center={[100, 50]}
                                />
                                <PieChart
                                    data={
                                        pieHandler(
                                            adminTasksQuery.data.tasks
                                        )[1]
                                    }
                                    className="h-80 w-80 font-poppins text-xs"
                                    label={({ dataEntry }) => {
                                        return (
                                            dataEntry.title +
                                            ': ' +
                                            Math.round(dataEntry.percentage) +
                                            '%'
                                        );
                                    }}
                                    animate={true}
                                    labelPosition={100}
                                    viewBoxSize={[200, 150]}
                                    center={[100, 50]}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployeeView;
