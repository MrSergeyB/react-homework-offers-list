import React from "react";
import "./App.css";
import Listing from "./components/listing";
import _jsonData from "./components/data/etsy.json";

function App() {
  console.log(_jsonData);
  return (
    <div className="App">
      <Listing items={_jsonData} />
    </div>
  );
}

export default App;
