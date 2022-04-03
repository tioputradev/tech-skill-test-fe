import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/jobDetail";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
