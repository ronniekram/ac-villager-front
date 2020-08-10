import React from 'react';
// import { Route, Link } from 'react-router-dom'
// import Island from './Island'

const Islands = props => {
  console.log(props)
  const islandList = props.islands && props.islands.map(island => 
    <li key={island.id}>{island.name}</li> )
  return (
    <div>
        {islandList}
    </div>
  )
}

// export default Islands;

// class Islands extends React.Component {
//   listIslands = () => {
//   return this.props.islands && this.props.islands.map(island => <li key={island.id}>{island.name}</li>)
//   }
//   render() {
//     return (
//       <div>
//         {this.listIslands()}
//       </div>
//     )
//   }
// }

export default Islands;