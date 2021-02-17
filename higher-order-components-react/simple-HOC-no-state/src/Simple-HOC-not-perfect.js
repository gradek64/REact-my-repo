import React from 'react';

/*
  *@HOC resposible for filter data and pass down the chain the 
  *@outcome
*/

const withFilterProps = BaseComponent => ({ list, side }) => {
    const transformedProps = list.filter(char => char.side === side);
    return <BaseComponent list={transformedProps} />;
};


/*
  *@this is our presentional component which should never change 
  *@it has simple task to display the list no login should be inside
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


//meet HOC with presentional component;
export default withFilterProps(renderDisplayList);
