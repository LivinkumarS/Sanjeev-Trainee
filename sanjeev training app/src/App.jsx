import React, { createContext, useState } from "react";
import "./App.css";
import Child from "./Child";

export const countContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="parent">
      <h4>Count:{count}</h4>
      Parent
      <countContext.Provider value={{ count, setCount }}>
        <Child />
      </countContext.Provider>
    </div>
  );
}
