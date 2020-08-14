import React from 'react'
import {connect} from 'react-redux'
import {editIsland} from '../actions/islandActions'

function IslandEdit({history, editIsland}) {

  const [villager_ids, setVillagerIds] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    editIsland({
      villager_ids: villager_ids
    })
  }

    return (
      <>
        <h3>Edit Your Island</h3>
        <form onSubmit={handleSubmit}>
          <label>Island Name: </label>
          <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
            <br />
          <label>Owner's Name: </label>
          <input type='text' value={owner} name="owner" onChange={(e) => setOwner(e.target.value)} />
            <br />
            {/* <label>Villager: </label>
            <input type="number" name="villager_ids" value={villager_ids} onChange={(e) => setVillagerIds(e.target.value)} /> 
            <br /> */}
          <input type="submit" />
        </form>
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands
    }
  }


export default connect(mapStateToProps, {editIsland})(IslandEdit);