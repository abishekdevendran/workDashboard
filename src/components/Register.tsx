import { useContext } from 'react';
import UserContext from '../contexts/userContext';

const Register = () => {
    const { signup } = useContext(UserContext);
    const handleRegister = (e: any) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let sendData = {
            username: data.get('username'),
            password: data.get('password'),
            isAdmin: data.get('isAdmin') === 'on' ? true : false
        };
        console.log(sendData);
        signup(sendData);
    };
    return (
        <div className="w-1/2">
            Register
            <form
                onSubmit={handleRegister}
                className="flex flex-col items-stretch">
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <input type="checkbox" name="isAdmin" defaultChecked={false} />
                <button type="submit">Register New User</button>
            </form>
        </div>
    );
};

export default Register;
