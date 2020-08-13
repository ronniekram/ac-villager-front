import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchIslands, addIsland, deleteIsland} from '../actions/islandActions';
import {fetchVillagers} from '../actions/villagerActions'
import Island from '../components/islands/Island'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';


class IslandsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchIslands()
    this.props.fetchVillagers()
  }

  render() {
    return (
      <>
        <Switch>
          <Route path='/islands/new' 
            component={IslandInput} addIsland={addIsland} />

          <Route exact path='/islands/:id'
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={this.props.islands} />}/>

          <Route path='/islands' 
            render={(routerProps) => 
              <Islands {...routerProps} 
                islands={this.props.islands} />} />
        </Switch>
      </>
    )
  }


}

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps, {fetchIslands, addIsland, deleteIsland, fetchVillagers})(IslandsContainer);


// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
// import {fetchIslands} from '../actions/islandActions';
// import {fetchVillagers} from '../actions/villagerActions'
// import Island from '../components/islands/Island'
// import Islands from '../components/islands/Islands';
// import IslandInput from '../components/islands/IslandInput';


// function IslandsContainer({history, match, fetchIslands, fetchVillagers}) {
//   useEffect(() => {
//     fetchIslands(),
//     fetchVillagers();
//   }, [islands, villagers])

//     return (
//       <>
//         <Switch>
//           <Route path={`${match.url}/new`} 
//             render={(routerProps) => 
//             <IslandInput {...routerProps}/>} />

//           <Route exact path={`${match.url}/:id`}
//             render={(routerProps) => 
//               <Island {...routerProps} 
//                 islands={islands} />}/>

//           <Route path={`${match.url}`} 
//             render={(routerProps) => 
//               <Islands {...routerProps} 
//                 islands={islands} />} />
//         </Switch>
//       </>
//     )
//   }

// const mapStateToProps = state => {
//   return {
//     islands: state.islandReducer.islands
//   }
// }

// export default connect(mapStateToProps, {fetchIslands, fetchVillagers})(IslandsContainer);