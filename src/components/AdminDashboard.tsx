import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext";
import AddNewUser from "./AddNewUser";
import EmployeesView from "./EmployeesView";

const AdminDashboard = () => {
  const {logout}=useContext(UserContext);
  return (
      <div className="h-full">
          <div className=" w-full bg-white p-4 flex justify-between">
              <Link className="font-bold text-4xl" to={'/dashboard'}>
                  Admin Dashboard
              </Link>
              <button
                  onClick={logout}
                  className="hover:scale-125 transition-all">
                  Logout
              </button>
          </div>
          <div className="w-full h-full flex flex-row">
              <div className="w-1/2 h-full border-2 border-dashed">
                  <EmployeesView />
              </div>
              <div className="w-1/2 h-full border-2 border-dashed">
                  <AddNewUser />
              </div>
          </div>
      </div>
  );
}

export default AdminDashboard