// import React from 'react';
// import Villagers from './Villagers';

// class VillagerSearch extends React.Component {
//   state = {
//     query: ''
//   }

//   handleChange = event => {
//     this.setState({
//       query: event.target.value
//     })
//   }

//   searchResults = () => {
//     return this.props.villagers.filter(villager => villager.name.toLowerCase().includes(this.state.query.toLowerCase()))
//   }

//     displayResults = () => {
//       if (this.state.query === '') {
//         return <div></div>
//       } else {
//         return <Villagers villagers={this.searchResults()} />
//       }
//     }
    
//   render() {
//     return (
//       <div className="searchbar">
//         <input type="text" placeholder="Search villager by name..." value={this.state.query} onChange={this.handleChange} />

//         {this.displayResults()}

//       </div>
//     )
//   }
// }
// export default VillagerSearch;


import React, { useState } from 'react';
import Villagers from './Villagers';

  function VillagerSearch({villagers}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }

   const displayResults = () => {
      if (query === '') {
        return <div></div>
      } else {
        return <Villagers villagers={searchResults()} />
      }
    }
    
    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={query} onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}

      </div>
    )
  }

export default VillagerSearch;