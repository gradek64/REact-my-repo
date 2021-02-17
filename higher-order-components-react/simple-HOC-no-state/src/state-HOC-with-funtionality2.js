import React from "react";

/*
  *@ renderDisplatList is presentional component 
  *@which is functionl component that only display UI
*/

const renderDisplayList = ({ list, stateHandler, otherSide }) => (
  <div>
    <button onClick={() => stateHandler(otherSide)}>Switch</button>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

/*
  *@ this is higher order componemt that is only resposible for 
  *@apply mapping function and return our baseCompoent without state
*/
const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

/*
  *@the one below is exacaly the same as the functionality
  *@fro HOC-with-functionality example
*/

export const FilterList2 = withTransformProps(({ list, side: sideProp }) => ({
  list: list.filter(({ side }) => side === sideProp)
}))(renderDisplayList);

const stateLogic = ({ list, stateValue, stateHandler }) => {
  const otherSide = stateValue === "dark" ? "light" : "dark";
  return {
    stateHandler,
    otherSide,
    list: list.filter(char => char.side === stateValue)
  };
};

/*
  *@FilteredList returns our list component that have state logic
  *@attache to it 
  *@ remmeber from withTransformProps(stateLogic)(renderDisplayList)
  *@
*/
export const FilteredListState = withTransformProps(stateLogic)(
  renderDisplayList
);

console.log(FilteredListState);

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
  *@the one below is the same outcome but without state logic 
  *@attached to it
*/
//const ToggleableFilteredList = withSimpleState('dark')(renderDisplayList);

//now we attach logic to the with simple state;
//const FilteredList = withTransformProps(stateLogic)(renderDisplayList);
const ToggleableFilteredList = withSimpleState("dark")(FilteredListState);

export default ToggleableFilteredList;
