import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  console.log(1);
  

  // function printVal(e) {
  //   // console.log(e.target.value); // the element
  //   setName(e.target.value);
  // }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        Print Name
      </button>
    </div>
  );
}
