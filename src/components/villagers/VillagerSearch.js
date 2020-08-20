// import React, { useState } from 'react';
// import { Col } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import Villagers from './Villagers';

// function VillagerSearch({villagers}) {
//   const [query, setQuery] = useState('')

//   const searchResults = () => {
//     return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase())) 
//     }

//    const displayResults = () => {
//     const results = searchResults();
//       if (query === '') {
//         return <div></div>
//       } else {
//         return <Villagers villagers={results} />
//       }
//     }
    
//     return (
//       <Col className="column card">
//         <input type="text" 
//           className="searchbar"
//           placeholder="Search villager by name..." 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} />

//         {displayResults()}
//       </Col>
//     )
//   }

//   const mapStateToProps = (state) => {
//     return {
//       villagers: state.villagerReducer.villagers,
//       islands: state.islandReducer.islands
//     }
//   }

  
// export default connect(mapStateToProps)(VillagerSearch);

// import React, { useState } from 'react';
// import { Col } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import Villagers from './Villagers';

// function VillagerSearch({villagers}) {
//   const [query, setQuery] = useState('')

//   const searchResults = () => {
//     return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase())) 
//     }

//    const displayResults = () => {
//     const results = searchResults();
//       if (query === '') {
//         return <div></div>
//       } else {
//         return <Villagers villagers={results} />
//       }
//     }
    
//     return (
//       <Col className="column card">
//         <input type="text" 
//           className="searchbar"
//           placeholder="Search villager by name..." 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} />

//         {displayResults()}
//       </Col>
//     )
//   }

//   const mapStateToProps = (state) => {
//     return {
//       villagers: state.villagerReducer.villagers,
//       islands: state.islandReducer.islands
//     }
//   }

  
// export default connect(mapStateToProps)(VillagerSearch);

import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function VillagerSearch({handleAdd, villagers, island, query, setQuery, match}) {
  
  const searchResults = () => {
    return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase())) 
    }

   const displayResults = () => {
    const results = searchResults();
      if (query === '') {
        return ''
      } else {
        return results.map(villager => 
          <li key={villager.id}> 
            <Link to={`/villagers/${villager.id}`} 
              villagers={villagers} 
              className="link">  
              {villager.name} </Link>
            <button disabled={island && island.villagers.length < 10? false: true} 
              onClick={() => handleAdd(villager.id, island.id)}> 
              <img src={add} alt="new island link" /> </button> 
          </li> )
      }
    }
    
    return (
      <Col className="column card">
        <input type="text" 
          className="searchbar"
          placeholder="Search villager by name..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
      </Col>
    )
  }

  
export default VillagerSearch;