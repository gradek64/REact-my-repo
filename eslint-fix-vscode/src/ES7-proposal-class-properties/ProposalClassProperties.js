import React from 'react';
const Greg = 'Greg';

// custom;
import './styles.scss';

class Proposal extends React.Component {
  state = {
    property: 'Proposal',
  };

  render() {
    console.log('is working');
    const { property } = this.state;
    console.log(property);
    return (
      <span className="my-class">{`value from state is there yeah ${property}`}</span>
    );
  }
}

export default Proposal;
