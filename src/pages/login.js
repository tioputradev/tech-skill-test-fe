import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/auth";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError([]);

    userLogin(username, password)
      .then((res) => {
        navigate("jobs");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 422) {
          const resError = err.response.data.validationErrors.map(
            (msg) => msg.message
          );

          setError(resError);
        }
      });
  };

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-24 w-auto"
            src="https://www.dansmultipro.com/wp-content/uploads/2020/03/logo_web_header-810x180-1.png"
            alt="Dans multi pro"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>

          <p className="text-xs text-center text-red-500">
            {error.length ? error.map((e) => e) : ""}
          </p>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <Input
              label="username"
              name="username"
              placeholder="Username"
              type="text"
              required={true}
              handleChange={(e) => setUsername(e.target.value)}
            />

            <Input
              label="password"
              name="password"
              placeholder="password"
              type="password"
              required={true}
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
