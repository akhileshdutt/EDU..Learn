import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.',
    image: 'https://imgs.search.brave.com/zUhTq--5h4qYom3NagRoujGjFRnpIiDblIc3vWJi8Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9hcTEzbHds/NjYxNnEvMXpENXZL/S2lZMGhVTDFNQUdC/NmJuMi8xMzc0Mjcx/NzJjMjVhYjM0MDlj/NTBjMDQwY2JkZmM5/OC9KVFMucG5nP3c9/NjAwJmg9MzM4JnE9/NTAmZm09cG5nJmJn/PXRyYW5zcGFyZW50'
  },
  {
    title: 'JavaScript for Beginners',
    description: 'Master the basics of JavaScript programming language.',
    image: 'https://imgs.search.brave.com/7xs32sHet2BCpItrA0KJYFO17vCmB4ZLin1NOBeZW2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA2Lzk5LzE4/LzM2MF9GXzQwNjk5/MTgzNl81dmNKbER2/bldKN3JwWmY3U2Qz/MlpQSDJqRGJKRENP/OS5qcGc'
  },
  {
    title: 'React Essentials',
    description: 'Get started with React and build interactive web applications.',
    image: 'https://imgs.search.brave.com/CuPoWLlZfxDgBtgA6tavN8neAixGmSMsCNAZhDgrjTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0dGVybnMuZGV2/L2ltZy9yZWFjdGpz/L3JlYWN0LWxvZ29A/M3guc3Zn'
  }
];

const Payment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId];
  const [paid, setPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate delay
    setTimeout(() => {
      // Enroll logic from 2nd code
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
      const alreadyEnrolled = enrolledCourses.some(c => c.title === course.title);

      if (!alreadyEnrolled) {
        enrolledCourses.push(course);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
      }

      setPaid(true);
    }, 1000);
  };

  useEffect(() => {
    if (!course) {
      navigate('/');
    }
  }, [course, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {!paid ? (
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Course Payment</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6">
            <img src={course.image} alt={course.title} className="w-full sm:w-48 h-32 object-cover rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold mt-4 sm:mt-0">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-lg font-bold mt-2">₹499.00</p>
            </div>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full border rounded px-4 py-2" />
            <input type="email" placeholder="Email" required className="w-full border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number (0000 1111 2222 3333)" required className="w-full border rounded px-4 py-2" />
            <div className="flex space-x-4">
              <input type="text" placeholder="MM/YY" required className="w-1/2 border rounded px-4 py-2" />
              <input type="text" placeholder="CVV" required className="w-1/2 border rounded px-4 py-2" />
            </div>
            <button type="submit" className="bg-indigo-600 text-white w-full py-2 rounded font-semibold hover:bg-indigo-700 transition">
              Pay ₹499
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful! 🎉</h2>
          <p className="text-gray-700">You have successfully enrolled in <strong>{course.title}</strong>.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
