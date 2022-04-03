import React from "react";
import JobsFilter from "../components/JobsFilter";
import JobsList from "../components/JobsList";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Jobs = () => {
  const handleSearch = () => {};

  return (
    <Layout>
      <JobsFilter handleSearch={handleSearch} />

      <JobsList />
    </Layout>
  );
};

export default Jobs;
