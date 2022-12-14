import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
import barHandler from '../utility/barHandler';
import { useTasks } from '../utility/fetchHandler';
import getToday from '../utility/getToday';
import getYesterday from '../utility/getYesterday';
import pieHandler from '../utility/pieHandler';
import taskFilter from '../utility/taskFilter';
import Loading from './Loading';
import Task from './Task';
import TaskForm from './TaskForm';

const TasksView = () => {
    const [filterDate, setFilterDate] = useState({ date: getToday(), isFilter: false });
    const { tasksQuery, tasksAdd, tasksDelete } = useTasks();
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        let data = new FormData(e.target as HTMLFormElement);
        let formData = {
            description: data.get('description'),
            duration: Number(data.get('duration')),
            startTime: String(data.get('startTime')),
            taskType: data.get('taskType')
        };
        tasksAdd.mutate(formData);
    };
    return (
        <div className="taskadder flex flex-col items-center justify-center">
            <div className="w-full flex flex-column justify-around">
                {tasksQuery.isLoading && <Loading />}
                {tasksQuery.isFetched && (
                    <>
                        <div className="leftContainer w-2/3 flex flex-col justify-center items-center p-8">
                            <TaskForm submitHandler={submitHandler} />
                            {tasksQuery.data.tasks.length > 0 && (
                                <div className="pieContainer flex flex-row items-center justify-center">
                                    <div className="pie flex flex-col items-center">
                                        <PieChart
                                            data={
                                                pieHandler(
                                                    taskFilter(
                                                        tasksQuery.data.tasks,
                                                        filterDate
                                                    )
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
                                                    taskFilter(
                                                        tasksQuery.data.tasks,
                                                        filterDate
                                                    )
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
                            )}
                        </div>
                        <div className="w-1/3 flex justify-start mr-24 items-center">
                            <BarChart
                                width={500}
                                height={400}
                                data={barHandler(
                                    taskFilter(
                                        tasksQuery.data.tasks,
                                        filterDate
                                    )
                                )}>
                                <CartesianGrid />
                                <Tooltip />
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="top"
                                    align="center"
                                />
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
            {tasksQuery.isFetched && (
                <>
                    {/* <div className="font-poppins text-4xl font-bold">
                        Viewing tasks for: {tasksQuery.data.user.username}
                    </div> */}
                    <div className="formContainer w-full flex flex-col items-center">
                        <h2>Filter :</h2>
                        <form className="form flex flex-row w-1/6 items-center justify-around">
                            <input
                                type="date"
                                onChange={(e) =>
                                    setFilterDate({
                                        date: e.target.value,
                                        isFilter: true
                                    })
                                }
                                className="rounded-full px-2 cursor-pointer"
                                value={filterDate.date}
                                max={getToday()}
                            />
                            <input
                                type="checkbox"
                                className="rounded-full px-2 scale-150 cursor-pointer"
                                onChange={(e) =>
                                    setFilterDate({
                                        ...filterDate,
                                        isFilter: e.target.checked
                                    })
                                }
                                checked={filterDate.isFilter}
                            />
                        </form>
                    </div>
                    {taskFilter(tasksQuery.data.tasks, filterDate).map(
                        (task: any, index: number) => (
                            <Task
                                key={index}
                                id={task._id}
                                description={task.description}
                                taskType={task.taskType}
                                startTime={task.startTime}
                                duration={task.duration}
                                deleteTask={tasksDelete}
                            />
                        )
                    )}
                </>
            )}

            {tasksQuery.data?.tasks.length === 0 && (
                <div className="font-poppins text-4xl font-bold">
                    No tasks here yet.
                </div>
            )}
        </div>
    );
};

export default TasksView;
