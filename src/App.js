import React from "react";
import { Routes, Route } from "react-router-dom";
import { route } from "./Routes";

import { NotFound } from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {route.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
