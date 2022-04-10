import React, { useState } from "react";
import { Header } from "../components/main/";
import { Box } from "../components/main/UI";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <>
      <Header />
      <Box title="Login">
        <div className="flex flex-col w-full items-center gap-4">
          <input
            type="email"
            className="w-2/12 px-2 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-Montserrat font-semibold text-sm rounded-md shadow-lg outline-none border-2 border-transparent transition-colors duration-300 focus:border-green"
            placeholder="E-Mail"
          />
          <input
            type="password"
            className="w-2/12 px-2 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-Montserrat font-semibold text-sm rounded-md shadow-lg outline-none border-2 border-transparent transition-colors duration-300 focus:border-green"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => setPressed(!pressed)}
          className="bg-green disabled:cursor-not-allowed disabled:brightness-95 transition duration-300 flex items-center justify-center hover:brightness-95 w-32 h-9 rounded-lg font-Montserrat font-semibold text-sm"
        >
          {pressed ? <Spinner color="#202020" /> : "Login"}
        </button>
        <Link
          to="#"
          className="text-xs font-Montserrat font-semibold text-light-text dark:text-dark-text"
        >
          Forgot Your Password?
        </Link>
        <div className="flex items-center gap-2 opacity-50">
          <div className="bg-light-text dark:bg-dark-text w-20 h-0.5" />
          <h1 className="font-semibold font-Montserrat text-xs text-light-text dark:text-dark-text">
            or
          </h1>
          <div className="bg-light-text dark:bg-dark-text w-20 h-0.5" />
        </div>
        <Link
          to="/register"
          className="w-64 bg-light-background dark:bg-dark-background flex items-center justify-center font-Montserrat hover:brightness-95 transition duration-300 font-semibold text-sm text-light-text dark:text-dark-text py-4 rounded-lg shadow-lg"
        >
          Register
        </Link>
      </Box>
    </>
  );
};

export default Login;
