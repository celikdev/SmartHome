import React from "react";

const Buttons = ({ title }) => {
  return (
    <button className="w-64 h-64 shadow bg-light-boxColor dark:bg-dark-boxColor rounded-lg">
      <h1 className="text-light-text dark:text-dark-text font-Montserrat font-bold text-lg">
        {title}
      </h1>
    </button>
  );
};

export default Buttons;
