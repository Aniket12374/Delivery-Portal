// src/Login.js
import React, { useEffect, useState } from "react";
import { loginVendor } from "../services/Vendor/vendorService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      loginVendor()
        .then((res) => {
          const token = res?.data?.token;
          document.cookie = "authToken" + "=" + token;

          return navigate("/");
        })
        .catch((err) => console.log({ err }));
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='w-full p-2 border border-gray-300 rounded mb-4'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-full p-2 border border-gray-300 rounded mb-4'
          />
          <button
            type='submit'
            className='w-full p-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            Login
          </button>
          {message && (
            <div className='mt-4 text-center text-red-600'>{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
