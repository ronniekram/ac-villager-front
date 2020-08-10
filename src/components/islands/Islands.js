import React from 'react';

class Islands extends React.Component {
  listIslands = props => {
    console.log(props)
    return this.props.island && this.props.islands.map(island => <li key={island.id}> {island.name} </li>)
  }

  render() {
    return (
      <ul>
        {this.listIslands()}
      </ul>
    )
  }
}

export default Islands;