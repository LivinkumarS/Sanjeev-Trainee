import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    console.log("Hello from useEffect");
  },[state, state2]);

  return (
    <div>
      <h1>{state}</h1>
      <h1>{state2}</h1>
      <button
        onClick={() => {
          setState((prev) => {
            return ++prev;
          });
        }}
      >
        Change State1
      </button>
      <button
        onClick={() => {
          setState2((prev) => {
            return ++prev;
          });
        }}
      >
        Change State2
      </button>
    </div>
  );
}
