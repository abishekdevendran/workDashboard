import { UseMutationResult } from 'react-query';
import { MdDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router';

type Iprops = {
    id: string;
    username: string;
    email: string;
    contact: string;
    department: string;
    deleteEmployee: UseMutationResult<any, unknown, string, void>;
};

const Employee = (props: Iprops) => {
    const navigate = useNavigate();
    return (
        <div
            className="p-2 flex flex-row w-4/5 justify-between bg-slate-600 rounded-full m-2 hover:bg-white  transition-all cursor-pointer"
            onClick={() => navigate('/employeesView/' + props.id)}>
            {Object.entries(props).map((key, value) => {
                // console.log(key, value);
                if (key[0] !== 'id' && key[0] !== 'deleteEmployee') {
                    if (key[0] === 'username') {
                        return (
                            <p className="font-bold w-2/5 px-4" key={value}>
                                {String(key[1])}
                            </p>
                        );
                    }
                    if (key[0] === 'department') {
                        return (
                            <p className="font-bold w-2/5 px-4" key={value}>
                                {String(key[1])}
                            </p>
                        );
                    }
                    // if (key[0] === 'email') {
                    //     return (
                    //         <p className="font-bold w-2/5 px-4" key={value}>
                    //             {String(key[1])}
                    //         </p>
                    //     );
                    // }
                }
            })}

            <button
                onClick={() => props.deleteEmployee.mutate(props.id)}
                className={
                    'translate-y-0 hover:scale-110 pr-4  transition-all'
                }>
                <MdDeleteOutline size={20} />
            </button>
        </div>
    );
};

export default Employee;
