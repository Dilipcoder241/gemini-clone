import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../../Axios/axios';


export default function Register() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    setUserData(obj);

    try {
      const {data} = await axios.post('/register' , obj);
      console.log(data);
      if(data.success){
        navigate("/login");
        toast.success("User Registered");
      } 
      
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    
  }


  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 h-full bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create your Account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">User Name</label>
            <div className="mt-2">
              <input id="name" name="username" type="text" required className="bg-transparent p-2 block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" required className="bg-transparent p-2 block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
              <div className="text-sm">
                {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" required className="bg-transparent p-2 block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register Now</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?
          <Link to="/login" className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</Link>
        </p>
      </div>
    </div>
  )
}
