import React, { useState } from 'react';
import {useAppDispatch} from "../../lib/hooks";
import {useAppSelector} from "../../lib/hooks";
import toast from "react-hot-toast";
import {login} from "../../lib/features/authSlice";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [alert, setAlert] = useState({ message: '', type: 'info' });
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const isauth = useAppSelector(state => state.auth.authStatus);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       dispatch(login({username:email, password:password}));
      console.log("iskdsjsd====", isauth)
      const tkn = localStorage.getItem('tkn');
       if (tkn){
         toast.success("You have logged in successfully");
         router("/wariobanew/create");
       }else {
         toast.error("Invalid username or password. Login failed try again! ");
         return;
       }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error("Login failed try again!");
    //   setAlert({ message: 'Login failed. Please check your credentials and try again.', type: 'error' });
    }
  };



  return (
    <div className='flex flex-col items-center'>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center gap-5 max-w-lg shadow-2xl shadow-gray-900 py-10 hover:shadow-gray-300 bg-white mx-auto rounded-md text-gray-900 mt-20 text-xs px-10 mb-20'
      >
        <h3 className='text-xl font-bold'>MolAgribusiness</h3>
        <h3 className='text-xs'>Log In To continue</h3>

        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            required
            type="text"
            name="email"
            className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-xs"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            required
            type="password"
            name="password"
            className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-xs"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/* <span className='block w-full mr-auto ml-7'>Don't have an account? <Link className='text-blue-700 font-bold' href="/signup">Sign Up</Link></span> */}
        <button className='bg-[#42474a] text-white rounded-md p-[10px] w-[90%]' type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
