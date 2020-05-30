import React, { useReducer } from "react";
import countReducer from './reducers/countReducer';

const initialState = { count: 0 };

function TryUseReducer() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="box">
      <h1>Counter</h1>
      <h2>Count = {state.count}</h2>
      <button className="plus" onClick={handleIncrement}>
        +
      </button>
      <button className="minus" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default TryUseReducer;
