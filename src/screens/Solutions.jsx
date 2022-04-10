import React from "react";
import { Header } from "../components/main";
import { Box } from "../components/main/UI/";
import {
  MdOutlineLightbulb,
  MdOutlineSmartScreen,
  MdSecurity,
} from "react-icons/md";
import { BiJoystickButton } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";

const Solutions = () => {
  const butonData = [
    {
      title: "Lights",
      icon: <MdOutlineLightbulb size={96} />,
    },
    {
      title: "Hubs",
      icon: <MdOutlineSmartScreen size={96} />,
    },
    {
      title: "Buttons",
      icon: <BiJoystickButton size={96} />,
    },
    {
      title: "Access Systems",
      icon: <AiOutlineIdcard size={96} />,
    },
    {
      title: "Security",
      icon: <MdSecurity size={96} />,
    },
  ];

  //TODO:Wired Ve Wirelles Teknolojiler İçin Butonlar Koyulacak. Butona Tıklandığında Kategoriler Çıkacak!

  return (
    <>
      <Header />
      <Box title="Solutions">
        <div className="grid grid-cols-3 gap-16">
          {butonData.map((buton) => (
            <button className="bg-light-background dark:bg-dark-background w-96 h-52 rounded-lg font-Montserrat font-bold transition duration-100 hover:scale-110 shadow text-light-text dark:text-dark-text flex flex-col items-center justify-between py-10">
              {buton.icon}
              {buton.title}
            </button>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Solutions;
