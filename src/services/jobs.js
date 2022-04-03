import axios from "axios";

export const fetchJobs = async (accessToken, filter, page, limit) => {
  let params = {
    description: filter.description,
    location: filter.location,
    full_time: filter.fullTime,
    page,
    limit,
  };

  const data = await axios.get(`${process.env.REACT_APP_SERVER}/jobs`, {
    params: params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data.data;
};
