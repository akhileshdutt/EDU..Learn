// // src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.jsx'
// // import forgetPass from './pages/forgetPass.jsx'; 
// // import test from './pages/test.jsx';

// import './index.css';

// import Home from './pages/home.jsx';
// import Login from './pages/login.jsx';
// import Register from './pages/Register.jsx';
// // import forgetPass from './pages/forgetPass.jsx';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgetPass" element={<forgetPass />} />
//         <Route path="/test" element={<test />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import ForgotPassword from './pages/ForgotPassword.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
