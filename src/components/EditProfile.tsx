import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../contexts/userContext';

const EditProfile = () => {
    const { user,logout,update } = useContext(UserContext);
    const submitHandler = (event: React.FormEvent) => {
        console.log('Submitted');
        event.preventDefault(); // 👈️  to suppress default submit click
        let data = new FormData(event.target as HTMLFormElement); // 👈️  pass the field names as string
        let formData = {
            username: data.get('username'),
            password: data.get('password'),
            contact: data.get('contact'),
            department: data.get('department')
        };
        update(formData);
    };
  return (
      <div className="h-5/6">
          <div className=" w-full bg-white p-4 flex justify-between">
              <Link className="font-bold text-4xl" to={'/dashboard'}>
                  Profile Editing
              </Link>
              <div className="w-2/5 flex flex-row justify-end items-center">
                  <Link
                      className="hover:scale-125 transition-all mx-5"
                      to={'/dashboard'}>
                      Dashboard
                  </Link>
                  <button
                      onClick={logout}
                      className="hover:scale-125 transition-all">
                      Logout
                  </button>
              </div>
          </div>
          <div className="h-full w-full flex items-center justify-center">
              {/* {JSON.stringify(user)} */}
              <form
                  onSubmit={submitHandler}
                  className="flex flex-col items-stretch bg-slate-600 p-8 rounded-3xl mb-12">
                  <h1 className="self-center font-poppins font-extrabold text-white text-6xl m-12">
                      Edit Profile
                  </h1>
                  <label htmlFor="username" className="w-full">
                      Username:
                  </label>
                  <input
                      type="text"
                      defaultValue={user.username}
                      name="username"
                      className="rounded-full px-2"
                  />
                  <label htmlFor="contact" className="w-full">
                      Contact Number:
                  </label>
                  <input
                      type="tel"
                      defaultValue={user.contact}
                      name="contact"
                      className="rounded-full px-2"
                  />
                  <label htmlFor="department" className="w-full">
                      Department:
                  </label>
                  <input
                      type="text"
                      defaultValue={user.department}
                      name="department"
                      className="rounded-full px-2"
                  />
                  <label htmlFor="password" className="w-full">
                      Password:
                  </label>
                  <input
                      type="password"
                      name="password"
                      className="rounded-full px-2"
                  />
                  <div className="text-xs">
                      *Leave password blank if you don't want to change it.
                  </div>
                  <button
                      type="submit"
                      className="bg-white rounded-full p-1 m-2 w-2/5 self-center hover:scale-110  transition-all">
                      Save
                  </button>
              </form>
          </div>
      </div>
  );
}

export default EditProfile