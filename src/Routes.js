import {
  About,
  Dashboard,
  Help,
  Home,
  HowItWork,
  Login,
  Register,
  Solutions,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/how-it-works",
    element: <HowItWork />,
  },
  {
    path: "/help",
    element: <Help />,
  },
];
