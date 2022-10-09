import React, { createContext, ReactNode } from 'react';
import useUser from '../utility/fetchHandler';

export const UserContext = createContext<any>({});

type IProps = {
    children: ReactNode; // 👈️ type children
};

export const UserContextProvider = (props: IProps) => {
    const [user,login,logout,update]=useUser();
    return (
        <UserContext.Provider value={{ user, login, logout, update}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
