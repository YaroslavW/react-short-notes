import React from "react";
import ReactDOM from "react-dom";
import List from './List';
import "./styles.css";
const COUNT = 5000;
const demoData = Array.from({
  length: COUNT
}).map((_, i) => ({
  id: i,
  name: Math.random()
}));
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <List data={demoData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
