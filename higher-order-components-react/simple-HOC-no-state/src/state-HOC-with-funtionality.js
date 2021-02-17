import React from 'react';

const withSimpleState = defaultState => BaseComponent => {
    return class WithSimpleState extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: defaultState };
            this.updateState = this.updateState.bind(this);
        }
        updateState(value) {
            this.setState({ value });
        }
        render() {
            return (
                <BaseComponent
                    {...this.props}
                    stateValue={this.state.value}
                    stateHandler={this.updateState}
                />
            );
        }
    };
};

/*
  *@renderDisplayList is not a pure component since has a logic 
  *@for state change inside;
*/
const renderDisplayList = ({ list, stateValue, stateHandler })=> {
    const filteredList = list.filter(char => char.side === stateValue);
    const otherSide = stateValue === 'dark' ? 'light' : 'dark';
    return (
        <div>
            <button onClick={() => stateHandler(otherSide)}>Switch</button>
            {filteredList.map(char =>
                <div key={char.name}>
                    <div>Character: {char.name}</div>
                    <div>Side: {char.side}</div>
                </div>
            )}
        </div>
    );
};

export default withSimpleState('dark')(renderDisplayList);
