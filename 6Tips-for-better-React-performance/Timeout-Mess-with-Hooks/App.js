import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [message, setMessage] = useState("Hello User");
  useEffect(() => {
    setTimeout(() => {
      setMessage("Do you want to do it?");
    }, 3000);
  }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Line 1: We added an import for useEffect
// Line 6: We create function component
// Line 8–12: we added an effect to our function component. This effect sets a timer after 3 seconds that will change the text in the element with the id welcomeMessage. Because we passed an empty array to useEffect, this effect will only run once.
// Line 14–16: We replaced the previous code in App.js to render an h1element having the id welcomeMessage, which is our target element.
