import { createContext, ReactNode } from 'react';
import {useRegister} from '../utility/fetchHandler';

export const EmployeeContext = createContext<any>({});

type IProps = {
    children: ReactNode; // 👈️ type children
};

export const EmployeeContextProvider = (props: IProps) => {
    const {employeeMutation, employeeQuery}=useRegister();
    return (
        <EmployeeContext.Provider value={{ employeeMutation, employeeQuery }}>
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeContext;
