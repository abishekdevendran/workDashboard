import { useContext } from "react";
import UserContext from "../contexts/userContext";

const EmployeeDashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <div>EmployeeDashboard
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default EmployeeDashboard