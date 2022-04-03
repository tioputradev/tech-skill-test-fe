import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/jobDetail";
import Jobs from "./pages/jobs";
import Login from "./pages/login";

function App() {
  // i would use redux if i had more time
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/jobs/:jobId" element={<JobDetail token={token} />} />
        <Route path="/jobs" element={<Jobs token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
