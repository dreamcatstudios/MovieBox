import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { auth } from "./config/Firebase";

const routerLocked = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

const routerUnlocked = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Homepage /> },
  { path: "/signup", element: <Homepage /> },
]);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        // Store user's login status in local storage
        localStorage.setItem("userLoggedIn", "true");
      } else {
        setUser(null);
        // Remove user's login status from local storage
        localStorage.removeItem("userLoggedIn");
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state change listener when the component unmounts
    };
  }, []);

  return (
    <>
      {user || localStorage.getItem("userLoggedIn") ? (
        <RouterProvider router={routerUnlocked}></RouterProvider>
      ) : (
        <RouterProvider router={routerLocked}></RouterProvider>
      )}
    </>
  );
}

export default App;
