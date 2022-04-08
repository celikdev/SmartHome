import React from "react";

import { Header } from "../components/main";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-16 mx-auto py-32 gap-4 flex flex-col bg-light-boxColor dark:bg-dark-boxColor px-24 rounded-xl">
        <h1 className="font-Montserrat font-extrabold text-5xl filter drop-shadow-lg">
          The Smartest Solution for <br /> Your Home
        </h1>
        <p className="font-Montserrat font-medium">
          We produce the smartest solution for you from scratch
        </p>
        <button className="w-64 bg-green border-4 border-transparent font-Montserrat font-bold py-2 text-sm rounded-lg transition-colors duration-300 hover:bg-light-background hover:border-green">
          Go Your Dashboard
        </button>
      </div>
    </>
  );
};

export default Home;
