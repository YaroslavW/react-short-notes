import React from "react";

class Pun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Y"
    };
  }
  render() {
    return (
      <li
        key={this.props.key}
        onClick={() => this.setState({ value: "X" })}
        //  onClick={() => this.setState({ value: this.state.value === 'X'? 'Y':'X' })}
      >
        {this.state.value}
      </li>
    );
  }
}
export default Pun;
