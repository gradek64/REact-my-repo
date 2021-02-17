import React from "react";

/*
  *@apply any transoformation to the prop
  *@login behind transformation is kept in transformFunc
*/

const withTransformPropsHOC = transformFunc => {
  /*
      *@this HOC that takes transfomation function 
      *@and returns enhanced component

      *@ const HoC => config-transformFunc => BaseComponent => EnhancedComponent

      *@ that way we can pass any config we want as example below with 2 filtered method;
    */
  const EnhancedComponent = BaseComponent => {
    return baseProps => {
      //apply transformation to props of Base presentational Component;
      const transformedProps = transformFunc(baseProps);
      return <BaseComponent {...transformedProps} />;
    };
  };
  return EnhancedComponent;
};

/*
  *@this is presentional component
  *@it is pure component that has no login just accepets data from props 
*/

const renderDisplayList = ({ list }) => (
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
  *@this is our trasformation function (it is not component) that 
  *@is passed to our HOC , her task is to filter props 
*/

const FilteredListHelperFn = withTransformPropsHOC(({ list, side }) => ({
  list: list.filter(({ side: sideOrg }) => sideOrg === side)
}));

/*
  *@this is our trasformation function (it is not component) that 
  *@is passed to our HOC , her task is to filter props 
*/

const FilteredListNamesHasLUKE = withTransformPropsHOC(({ list }) => ({
  list: list.filter(({ name }) => name.includes("Luke"))
}));
/*
  *@export HOC that accepts pure list to be then change later
  *@in helper function
*/
const ListRenderComponentSide = FilteredListHelperFn;
const ListRenderComponentHas = FilteredListNamesHasLUKE;

/*
  *@call second part of the withTransformPropsHOC funtion 
  *@which expects to pass baseComponent to it
*/

const Set1 = ListRenderComponentSide(renderDisplayList);
const Set2 = ListRenderComponentHas(renderDisplayList);

export { Set1, Set2 };
