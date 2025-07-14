

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const courses = [
        {
            title: 'Introduction to Web Development',
            description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.',
            image: 'https://imgs.search.brave.com/zUhTq--5h4qYom3NagRoujGjFRnpIiDblIc3vWJi8Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9hcTEzbHds/NjYxNnEvMXpENXZL/S2lZMGhVTDFNQUdC/NmJuMi8xMzc0Mjcx/NzJjMjVhYjM0MDlj/NTBjMDQwY2JkZmM5/OC9KVFMucG5nP3c9/NjAwJmg9MzM4JnE9/NTAmZm09cG5nJmJn/PXRyYW5zcGFyZW50', // You can keep your actual image URLs here
        },
        {
            title: 'JavaScript for Beginners',
            description: 'Master the basics of JavaScript programming language.',
            image: 'https://imgs.search.brave.com/7xs32sHet2BCpItrA0KJYFO17vCmB4ZLin1NOBeZW2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA2Lzk5LzE4/LzM2MF9GXzQwNjk5/MTgzNl81dmNKbER2/bldKN3JwWmY3U2Qz/MlpQSDJqRGJKRENP/OS5qcGc',
        },
        {
            title: 'React Essentials',
            description: 'Get started with React and build interactive web applications.',
            image: 'https://imgs.search.brave.com/CuPoWLlZfxDgBtgA6tavN8neAixGmSMsCNAZhDgrjTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0dGVybnMuZGV2/L2ltZy9yZWFjdGpz/L3JlYWN0LWxvZ29A/M3guc3Zn',
        },
    ];
    
    return (
        <div className="w-full ">

       <header className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-6 text-white w-full">
        <div className=" flex justify-between items-center sm:px-5">
          <h1 className="text-4xl text-center text-gray-50 py-4 font-serif ">EDU..Learn📝</h1>
          <div className="space-x-4">
            <Link to ="/login">
            <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">Login</button>
            </Link>
            <Link to='/Register'>
            <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">Register</button>
            </Link>  
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Courses</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>


        {/*Footer*/}

      <br />
      <br />
      <footer className="bg-gradient-to-r text-center text-sm p-4 w-full border-t-4 border-dotted border-indigo-500 text-indigo-500 text-3xs">
        <p>© 2023 EduLearn. All rights reserved.</p>
        <p>Empowering your learning journey</p>
      </footer>

    </div>
    
    
  );
  
};

export default Home;
