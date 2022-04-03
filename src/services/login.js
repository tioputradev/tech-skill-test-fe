import axios from "axios";

export const userLogin = async (username, password) => {
  const data = await axios.post(
    `${process.env.REACT_APP_SERVER}/auth/sign-in`,
    {
      username,
      password,
    }
  );

  return data.data;
};
