import React, { useState } from "react";

export default function Card(props) {
  return (
    <div>
      <h2>Name: {props.Name}</h2>
      <h2>Role: {props.Role}</h2>
      <h1>{props.Number}</h1>
    </div>
  );
}
