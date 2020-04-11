import React from 'react'
import Square from './Square';
import './Grid.css'

const Grid = () => {
  const [gridValue, setGridValue] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div>
      <h1>Title</h1>
      <div className="center">
        <div className="outer">
          <div style={{ display: "flex" }}>
            {gridValue[0].map((block) => {
              return <Square />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[1].map((block) => {
              return <Square />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[2].map((block) => {
              return <Square />;
            })}
          </div>
        </div>
      </div>

      <h4>Total</h4>
    </div>
  );
}

export default Grid;