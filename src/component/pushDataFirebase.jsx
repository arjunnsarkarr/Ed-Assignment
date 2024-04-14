import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";

const database = getDatabase(app);

const pushDataFirebase = () => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    set(ref(database, "users/" + name), {
      username: name,
    });
    alert("Hello ", name);
  };

  return (
    <>
      <h1>hey arjun</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default pushDataFirebase;
