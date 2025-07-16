import React, { useEffect, useState } from 'react';

const MyEnrolled = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(stored);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">📘 My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-500 text-lg">You haven't enrolled in any course yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEnrolled;
