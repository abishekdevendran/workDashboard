import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useTasks } from '../utility/fetchHandler';
import pieHandler from '../utility/pieHandler';
import Task from './Task';
import TaskForm from './TaskForm';

const TasksView = () => {
    const { tasksQuery, tasksAdd, tasksDelete } = useTasks();
    const colors = ['green', 'red', 'yellow'];
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
    // return {
    //     title: String(task?.taskType),
    //     value: task?.duration * 1,
    //     color: colors[
    //         task.taskType === 'Work'
    //             ? 0
    //             : task.taskType === 'Meeting'
    //             ? 1
    //             : 2
    //     ]
    // };
    return (
        <div className="taskadder flex flex-col items-center justify-center">
            TasksView
            <div className="w-full flex flex-row justify-around">
                <TaskForm submitHandler={submitHandler} />
                {tasksQuery.isLoading && <div>Loading..</div>}
                {tasksQuery.isFetched && (
                    <div className="w-1/3 flex justify-center items-stretch">
                        <PieChart
                            data={pieHandler(tasksQuery.data.tasks)[0]}
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
                            data={pieHandler(tasksQuery.data.tasks)[1]}
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
                )}
            </div>
            {tasksQuery.isFetched &&
                tasksQuery.data.tasks.map((task: any, index: number) => (
                    <Task
                        key={index}
                        id={task._id}
                        description={task.description}
                        taskType={task.taskType}
                        startTime={task.startTime}
                        duration={task.duration}
                        deleteTask={tasksDelete}
                    />
                ))}
        </div>
    );
};

export default TasksView;
