import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>List</h1>
        <ul>
          {
            this.props.data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default List;