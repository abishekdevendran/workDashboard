import { UseMutationResult } from 'react-query';
import { MdDeleteOutline } from 'react-icons/md';
import React from 'react';

type Iprops = {
    id: number;
    description: string;
    taskType?: 'Break' | 'Meeting' | 'Work';
    startTime?: string;
    duration?: number;
    deleteTask: UseMutationResult<any, unknown, number, void>;
};

const Task = (props: Iprops) => {
    return (
        <div className="p-2 flex flex-row w-4/5 justify-between bg-gray-500 rounded-full m-2 hover:bg-slate-300  transition-all">
            {Object.entries(props).map((key, value) => {
                // console.log(key, value);
                if (key[0] !== 'id' && key[0] !== 'deleteTask') {
                    if (key[0] === 'description') {
                        return (
                            <p className="font-bold w-2/5 px-4" key={value}>
                                {String(key[1])}
                            </p>
                        );
                    }
                    if (key[0] === 'taskType') {
                        if (value === 2) {
                            return <p key={value}> - Break -</p>;
                        } else if (value === 1) {
                            return <p key={value}> - Meeting -</p>;
                        } else {
                            return <p key={value}> - Work -</p>;
                        }
                    }
                    if (key[0] === 'duration') {
                        return <p key={value}>{String(key[1]) + ' min'}</p>;
                    }
                }
            })}

            <button
                onClick={() => props.deleteTask.mutate(props.id)}
                className={
                    'translate-y-0 hover:scale-110 pr-4  transition-all'
                }>
                <MdDeleteOutline size={20} />
            </button>
        </div>
    );
};

export default Task;
