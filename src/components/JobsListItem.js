import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const JobsListItem = ({ id, title, company, type, location, createdAt }) => {
  return (
    <div className="border-t-2">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Link to={`/jobs/${id}`}>
            <a className="text-blue-500 font-bold">{title}</a>
          </Link>
          <p className="text-gray-400 text-sm">
            {company} - <span className="text-green-500 font-bold">{type}</span>
          </p>
        </div>
        <div className="col-span-6">
          <p className="text-right">{location}</p>
          <p className="text-right text-gray-400 text-sm">
            {moment(createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsListItem;
