import React, { useEffect, useState } from 'react';
// import Villagers from './Villagers';

 function VillagerSearch({villagers}) {
    // const [searchTerm, setSearch] = useState("")
    // const [searchResults, setResults] = useState({})
    // const handleChange = event => {
    //  setSearch(event.target.value);
    // };


    // useEffect(() => {
    //   const results = villagers.filter(villager =>
    //     villager.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setResults(results);
    // }, [villagers, searchTerm]);


    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={searchTerm} onChange={handleChange} />
      </div>
    )
 }
export default VillagerSearch;