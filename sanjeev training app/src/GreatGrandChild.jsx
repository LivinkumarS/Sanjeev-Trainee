import React from "react";

export default function GreatGrandChild(props) {
  return (
    <div>
      <h4>Count:{props.count}</h4>
      <button
        onClick={() => {
          props.setCount((prev) => ++prev);
        }}
      >
        change
      </button>
      GreatGrandChild
    </div>
  );
}
