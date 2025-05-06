import React, { useState } from "react";

export default function App() {
  const [favFruits, setFavFruits] = useState(["mango", "melon", "banana"]);
  const [value, setValue] = useState("");

  const handleDel = (ind) => {
    setFavFruits(((prev)=>{
      return prev.filter((ele,index)=>{
        return ind!==index
      })
    }))
  };

  const handleAdd=()=>{
    
    setValue("")
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button>add</button>

      <h2>My Fav Fruits List</h2>
      <ul>
        {favFruits.map((ele, ind) => {
          return (
            <li key={ind}>
              {ele}
              <button
                onClick={() => {
                  handleDel(ind);
                }}
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
