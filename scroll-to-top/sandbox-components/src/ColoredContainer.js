import React from "react";

export default class ColoredContainer extends React.Component {
  render() {
    let containerStyle = {
      backgroundColor: this.props.color
    }
    return <div key={this.props.color} className="container" style={containerStyle}></div>
  }
}