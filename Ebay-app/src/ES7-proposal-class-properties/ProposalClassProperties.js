import React from 'react';

// custom;
import './styles.css';

class Proposal extends React.Component {
  state={
    property: 'Proposal',
  }

  render() {
    const { property } = this.state;
    console.log(property);
    return (
      <span className="my-class">
        {`value from state is there yeah ${property}`}
        <a href="#">check tutorial here</a>
      </span>
    );
  }
}

export default Proposal;
