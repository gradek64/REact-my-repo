import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';
/* eslint react/prop-types: 0 */
class Home extends React.Component {
  componentDidMount() {
    if (this.props.circuits.length <= 0) {
      this.props.fetchData();
    }
  }

  render() {
    const { circuits } = this.props;

    return (
      <div className="wrapper">
        <h2>F1 2018 Season Calendar</h2>
        <ul>
          {circuits.map(({ circuitId, circuitName, Location }) => (
            <li key={circuitId}>
              {circuitName} - {Location.locality}, {Location.country}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// HAS to be static since we only have access to Class but not class Instance on the server
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = (state) => ({
  circuits: state.data,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
