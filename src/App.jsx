import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./component/AllRoutes";
import { useFirebase } from "./context/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const authh = getAuth();

const App = () => {
  const [auth, setAuth] = useFirebase();
  useEffect(() => {
    onAuthStateChanged(authh, (user) => {
      if (user) {
        setAuth(user);
        console.log(user, "User logged in");
      } else {
        console.log(user, "User is not logged in");
        setAuth(null);
      }
    });
  }, [auth]);

  return (
    <>
      <AllRoutes />
    </>
  );
};

export default App;
