import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import WishlistsContainer from './containers/WishlistsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IslandsContainer />
      <VillagersContainer />
      <WishlistsContainer />
    </div>
  );
}

export default App;
