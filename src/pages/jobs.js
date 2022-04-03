import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobsFilter from "../components/JobsFilter";
import JobsList from "../components/JobsList";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { fetchJobs } from "../services/jobs";

const Jobs = ({ token }) => {
  const [filter, setFilter] = useState({
    description: "",
    location: "",
    fullTime: 0,
  });
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleFilter = (description, location, fullTime) => {
    setPage(1);

    setFilter({
      description,
      location,
      fullTime: fullTime ? 1 : 0,
    });
  };

  useEffect(() => {
    if (!token) navigate("/");
    fetchJobs(token, filter, page, 8).then((res) => {
      setJobs(res.data);
    });
  }, [filter]);

  const handleLoadMore = () => {
    fetchJobs(token, filter, page + 1, 8).then((res) => {
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
