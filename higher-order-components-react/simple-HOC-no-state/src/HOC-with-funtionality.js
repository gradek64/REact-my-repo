import React from 'react';

const withTransformProps = transformFunc => {
    const ConfiguredComponent = BaseComponent => {
        return baseProps => {
            const transformedProps = transformFunc(baseProps);
            return <BaseComponent {...transformedProps} />;
        };
    };
    return ConfiguredComponent;
};

/*
  *@ this base presentional compoenent 
  *@
*/
const renderDisplayList = ({ list }) =>
    <div>
        {list.map(char =>
            <div key={char.name}>
                <div>Character: {char.name}</div>
                <div>Side: {char.side}</div>
            </div>
        )}
    </div>;

/*
  *@ withTransformProps( this returns funtion for filtering ) ( baseCompoentList)
  *@ withTransformProps component is called by calling higher-order function that 
  *@ holds function for filtering wich later is used  baseProps JSX component
*/

const FilterList = withTransformProps(
    ({ list, side:sideProp }) => ({
        list: list.filter(({side}) =>
            side === sideProp)
    })
)(renderDisplayList);

export default FilterList;


