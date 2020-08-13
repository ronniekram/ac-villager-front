import React from 'react';
import './App.css';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import WishlistsContainer from './containers/wishlistContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IslandsContainer />
        <VillagersContainer />
        <WishlistsContainer />
      </div>
    )
  }
}


export default App;
