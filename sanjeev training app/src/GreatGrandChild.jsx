import React, { useContext } from "react";
import { countContext } from "./App";

export default function GreatGrandChild() {
  const { count, setCount } = useContext(countContext);

  return (
    <div>
      <h4>Count:{count}</h4>
      <button
        onClick={() => {
          setCount((prev) => ++prev);
        }}
      >
        change
      </button>
      GreatGrandChild
    </div>
  );
}
