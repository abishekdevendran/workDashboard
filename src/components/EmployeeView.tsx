import { PieChart } from 'react-minimal-pie-chart';
import { Navigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/userContext';
import { useAdminTasks } from '../utility/fetchHandler';
import pieHandler from '../utility/pieHandler';
import { useContext } from 'react';
import React from 'react';
import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
import barHandler from '../utility/barHandler';
import Task from './Task';
import getToday from '../utility/getToday';
import getYesterday from '../utility/getYesterday';

const EmployeeView = () => {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const adminTasksQuery = useAdminTasks(id!);
    const { logout } = useContext(UserContext);
    if (user?.isAdmin) {
        return (
            <div>
                <div className=" w-full bg-white p-4 flex justify-between">
                    <Link className="font-bold text-4xl" to={'/dashboard'}>
                        User Overview
                    </Link>
                    <div className="w-2/5 flex flex-row justify-end items-center">
                        <Link
                            className="hover:scale-125 transition-all mx-5"
                            to={'/dashboard'}>
                            Dashboard
                        </Link>
                        <button
                            onClick={logout}
                            className="hover:scale-125 transition-all">
                            Logout
                        </button>
                    </div>
                </div>
                <div className="taskadder flex flex-col items-center justify-center">
                    <div className="w-full flex flex-column justify-around">
                        {adminTasksQuery.isLoading && <div>Loading..</div>}
                        {adminTasksQuery.isFetched && (
                            <>
                                <div className="leftContainer w-2/3 flex flex-col justify-center items-center p-8">
                                    <div className="pieContainer flex flex-row items-center justify-center">
                                        <div className="pie flex flex-col items-center">
                                            <PieChart
                                                data={
                                                    pieHandler(
                                                        adminTasksQuery.data
                                                            .tasks
                                                    )[0]
                                                }
                                                className="h-80 w-80 font-poppins text-xs"
                                                label={({ dataEntry }) => {
                                                    return (
                                                        dataEntry.title +
                                                        ': ' +
                                                        Math.round(
                                                            dataEntry.percentage
                                                        ) +
                                                        '%'
                                                    );
                                                }}
                                                animate={true}
                                                labelPosition={100}
                                                viewBoxSize={[200, 200]}
                                                center={[100, 100]}
                                            />
                                            <h3>{getToday()}</h3>
                                        </div>
                                        <div className="pie flex flex-col items-center">
                                            <PieChart
                                                data={
                                                    pieHandler(
                                                        adminTasksQuery.data
                                                            .tasks
                                                    )[1]
                                                }
                                                className="h-80 w-80 font-poppins text-xs"
                                                label={({ dataEntry }) => {
                                                    return (
                                                        dataEntry.title +
                                                        ': ' +
                                                        Math.round(
                                                            dataEntry.percentage
                                                        ) +
                                                        '%'
                                                    );
                                                }}
                                                animate={true}
                                                labelPosition={100}
                                                viewBoxSize={[200, 200]}
                                                center={[100, 100]}
                                            />
                                            <h3>{getYesterday()}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-start mr-24 items-center">
                                    <BarChart
                                        width={500}
                                        height={400}
                                        data={barHandler(
                                            adminTasksQuery.data.tasks
                                        )}>
                                        <CartesianGrid />
                                        <Tooltip />
                                        <Legend align="left" />
                                        <XAxis
                                            dataKey="name"
                                            label={{
                                                value: 'Days of the past week',
                                                angle: 0,
                                                position: 'bottom'
                                            }}
                                        />
                                        <YAxis
                                            label={{
                                                value: 'Time spent in minutes',
                                                angle: 270,
                                                position: 'middle'
                                            }}
                                        />
                                        <Bar
                                            dataKey="work"
                                            stackId="a"
                                            fill="#ff4d4d"
                                        />
                                        <Bar
                                            dataKey="break"
                                            stackId="a"
                                            fill="#3366ff"
                                        />
                                        <Bar
                                            dataKey="meeting"
                                            stackId="a"
                                            fill="#82ca5d"
                                        />
                                    </BarChart>
                                </div>
                            </>
                        )}
                    </div>
                    {adminTasksQuery.isFetched && (
                        <>
                            <div className="font-poppins text-4xl font-bold">
                                Viewing tasks for:{' '}
                                {adminTasksQuery.data.user.username}
                            </div>
                            {adminTasksQuery.data.tasks.map(
                                (task: any, index: number) => (
                                    <Task
                                        key={index}
                                        id={task._id}
                                        description={task.description}
                                        taskType={task.taskType}
                                        startTime={task.startTime}
                                        duration={task.duration}
                                    />
                                )
                            )}
                            {adminTasksQuery.data?.tasks.length === 0 && (
                                <div className="font-poppins text-4xl font-bold">
                                    Employee hasn't filed data here yet.
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return <Navigate to="/dashboard" />;
    }
};

export default EmployeeView;
