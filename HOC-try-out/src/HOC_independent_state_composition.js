import React from "react";

/***********

    To make all components reusable again, we need to move the logic back to the [.. withTransformProps] HoC. 
    To achieve this, we need to figure out how to use the [...withTransformProps]
    and [...withSimpleState] HoCs with the [...base component] at the same time and 
    allow the [...renderDisplayList] to only be responsible for the presentation again.
    We can achieve this behavior using &&&& composition $$$$$.


*************/
// (props) => {} this bit is functional component
const withTransformProps = mapperFunc => ReactComponent => props => {
  console.log("baseProps", props);
  console.log("ReactComponent", ReactComponent);
  const transformedProps = mapperFunc(props);
  //insted of jsx we are returning component cause its HOC
  return <ReactComponent {...transformedProps} />;
};

/*
  *@this component is responsible for logic only 
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = defaultState => BaseComponent => {
  return class WithSimpleState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: defaultState };
      this.updateState = this.updateState.bind(this);
    }
    updateState(value) {
      console.log("updateState", value);
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
  *@as before this is presentional component it is pure function
  *@that accepts data in props 
*/

/****
 BASE COMPONENT number in stack: 4
 the action for state comes from this compoent up to the component lader up to TOP STATE COMPONENT
***/
const renderDisplayListBase = ({ list, stateHandler, otherSide }) => (
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
  *@notice that we need to export component
  *@ alternativeComponentCall(renderDisplayList) method will export 
  *@ component notice this bit (props) => {} is the same as renderDisplayList component  (props) => ()
*/
//this part is  component   (props) => {
const alternativeComponentCall = ReactComponent => props => {
  console.log("SimpleDisplayList props", props);
  /*
    *@props are given once our component is executed
    *@<SimpleDisplayList list={list} />
  */
  //here we return compoent instead of jsx since it is HOC
  return <ReactComponent {...props} />;
};
const SimpleDisplayList = alternativeComponentCall(renderDisplayListBase);
export { SimpleDisplayList };

/****
 withTransformProps FUNCTION number in stack: 1 returns function;
***/
const filteringFn = withTransformProps(({ list, stateValue, stateHandler }) => {
  const otherSide = stateValue === "dark" ? "light" : "dark";
  return {
    stateHandler,
    otherSide,
    list: list.filter(char => char.side === stateValue)
  };
});

/*
  *@filteringFn is composed of this executed function withTransformProps() so the return value of 
  *@ withTransformProps() is available to FilteringFN
  *@ filteringFn = withTransformProps();
*/

/****
 filteringFn FUNCTION number in stack: 2 returns component;
***/
//the second part of withTransformProps function requires BASE COMPONENT to be passed;
const BaseComponentFiltered = filteringFn(renderDisplayListBase);

/*
      it could be written like this:
  
      BaseComponentFiltered = withTransformProps( ()=>{ passedMethod } ) (renderDisplayList)

      but insted it is shorhanded and usesed outcome of
      const  outcomeofwithTransformProps =   withTransformProps( ()=>{ passedMethod } );

      BaseComponentFiltered = outcomeofwithTransformProps(renderDisplayList)
*/

/****
 TOP HOC component that holds logic for state ,  number in stack: 1
 U need to export it to top HOC , this component will take our FILTERED COMPONEMT and it get exported for rendering
***/
const ToggleableFilteredList = withSimpleState("dark")(BaseComponentFiltered);

export default ToggleableFilteredList;
