// import React from 'react';

// const EnrollPage = () => {
//   const course = [{
//     title: 'Full Stack Web Development',
//     description: 'Learn HTML, CSS, JavaScript to build complete web applications.',
//     duration: '3 Months',
//     level: 'Beginner to Advanced',
//     price: 4999,
//     offer: 'Limited time offer – Get certificate & 1:1 mentorship!'
//   };]

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
//         <h1 className="text-3xl font-bold mb-4 text-blue-600">{course.title}</h1>
//         <p className="text-gray-700 mb-4">{course.description}</p>

//         <ul className="text-gray-800 space-y-2 mb-6">
//           <li><strong>Duration:</strong> {course.duration}</li>
//           <li><strong>Level:</strong> {course.level}</li>
//           <li><strong>Includes:</strong> {course.offer}</li>
//         </ul>

//         <div className="flex justify-between items-center mb-4">
//           <span className="text-2xl font-semibold text-green-600">₹{course.price}</span>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
//             Confirm Enrollment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollPage;


import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Full Stack Web Development',
    description: 'Learn HTML, CSS, JavaScript, React.js, Express.js, node.js to build complete web applications.',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    price: 4999,
    offer: 'Limited time offer – Get certificate & 1:1 mentorship!'
  },
  {
    title: 'JavaScript for Beginners',
    description: 'Master the basics of JavaScript programming language.',
    duration: '2 Months',
    level: 'Biginner',
    price: 2999,
    offer: 'Limited time offer – Get certificate & 1:1 mentorship!'
  },
  {
    title: 'React Essentials',
    description: 'Get started with React and build interactive web applications.',
    duration: '2 Months',
    level: 'Advanced',
    price: 3499,
    offer: 'Limited time offer – Get certificate & 1:1 mentorship!'
  },
];

const Enroll = () => {
  const { courseId } = useParams();
  const course = courses[courseId];

  if (!course) {
    return <div className="p-10 text-red-500 font-bold">Course not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
       <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
         <h1 className="text-3xl font-bold mb-4 text-blue-600">{course.title}</h1>
         <p className="text-gray-700 mb-4">{course.description}</p>

         <ul className="text-gray-800 space-y-2 mb-6">
           <li><strong>Duration:</strong> {course.duration}</li>
           <li><strong>Level:</strong> {course.level}</li>
           <li><strong>Includes:</strong> {course.offer}</li>
         </ul>

         <div className="flex justify-between items-center mb-4">
           <span className="text-2xl font-semibold text-green-600">₹{course.price}</span>
           <Link to={`/Payment/${courseId}`}>
           <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
             Confirm Enrollment
           </button>
           </Link>
         </div>
       </div>
     </div>
  );
};

export default Enroll;
