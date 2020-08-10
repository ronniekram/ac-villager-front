import React from 'react';
import {connect} from 'react-redux';
import {fetchIslands} from '../actions/fetchIslands';
import Island from '../components/islands/Island';
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';

class IslandsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchIslands()
  }

  render() {
    return (
      <div>
        <Island />
        <Islands />  
        <IslandInput /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    islands: state.islands
  }
}

export default connect(mapStateToProps, {fetchIslands})(IslandsContainer);