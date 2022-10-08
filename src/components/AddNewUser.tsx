import { useRegister } from "../utility/fetchHandler";
import React from "react";

const AddNewUser = () => {
    const {employeeMutation} = useRegister();
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault() // 👈️  to suppress default submit click
        let data = new FormData(event.target as HTMLFormElement);   // 👈️  pass the field names as string
        let formData={
            username:data.get('username'),
            password:data.get('password'),
            email:data.get('email'),
            contact:data.get('contact'),
            department:data.get('department'),
            joiningDate:data.get('joiningDate'),
            isAdmin:data.get('isAdmin')==='on'?true:false
        } 
        employeeMutation.mutate(formData);
    }
  return (
      <div className="formContainer flex flex-col items-center justify-center h-full">
          <form
              onSubmit={handleSubmit}
              className="flex flex-col items-stretch bg-slate-600 p-8 rounded-3xl mb-12">
              <h1 className="self-center font-poppins font-extrabold text-white text-6xl m-8">
                  Register
              </h1>
              <label htmlFor="username:">Username</label>
              <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="rounded-full px-2"
                  required
              />
              <label htmlFor="password:">Password</label>
              <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="rounded-full px-2"
                  required
              />
              <label htmlFor="email:">Email</label>
              <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="rounded-full px-2"
              />
              <label htmlFor="contact:">Contact</label>
              <input
                  type="tel"
                  placeholder="9898989898"
                  name="contact"
                  className="rounded-full px-2"
              />
              <label htmlFor="joiningDate:">Date of Joining</label>
              <input
                  type="text"
                  placeholder="IT"
                  name="department"
                  className="rounded-full px-2"
              />
              <label htmlFor="joiningDate"> Joining Date</label>
              <input
                  type="date"
                  placeholder="25-09-1997"
                  name="joiningDate"
                  className="rounded-full px-2"
              />
              <span className="flex w-full flex-row justify-center p-2">
                  <label htmlFor="isAdmin"> Is Admin?</label>
                  <input
                      type="checkbox"
                      name="isAdmin"
                      defaultChecked={false}
                      className="rounded-full mx-2"
                  />
              </span>
              <button
                  type="submit"
                  className="bg-white rounded-full p-1 m-2 w-2/5 self-center hover:scale-110  transition-all">
                  Register
              </button>
          </form>
      </div>
  );
}

export default AddNewUser