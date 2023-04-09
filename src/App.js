import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";
import { useDispatch, useSelector } from "react-redux";

import {
  loggedInUser,
  login,
  logout,
} from "./features/authentication/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./features/authentication/authApi";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authentication);

  // try to check loggedin user

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            id: userAuth.uid,
            name: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
