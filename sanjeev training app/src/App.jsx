import React from "react";
import "./App.css";

export default function App() {
  

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {/* {value && <p>Hello Guys!</p>} */}
      {value ? <p>Hello Guys!</p> : <p>Hi Guys!</p>}
    </div>
  );
}
