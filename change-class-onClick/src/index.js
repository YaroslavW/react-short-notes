import React from "react";
import ReactDOM from "react-dom";
import Item from './Item';

import "./styles.css";

function App() {
  const data = ['home','about','goods','contacts'];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Item data={data} />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
