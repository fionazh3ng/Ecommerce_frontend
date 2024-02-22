import React from "react";
import AllProduct from "../components/AllProduct";
import "./App.css";
import Navigation from "../components/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation></Navigation>

      <AllProduct></AllProduct>
    </div>
  );
};

export default App;
