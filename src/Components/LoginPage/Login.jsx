import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../Axios/axios';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const fromData = new FormData(e.target);
    const obj = Object.fromEntries(fromData.entries());

    try {
      const {data} = await axios.post('/login' , obj);
      if(data.success){
        localStorage.setItem("Token" , data.token);
        navigate("/home");
        toast.success(" Login Successfull");
      } 
      
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    
  }


  return ( 
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 h-full bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6" />
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
              <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 p-2 text-white bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 ">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Don't have an account?
          <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-1">Register Now</Link>
        </p>
      </div>
    </div>
  )
}
