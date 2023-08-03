import React, { useState } from "react";
import LikeButton from "./components/LikeButton";

// const App = () =>
//   React.createElement(
//     "div",
//     { className: "py-12 flex justify-center items-center gap-4" },
//     React.createElement("p", { className: "text-3xl" }, "Hello World!"),
//     React.createElement(LikeButton)
//   );

const App = () => {
  const [message, setMessage] = useState("Hello Johnson");

  return (
    <div className="py-12 flex justify-center items-center gap-4">
      <p className="text-3xl">{message}</p>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <LikeButton />
    </div>
  );
};

export default App;
