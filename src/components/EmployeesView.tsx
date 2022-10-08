import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router';
import UserContext from '../contexts/userContext';
import { useRegister } from '../utility/fetchHandler';
import Employee from './Employee';

const EmployeesView = () => {
    const { user } = useContext(UserContext);
    const { employeeQuery, employeeTermination } = useRegister();
    if (user?.isAdmin) {
        return (
            <div>
                {employeeQuery.isLoading && <p>Fetching Employees</p>}
                {employeeQuery.isError && <p>Cannot fetch</p>}
                {employeeQuery.isFetched && (
                    <div>
                        {employeeQuery.data?.employees.map(
                            (data: any, index: number) => {
                                return (
                                    <Employee
                                        id={data._id}
                                        contact={data.contact}
                                        department={data.department}
                                        key={index}
                                        deleteEmployee={employeeTermination}
                                        email={data.email}
                                        username={data.username}
                                    />
                                );
                            }
                        )}
                    </div>
                )}
            </div>
        );
    } else {
        toast.error('Not authorized to view this page!');
        return <Navigate to="/" />;
    }
};

export default EmployeesView;
