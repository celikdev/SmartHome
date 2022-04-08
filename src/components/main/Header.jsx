import React, { useEffect, useState } from "react";

import { FaRegMoon, FaMoon } from "react-icons/fa";

const Header = () => {
  const [pressed, setPressed] = useState(false);

  const theme = localStorage.getItem("theme");

  useEffect(() => {
    document.getElementById("toggleA").addEventListener("click", function () {
      let htmlClasses = document.querySelector("html").classList;

      if (localStorage.theme == "dark") {
        htmlClasses.remove("dark");
        localStorage.removeItem("theme");
      } else {
        htmlClasses.add("dark");
        localStorage.theme = "dark";
      }
    });
    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  });
  return (
    <div className="flex justify-between px-64 py-4">
      <h1>Header</h1>
      <button id="toggleA" className="text-light-text dark:text-dark-text">
        <FaMoon size={24} />
      </button>
    </div>
  );
};

export default Header;
