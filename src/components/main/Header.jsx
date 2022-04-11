import React, { useEffect } from "react";

import { FaMoon } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

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
      // eslint-disable-next-line no-negated-in-lhs
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
      <a href="/">
        <img src={Logo} className="w-48" />
      </a>
      <div className="flex gap-8 text-light-text dark:text-dark-text items-center">
        <Link to="/" className="font-Montserrat font-bold text-sm">
          home
        </Link>
        <Link to="/about" className="font-Montserrat font-bold text-sm">
          about
        </Link>
        <Link to="/solutions" className="font-Montserrat font-bold text-sm">
          solutions
        </Link>
        <Link to="/how-it-works" className="font-Montserrat font-bold text-sm">
          how it works
        </Link>
        <Link to="/help" className="font-Montserrat font-bold text-sm">
          help
        </Link>
        <button
          className="font-Montserrat font-bold text-sm pl-16"
          onClick={() => navigate("/login")}
        >
          login
        </button>
        <button id="toggleA" className="text-light-text dark:text-dark-text">
          <FaMoon size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
