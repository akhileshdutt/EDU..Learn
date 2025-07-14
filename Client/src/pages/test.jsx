import React, { useEffect, useState } from 'react';

const Test = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test') // Or just '/api/test' if you're using a Vite proxy
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-indigo-600">{message || "Loading..."}</h1>
    </div>
  );
};

export default Test;
