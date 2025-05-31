import React from "react";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
