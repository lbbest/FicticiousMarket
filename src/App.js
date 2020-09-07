import React from "react";
import "./App.css";
import ItemBox from "./Components/ItemBox";
import Navbar from "./Components/Navbar";
import CartBox from "./Components/CartBox";

function App() {
  return (
    // container div for app
    <div className="app-container">
      <Navbar />
      {/*container div for box components*/}
      <div className="box-container">
        <ItemBox />
        <CartBox />
      </div>
    </div>
  );
}

export default App;
