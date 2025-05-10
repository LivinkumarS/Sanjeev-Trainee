import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="parent">
      <h4>Count:{count}</h4>
      Parent
      <Child count={count} setCount={setCount} />
    </div>
  );
}
