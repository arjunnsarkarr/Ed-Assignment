import React, { createContext, useContext, useState } from "react";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  const [auth, setAuth] = useState(null);
  return (
    <FirebaseContext.Provider value={[auth, setAuth]}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
