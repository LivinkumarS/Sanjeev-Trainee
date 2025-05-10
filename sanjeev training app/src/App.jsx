import React, { useState } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function App() {
  const [count, setCount] = useState(5);
  return (
    <div className="parent">
      Parent
      <Child1 state={count} />
      <Child2 state={count} setCount={setCount} />
    </div>
  );
}
