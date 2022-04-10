import React from "react";

const Box = ({ children, title }) => {
  return (
    <div className="container bg-light-boxColor dark:bg-dark-boxColor mx-auto my-10 rounded-lg flex flex-col items-center py-10 gap-8 shadow-lg">
      <h1 className="font-Montserrat font-bold text-lg text-light-textColor dark:text-dark-text">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Box;
