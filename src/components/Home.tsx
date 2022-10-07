import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>Home
      <Link to ="/login">Login</Link>
      <Link to ="/signup">SignUp</Link>
    </div>
  )
}

export default Home