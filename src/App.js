import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/jobDetail";
import Jobs from "./pages/jobs";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
