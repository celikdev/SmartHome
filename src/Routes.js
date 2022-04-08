import {
  Home,
  Login,
  WiredTechnologies,
  WirellesTechnologies,
} from "./screens";

export const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/wired-technologies",
    element: <WiredTechnologies />,
  },
  {
    path: "/wirelles-technologies",
    element: <WirellesTechnologies />,
  },
];
