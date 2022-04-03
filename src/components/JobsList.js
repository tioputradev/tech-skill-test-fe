import React from "react";
import Button from "./Button";
import JobsListItem from "./JobsListItem";

const JobsList = ({ jobs }) => {
  return (
    <div className="container-fluid mb-8 px-10">
      <div className="border border-4 px-5 bg-white py-2">
        <h1 className="text-2xl font-bold mb-4 mt-4">Jobs List</h1>

        <JobsListItem
          id="id"
          company="Trade Republic"
          type="Full Time"
          title="Data Engineer"
          location="Berlin"
          createdAt={new Date()}
        />

        <Button title="More Jobs" />
      </div>
    </div>
  );
};

export default JobsList;
