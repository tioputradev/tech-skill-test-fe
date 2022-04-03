import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const JobsFilter = ({ handleFilter }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const handleChecked = () => {
    setFullTime(!fullTime);
  };

  const onSearch = () => {
    handleFilter(description, location, fullTime);
  };

  return (
    <div className="container-fluid mb-8 px-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-4">
          <Input
            label="Job Description"
            name="job_description"
            value={description}
            placeholder="Filter by title, benefit, companies, experties"
            showLabel={true}
            handleChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="col-span-1 lg:col-span-4">
          <Input
            label="Location"
            name="location"
            value={location}
            placeholder="Filter by city, state, zip code or country"
            showLabel={true}
            handleChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="col-span-1 lg:col-span-2 flex w-full items-center lg:justify-center">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            className="mr-2"
            value={fullTime}
            onChange={handleChecked}
          />{" "}
          Full Time Only
        </div>

        <div className="col-span-1 lg:col-span-2 flex w-full items-center justify-center">
          <Button title="Search" type="submit" handleOnClick={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default JobsFilter;
