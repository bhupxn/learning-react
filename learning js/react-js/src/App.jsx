import React, { useState } from "react";

function App() {
  var [a, b] = useState(55);
  return (
    <>
      <body className="bg-black"></body>
      <div className="flex justify-center bg-pink-200 border-solid ">{a}</div>
      <button
        onClick={() => b(a + 5)}
        className="bg-green-500 border-b-blue-600"
      >
        CLICK
      </button>
    </>
  );
}

export default App;
