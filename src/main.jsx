import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import FirebaseProvider from "./context/FirebaseContext.jsx";
FirebaseProvider;

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </FirebaseProvider>
);
