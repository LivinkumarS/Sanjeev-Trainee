import React from "react";

export default function Child2(props) {
  return (
    <div>
      <h3>Count:{props.state}</h3>
      <button
        onClick={() => {
          props.setCount((prev) => ++prev);
        }}
      >
        Change State
      </button>
      Child2
    </div>
  );
}
