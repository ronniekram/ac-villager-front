import React from 'react';
import './App.css';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IslandsContainer />
        <VillagersContainer />
      </div>
    )
  }
}


export default App;
