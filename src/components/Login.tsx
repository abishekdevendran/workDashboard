import { useContext } from 'react';
import UserContext from '../contexts/userContext';
import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let sendData = {
            username: data.get('username'),
            password: data.get('password')
        };
        console.log(sendData);
        login(sendData);
    };
    return (
        <div className="formContainer flex flex-col items-center justify-center h-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-stretch  bg-slate-600 p-8 rounded-3xl">
                <h1 className="self-center font-poppins font-extrabold text-white text-6xl m-8">
                    Login
                </h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="rounded-full px-2"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="rounded-full px-2"
                    required
                />
                <div className='flex w-full items-center justify-around'>
                    <button
                        type="submit"
                        className="bg-white rounded-full p-1 w-2/5 self-center hover:scale-110 mt-16 transition-all">
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white rounded-full p-1 w-2/5 self-center hover:scale-110 mt-16 transition-all">
                        Home
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
