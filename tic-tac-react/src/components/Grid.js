import React from 'react'
import Square from './Square';
import './Grid.css'

const Grid = () => {
  const [gridValue, setGridValue] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const updateGrid = (first, second, value) => {
    const newGrid = [...gridValue];
    newGrid[first][second] = value;
    setGridValue(newGrid);
  }
  return (
    <div>
      <h1>Title</h1>
      <div className="center">
        <div className="outer">
          <div style={{ display: "flex" }}>
            {gridValue[0].map((someValue, index) => {
              return (
                <Square
                  updateGrid={updateGrid}
                  first={0}
                  second={index}
                  value={someValue}
                />
              );
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[1].map((someValue, index) => {
              return (
                <Square
                  updateGrid={updateGrid}
                  first={1}
                  second={index}
                  value={someValue}
                />
              );
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[2].map((someValue, index) => {
              return <Square updateGrid={updateGrid}
                  first={2}
                  second={index}
                  value={someValue}/>;
            })}
          </div>
        </div>
      </div>

      <h4>Total</h4>
    </div>
  );
}

export default Grid;