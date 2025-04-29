import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

export default function App() {
  const [number, setNumber] = useState(0);


  const changeNum = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <Card Name="Sanjeev" Role="Dev" Number={number} />
      <Card Name="Naveen" Role="Dev" Number={number} />
      <Card Name="Livin" Role="Dev" Number={number} />
      <button onClick={changeNum}>Clickme</button>
    </div>
  );
}
