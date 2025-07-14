import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold ml-4">EduLearn</h1>
        <div className="mr-4 space-x-4">
          <button className="text-white">Login</button>
          <Link to='/Register'>
                <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">Register</button>
                </Link> 
        </div>
      </header>

      {/* Login Form */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-xl text-white p-6">
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-sm">Please login to continue your learning journey</p>
          </div>
          <form className="p-6 space-y-4">
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded hover:opacity-90 transition"
            >
              Login
            </button>
            <div className="text-center">
                <Link to='forgetPass'>
              <a className="text-purple-500 text-sm hover:underline">Forgot Password?</a></Link>
            </div>
            <div className="text-center text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link to='/Register'>
                <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">Register</button>
                </Link> 
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center text-sm p-4 mt-8">
        <p>© 2023 EduLearn. All rights reserved.</p>
        <p>Empowering your learning journey</p>
      </footer>
    </div>
  );
};

export default Login;
