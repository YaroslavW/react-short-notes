import React from "react";
import Pun from "./Pun";

const Items = props => {
  const item = props.data.map((val, index) => <Pun key={index} val={val} />);
  return <ul>{item}</ul>;
};

export default Items;
