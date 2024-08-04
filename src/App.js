import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      {/* <Home/> */}
    </>
  );
}

export default App;
