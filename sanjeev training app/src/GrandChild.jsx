import React from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild(props) {
  return (
    <div>
      GrandChild
      <GreatGrandChild count={props.count} setCount={props.setCount} />
    </div>
  );
}
