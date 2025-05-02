import React, { useState } from "react";

export default function App() {
  const [lis, setLis] = useState([
    {
      _id: "67fa182e697d7c1549d6d622",
      title: "Understanding useState in React – The Power of State",
      description:
        "We use React’s `useState` hook to add interactivity to our components. The `useState` hook lets us store and manage local component state.\n\nIn the above example:\n- `count` is the current state value.\n- `setCount` is the function to update that value.\n- Every time the button is clicked, `setCount` increases the value, triggering a re-render.\n\nThis hook is super helpful when dealing with form inputs, toggles, counters, modals, and more — and it's one of the first steps to mastering React’s reactive behavior.\n\nSimple state, powerful impact — that’s the React way.",
      code: 'import React, { useState } from \'react\';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className="p-4 text-center">\n      <h1 className="text-2xl font-bold mb-2">Count: {count}</h1>\n      <button\n        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\n        onClick={() => setCount(count + 1)}\n      >\n        Increase\n      </button>\n    </div>\n  );\n};\n\nexport default Counter;\n',
      userId: {
        _id: "67dbcff075671a367c0c5dff",
        email: "slivinkumarkrr@gmail.com",
      },
      category: "React",
      likes: ["67dbcff075671a367c0c5dff"],
      noOfLikes: 1,
      createdAt: "2025-04-12T07:37:18.393Z",
      updatedAt: "2025-04-12T07:37:22.365Z",
      __v: 1,
    },
    {
      _id: "67e7535b0985cac7f8cca36d",
      title: "Why React is a Game-Changer for Modern Web Development",
      description:
        "React simplifies UI development with its component-based architecture, virtual DOM for efficient updates, and strong ecosystem support. It enhances performance, ensures scalability, and integrates seamlessly with back-end technologies. With features like hooks, reusable components, and state management, React remains a top choice for building modern web applications.\n\nUsing React hooks like useState makes state management easier in functional",
      code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n\nexport default Counter;\n',
      userId: {
        _id: "67dbcff075671a367c0c5dff",
        email: "slivinkumarkrr@gmail.com",
      },
      category: "React",
      likes: ["67dbcff075671a367c0c5dff"],
      noOfLikes: 1,
      createdAt: "2025-03-29T01:56:43.637Z",
      updatedAt: "2025-04-06T07:37:02.341Z",
      __v: 3,
    },
    {
      _id: "67e3883b6bd931defe315efe",
      title: "Enhancing Web Design with CSS",
      description:
        "CSS (Cascading Style Sheets) is used to style and enhance the appearance of HTML elements, making web pages visually appealing and responsive. It allows developers to control colors, fonts, spacing, layouts, and animations using selectors and properties. CSS can be applied inline, internally within a <style> tag, or externally via a separate .css file. For example, h1 { color: blue; font-size: 24px; } changes the heading color to blue and sets the font size. With techniques like Flexbox and Grid, CSS enables responsive design, ensuring web pages adapt to different screen sizes. Mastering CSS is essential for creating modern, user-friendly websites.",
      code: "h1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}\np {\n    font-family: Arial, sans-serif;\n    line-height: 1.5;\n}",
      userId: {
        _id: "67de452e3d4be9f5a9a9fa5e",
        email: "kamalrajms7@gmail.com",
      },
      category: "CSS",
      likes: ["67de452e3d4be9f5a9a9fa5e", "67dbcff075671a367c0c5dff"],
      noOfLikes: 2,
      createdAt: "2025-03-26T04:53:15.603Z",
      updatedAt: "2025-03-26T04:54:25.731Z",
      __v: 2,
    },
  ]);

  return (
    <div>
      {lis.map((ele, ind) => {
        return (
          <div key={ind}>
            <h1>{ele.title}</h1>
            <h3>{ele.category}</h3>
            <p>{ele.description}</p>
          </div>
        );
      })}
    </div>
  );
}
