import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IslandsContainer />
      <VillagersContainer />
    </div>
  );
}

export default App;
