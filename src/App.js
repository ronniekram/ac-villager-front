import React from 'react';
import './App.css';
import Header from './Header';
import IslandsContainer from './containers/IslandsContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IslandsContainer />
      </div>
    )
  }
}


export default App;
