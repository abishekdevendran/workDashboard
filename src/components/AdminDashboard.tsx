import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext";

const AdminDashboard = () => {
  const {logout}=useContext(UserContext);
  return (
      <div>
          <div className=" w-full bg-white p-4 flex justify-between">
              <h1 className="font-bold text-4xl">Admin Dashboard</h1>
              <button onClick={logout} className="hover:scale-125 transition-all">Logout</button>
          </div>
          <Link to="/taskview">Tasks View</Link>
      </div>
  );
}

export default AdminDashboard