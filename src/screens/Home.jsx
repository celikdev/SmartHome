import React from "react";

import Buttons from "../components/Buttons";
import Header from "../components/main/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-around px-96 h-96 items-center">
        <Buttons title="Kablolu Teknolojiler" />
        <Buttons title="Kablosuz Teknolojiler" />
      </div>
    </>
  );
};

export default Home;
