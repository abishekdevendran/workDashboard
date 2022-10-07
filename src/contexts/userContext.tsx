import React, { createContext, useReducer, ReactNode } from 'react';
import useUser from '../utility/fetchHandler';

export const UserContext = createContext<any>({
    user: {},
    setUser: (user: any) => {}
});

type IProps = {
    children: ReactNode; // 👈️ type children
};

export const UserContextProvider = (props: IProps) => {
    const [user,login,logout, signup]=useUser();
    return (
        <UserContext.Provider value={{ user, login, logout, signup }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
