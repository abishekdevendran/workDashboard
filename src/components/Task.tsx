import { UseMutationResult } from 'react-query';
import { MdDeleteOutline } from 'react-icons/md';
type Iprops = {
    id: number;
    description: string;
    taskType?: 'Break' | 'Meeting' | 'Work';
    startTime?: string;
    duration?: number;
    deleteTask?: UseMutationResult<any, unknown, number, void>;
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
                        if (key[1] === 'Break') {
                            return <p key={value}> - Break -</p>;
                        } else if (key[1] === 'Meeting') {
                            return <p key={value}> - Meeting -</p>;
                        } else {
                            return <p key={value}> - Work -</p>;
                        }
                    }
                    if (key[0] === 'startTime') {
                        return (
                            <p key={value}>
                                {' '}
                                -{' '}
                                {new Date(String(key[1]))
                                    .toDateString()
                                    .split(' ')
                                    .splice(0, 4)
                                    .join(' ')}{' '}
                                -
                            </p>
                        );
                    }
                    if (key[0] === 'duration') {
                        return (
                            <p key={value} className="px-4">
                                {String(key[1]) + ' min'}
                            </p>
                        );
                    }
                }
            })}

            {props.deleteTask && (
                <button
                    onClick={() => props.deleteTask!.mutate(props.id)}
                    className={
                        'translate-y-0 hover:scale-110 pr-4  transition-all'
                    }>
                    <MdDeleteOutline size={20} />
                </button>
            )}
        </div>
    );
};

export default Task;
