import { useContext } from "react";
import UserContext from "../contexts/userContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data=new FormData(e.target);
    let sendData={
      "username":data.get("username"),
      "password":data.get("password")
    };
    console.log(sendData);
    login(sendData);
  }
  return (
    <div>Login
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login