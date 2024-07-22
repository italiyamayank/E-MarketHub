import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContexts } from "../Context/Context";

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const { setIsAuthenticated, navigate, location } = useContexts();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", credentials)
      .then((result) => {
        console.log(result);
        if (result.data === "login") {
          const use = localStorage.setItem("login", result.data);
          setIsAuthenticated(true);
          navigate(location.state?.from || "/");
        }
      })
      .catch((err) => console.log(err));
  };

  const onhandalechange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  onChange={onhandalechange}
                  value={credentials.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={onhandalechange}
                  value={credentials.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Sign in
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member ?
              <Link to={"/signup"} className="font-semibold leading-6 ">
                sign up
              </Link>
            </p>
            <p
              className="text-center text-sm text-gray-500"
              style={{ marginTop: "12px" }}
            >
              Or continue with
            </p>
            <div className="flex justify-between ">
              <button className="px-12 py-1 border flex gap-2 border-slate-500 rounded-lg  hover:border-slate-400  hover:text-slate-900 -slate-300 hover:shadow transition duration-150">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                ></img>
                <span>Google</span>
              </button>
              <button className="px-12 py-1 border flex gap-2 border-slate-500 rounded-lg  hover:border-slate-400  hover:text-slate-900 -slate-300 hover:shadow transition duration-150">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  loading="lazy"
                  alt="google logo"
                ></img>
                <span>Github</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
