import React from 'react'
import Square from './Square';

const Grid = () => {
  const [gridValue, setGridValue] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div>
      <h1>Title</h1>
      <div>
        {gridValue[0].map(block=>{
          return <Square/>
        })}
      </div>
      <h4>Total</h4>
    </div>
  )
}

export default Grid;