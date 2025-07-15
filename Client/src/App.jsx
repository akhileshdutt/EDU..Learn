// import { Routes, Route, Router } from 'react-router-dom';
// import Home from './pages/home'
// import Login from './pages/login'
// import Register from './pages/Register'
// import Test from './pages/Test';
// function App() {
//   return (
//     <Router>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/register" element={<Register />} />
//       {/* <Route path="/test" element={<Test />} /> */}
//     </Routes>
//     </Router>
//   );
// }
// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/Register';
import Test from './pages/Test1';

function App() {
  const [data, setData] = useState('');

    useEffect(() => {
    fetch('http://localhost:5000/api/user/ping')
      .then((res) => res.json())
      .then((json) => setData(json.msg))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <>
    <p>{data}</p>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Test1" element={<Test />} />
    </Routes>
    </>
  );
}

export default App;