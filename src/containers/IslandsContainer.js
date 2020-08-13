// import React from 'react';
// import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
// import {fetchIslands, addIsland, deleteIsland} from '../actions/islandActions';
// import {fetchVillagers} from '../actions/villagerActions'
// import Island from '../components/islands/Island'
// import Islands from '../components/islands/Islands';
// import IslandInput from '../components/islands/IslandInput';


// class IslandsContainer extends React.Component {

//   componentDidMount() {
//     this.props.fetchIslands()
//     this.props.fetchVillagers()
//   }

//   render() {
//     return (
//       <>
//         <Switch>
//           <Route path='/islands/new' 
//             component={IslandInput} addIsland={addIsland} />

//           <Route exact path='/islands/:id'
//             render={(routerProps) => 
//               <Island {...routerProps} 
//                 islands={this.props.islands} />}/>

//           <Route path='/islands' 
//             render={(routerProps) => 
//               <Islands {...routerProps} 
//                 islands={this.props.islands} />} />
//         </Switch>
//       </>
//     )
//   }


// }

// const mapStateToProps = state => {
//   return {
//     islands: state.islandReducer.islands
//   }
// }

// export default connect(mapStateToProps, {fetchIslands, addIsland, deleteIsland, fetchVillagers})(IslandsContainer);


import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchIslands} from '../actions/islandActions';
import Island from '../components/islands/Island'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';


function IslandsContainer({history, match, islands}) {

    return (
      <>
        <Switch>
          <Route path={`/islands/new`} 
            render={(routerProps) => 
            <IslandInput {...routerProps}/>} />

          <Route exact path={`/islands/:id`}
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={islands} />}/>

          <Route path={`/islands`} 
            render={(routerProps) => 
              <Islands {...routerProps} 
                islands={islands} />} />
        </Switch>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps, {fetchIslands})(IslandsContainer);