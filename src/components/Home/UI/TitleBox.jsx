import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const TitleBox = () => {
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["userToken"]);

  return (
    <div className="container drop-shadow-xl my-16 mx-auto py-32 gap-4 flex flex-col bg-light-boxColor dark:bg-dark-boxColor px-24 rounded-xl">
      <h1 className="font-Montserrat font-extrabold text-5xl filter drop-shadow-lg text-light-text dark:text-dark-text">
        The Smartest Solution for <br /> Your Home
      </h1>
      <p className="font-Montserrat font-medium text-light-text dark:text-dark-text">
        We produce the smartest solution for you from scratch
      </p>
      <button
        onClick={() =>
          cookies.userToken ? navigate("/dashboard") : navigate("/login")
        }
        className="w-64 bg-green border-4 border-transparent font-Montserrat font-bold py-2 text-sm rounded-lg transition-colors duration-300 hover:bg-light-background hover:border-green"
      >
        Go Your Dashboard
      </button>
    </div>
  );
};

export default TitleBox;
