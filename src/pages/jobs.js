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
  const [page, setPage] = useState(1);

  const handleFilter = (description, location, fullTime) => {
    setPage(1);

    setFilter({
      description,
      location,
      fullTime: fullTime ? 1 : 0,
    });
  };

  useEffect(() => {
    fetchJobs(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpbzIiLCJpYXQiOjE2NDg5NjI3MjB9.ltjYbtXbqydwOFWSt3YR5MqzpgaPur95GyO8eN1Mpho",
      filter,
      page,
      8
    ).then((res) => {
      setJobs(res.data);
    });
  }, [filter]);

  const handleLoadMore = () => {
    fetchJobs(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpbzIiLCJpYXQiOjE2NDg5NjI3MjB9.ltjYbtXbqydwOFWSt3YR5MqzpgaPur95GyO8eN1Mpho",
      filter,
      page + 1,
      8
    ).then((res) => {
      if (res.data.length) {
        const newList = jobs.concat(res.data);

        setJobs(newList);

        setPage(page + 1);
      } else {
        window.alert("no more additional jobs");
      }
    });
  };

  return (
    <Layout>
      <JobsFilter handleFilter={handleFilter} />

      <JobsList jobs={jobs} handleLoadMore={handleLoadMore} />
    </Layout>
  );
};

export default Jobs;
