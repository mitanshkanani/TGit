import React from "react";
import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Login from "./pages/signup-in/login/Login";
import Register from "./pages/signup-in/signup/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main/" element={<Main />} />
          <Route path="/main/project" element={<Main />} />
          <Route path="/main/profile" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
