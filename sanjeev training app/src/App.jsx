import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  console.log(data);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${state}`
      );
      const data = await response.json();
      setData([data]);
    };

    fetchData();
  }, [state]);

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState((prev) => {
            return ++prev;
          });
        }}
      >
        Change State1
      </button>

      <h1>Posts</h1>

      <div>
        {data.map((item, ind) => {
          return (
            <div key={ind}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
