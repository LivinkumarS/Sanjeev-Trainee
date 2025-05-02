import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("false");

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {value ? <p>Hello</p> : <p>Hi</p>}

      <button
        onClick={() => {
          setValue((prev) => {
            return !prev;
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
