import React from "react";

export default function Card(props) {

  return (
    <div>
      <h2 className="head">Name: {props.Name}</h2>
      <h2>Role: {props.Role}</h2>
    </div>
  );
}
