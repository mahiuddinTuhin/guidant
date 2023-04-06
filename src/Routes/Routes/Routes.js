import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointing from "../../pages/appointing/Appointing";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/SignUp";
import Teachers from "../../pages/teachers/Teachers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointing/:teacherid",
        element: <Appointing />,
      },
    ],
  },
]);
