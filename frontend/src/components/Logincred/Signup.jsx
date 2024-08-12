/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    // Password verification regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 8 characters long and include one number, one uppercase letter, one lowercase letter, and one special character");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/signup`, {
        userName, email, password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Registered successfully");
        document.cookie = `journal_token=${response.data.message.token}`;
        navigate('/');
      }
    } catch (err) {
      toast.error("User already exists");
    }
  };

  return (
    <>
      <div
        style={{ 'animation': 'slideInFromLeft 1s ease-out' }}
        className="md:w-[50%] bg-gradient-to-r rounded-lb-xl shadow-2xl overflow-hidden p-10 space-y-8 rounded-r-xl">
        <h2
          style={{ 'animation': 'appear 2s ease-out' }}
          className="text-center text-4xl font-extrabold text-gray-900"
        >
          Register
        </h2>
        <p style={{ 'animation': 'appear 3s ease-out' }} className="text-center text-gray-900">
          Get started with your account
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input
              placeholder="Username"
              className="h-10 w-full border-solid border-2 border-gray-300 text-black bg-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              required=""
              id="name"
              name="name"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              placeholder="Email"
              className="h-10 w-full border-solid border-2 border-gray-300 text-black bg-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              required=""
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="h-10 w-full border-solid border-2 border-gray-300 text-black bg-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              required=""
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              placeholder="Confirm Password"
              className="h-10 w-full border-solid border-2 border-gray-300 text-black bg-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              required=""
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-red-400 hover:bg-red-500 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
          <ToastContainer />
        </form>
        <div className="text-center text-gray-900">Have an account?
          <button className="text-red-500 px-2 hover:underline" onClick={toLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

const Signup = () => {
  return (
    <div>
      <div className=''>
        <div className='flex items-center justify-center rounded-2xl h-[86vh]'>
          <div className='bg-opacity-20 backdrop-filter backdrop-blur-lg w-[55rem] h-[35rem] flex rounded-xl'>
            <div className='hidden w-[50%] md:block'>
              <img src={loginImg} alt="Login" />
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
