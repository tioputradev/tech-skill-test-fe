import React, { useEffect, useState } from "react";
import JobsFilter from "../components/JobsFilter";
import JobsList from "../components/JobsList";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { fetchJobs } from "../services/jobs";

const Jobs = () => {
  const [filter, setFilter] = useState({
    description: "",
    location: "",
    fullTime: 0,
  });
  const [jobs, setJobs] = useState([]);

  const handleFilter = (description, location, fullTime) => {
    setFilter({
      description,
      location,
      fullTime: fullTime ? 1 : 0,
    });
  };

  useEffect(() => {
    fetchJobs(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpbzIiLCJpYXQiOjE2NDg5NjI3MjB9.ltjYbtXbqydwOFWSt3YR5MqzpgaPur95GyO8eN1Mpho",
      filter
    ).then((res) => {
      setJobs(res.data);
    });
  }, [filter]);

  return (
    <Layout>
      <JobsFilter handleFilter={handleFilter} />

      <JobsList jobs={jobs} />
    </Layout>
  );
};

export default Jobs;
