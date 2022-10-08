import { Link } from "react-router-dom"
import React from 'react';

const Home = () => {
  return (
      <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="font-poppins font-extrabold text-8xl">Welcome.</div>
          <div className="font-poppins font-extrabold text-4xl">
              Login to get started!
          </div>
          <Link
              to="/login"
              className="my-4 px-12 py-4 font-bold text-center text-white rounded-full bg-black">
              Login
          </Link>
          <div className="font-poppins font-extrabold text-xl text-gray-500">
              Default admin credentials are "admin" and "admin"
          </div>
      </div>
  );
}

export default Home