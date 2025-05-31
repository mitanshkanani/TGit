import React from "react";
import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Login from "./pages/signup-in/login/Login";
import Register from "./pages/signup-in/signup/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Toaster 
        className="dark:hidden"
        theme="light"
        position="top-center"
        richColors 
      />
      <Toaster 
        className="hidden dark:block"
        theme="dark"
        position="top-center"
        richColors 
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
