import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Enroll from "./pages/Enroll";
import Payment from "./pages/Payment";
import MyEnrolled from "./pages/myEnrolled";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enroll/:courseId" element={<Enroll />} />
        <Route path="/payment/:courseId" element={<Payment />} />
        <Route path="/myEnrolled" element={<MyEnrolled />} />
        

        
        {/* Protected Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}

export default App;
