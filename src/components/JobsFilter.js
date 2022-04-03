import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const JobsFilter = ({ handleSearch }) => {
  return (
    <div className="container-fluid mb-8 px-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-4">
          <Input
            label="Job Description"
            name="job_description"
            placeholder="Filter by title, benefit, companies, experties"
            showLabel={true}
          />
        </div>

        <div className="col-span-1 lg:col-span-4">
          <Input
            label="Job Description"
            name="job_description"
            placeholder="Filter by title, benefit, companies, experties"
            showLabel={true}
          />
        </div>

        <div className="col-span-1 lg:col-span-2 flex w-full items-center lg:justify-center">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            className="mr-2"
            value="Paneer"
          />{" "}
          Full Time Only
        </div>

        <div className="col-span-1 lg:col-span-2 flex w-full items-center justify-center">
          <Button title="Search" type="submit" handleOnClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default JobsFilter;
