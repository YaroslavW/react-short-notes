import React from "react";
import ReactDOM from "react-dom";
import ColoredContainer from "./ColoredContainer";
import ScrollButton from "./ScrollButton ";

import "./styles.css";

class ScrollApp extends React.Component {
  constructor() {
    super();

    this.state = {
      colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7", "#6FF665", "#F67987"]
    }
  }

  render() {
    return <div className="long">
      {
        this.state.colors.map(function (color) {
          return <ColoredContainer key={color} color={color} />
        })
      }
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ScrollApp />, rootElement);
