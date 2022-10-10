import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/userContext';
import AddNewUser from './AddNewUser';
const Register = () => {
    const { logout } = useContext(UserContext);
    return (
        <div>
            <div className=" w-full bg-white p-4 flex justify-between">
                <Link className="font-bold text-4xl" to={'/dashboard'}>
                    Register New User
                </Link>
                <button
                    onClick={logout}
                    className="hover:scale-125 transition-all">
                    Logout
                </button>
            </div>
            <AddNewUser />
        </div>
    );
};

export default Register;
