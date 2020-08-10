import React from 'react';
import {connect} from 'react-redux';
import {fetchIslands} from '../actions/fetchIslands';
// import Island from '../components/islands/Island';
import Islands from '../components/islands/Islands';
// import IslandInput from '../components/islands/IslandInput';

class IslandsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchIslands()
  }

  // handleLoading = () => {
  //   console.log(this.props.loading)
  //   if (this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return <Islands islands={this.props.islands} />

  // }

  render() {
    return (
      <div>
        {/* <Island islands={this.props.islands} /> */}
        <h2>Islands</h2> 
        <Islands islands={this.props.islands} />
        {/* <IslandInput />  */}
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    islands: state.islands,
    // loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchIslands })(IslandsContainer);