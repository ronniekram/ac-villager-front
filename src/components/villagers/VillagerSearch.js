import React, { useEffect, useState } from 'react';
// import {connect} from 'react-redux';
// import {fetchVillagers} from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/actions/fetchVillagers.js'

// class VillagerSearch extends React.Component {
//   state = {
//     query: '',
//   }

//   handleChange = event => {
//     this.setState({
//       query: event.target.value
//     })
//   }
//     render() {
//     return (
//       <div>
//         <input type="text" className="searchbox" placeholder="Search villagers by name..." onChange={(event) => this.handleChange(event)}/>
//     <p>{this.state.query}</p>
//       </div>
//     )
//     }
//   }
 function VillagerSearch({villagers}) {
   const [searchTerm, setSearch] = React.useState("")
   const [searchResults, setResults] = React.useState([])
   const handleChange = event => {
     setSearch(event.target.value);
    };

    React.useEffect(() => {
      const results = villagers.filter(villager => 
          villager.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(results);
    }, [searchTerm]);


    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={searchTerm} onChange={handleChange} />

        <ul>
          {searchResults.map(villager => (
            <li>{villager.name}</li>
          ))}
        </ul>
      </div>
    )
 }
export default VillagerSearch;