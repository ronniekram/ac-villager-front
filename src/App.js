import React from 'react';
import './App.css';
import Header from './Header';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IslandsContainer />
        <VillagersContainer />
      </div>
    )
  }
}


export default App;
