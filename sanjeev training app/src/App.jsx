import React from "react";
import "./App.css";
import Card from "./Card";

export default function App() {
  return (
    <div>
      <h1 className="head">Player List</h1>

      <Card
        Image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
        Name="Virat Kohli"
        Team="RCB"
        Trop="0"
      />
      <Card
        Image="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
        Name="MS Dhoni"
        Team="CSK"
        Trop="5"
      />
    </div>
  );
}
