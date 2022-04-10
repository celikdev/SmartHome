import React from "react";

import { Header } from "../components/main";

import { TitleBox } from "../components/Home/UI";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  return (
    <>
      <Header />
      {cookies.userToken ? <h1>Your Dashboard</h1> : <TitleBox />}
    </>
  );
};

export default Home;
