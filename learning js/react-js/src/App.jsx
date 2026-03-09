import React, { useState } from "react";
import Navbar from "./navbar";

function App() {
  var [a, b] = useState(55);
  return (
    <>
      <div className="flex justify-center bg-pink-200 border-solid ">{a}</div>
      <button
        onClick={() => b(a + 5)}
        className="bg-green-500 border-b-blue-600 "
      >
        CLICK ME !!
      </button>
    </>
  );
}

export default App;
