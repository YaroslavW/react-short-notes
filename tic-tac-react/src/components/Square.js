import React from 'react'
import './Square.css'

const Square = ({updateGrid, first, second, value}) => {
  return (
  <div className="block" onClick={()=>updateGrid(first, second, 'X')}>{value}</div>
  )
}

export default Square;