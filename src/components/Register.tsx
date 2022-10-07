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
            isAdmin: data.get('isAdmin')==="on"?true:false
        };
        console.log(sendData);
        signup(sendData);
    };
    return (
        <div>
            Register
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <input type="checkbox" name="isAdmin" defaultChecked={false} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Register;
