import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAatDLkHMq6Typt7gddAcG84Ko2zck60Q",
  authDomain: "caiai-484da.firebaseapp.com",
  projectId: "caiai-484da",
  storageBucket: "caiai-484da.appspot.com",
  messagingSenderId: "768229795035",
  appId: "1:768229795035:web:12c515b51228f3d3dcd8fe",
  databaseURL: "https://caiai-484da-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
