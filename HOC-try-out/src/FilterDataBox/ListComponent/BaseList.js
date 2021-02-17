/*
  *@as before this is presentional component it is pure function
  *@that accepts data in props 
*/

/****
 BASE COMPONENT number in stack: 4
 the action for state comes from this compoent up to the component lader up to TOP STATE COMPONENT
***/

/****
 BaseComponentFiltered COMPONENT with filtered appleid to it, number in stack: 3
 it will return our BASE COMPONENT with all funtionality needed for state 
 ****/

import React from "react";
import { manipulateListFns } from "./BaseListHelpersFns";

const RenderDisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

/*
    
    This Component is static one is consctructed from [...manipulateListFns] and [...renderDisplayList]
    then is ready to be passed to our Top HoC for state change

*/
/*
  *@export Render display list as Funtional Component with logic for filtering 
  *@There are 2 ways of doing it sending component as funciton arg or use it directly
  *@all it matters is to return a component List the result is the same with bot approaches
*/
//const withTransformProps = helperFunc => BaseComponent => baseProps => {
const withTransformProps = helperFunc => baseProps => {
  const transformedProps = helperFunc(baseProps);
  //return <BaseComponent {...transformedProps} />;
  return <RenderDisplayList {...transformedProps} />;
};
//const ListWithTransformation = withTransformProps(manipulateListFns)(RenderDisplayList);
const ListWithTransformation = withTransformProps(manipulateListFns);

export { ListWithTransformation };
