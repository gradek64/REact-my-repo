import React from 'react';

//outer function
const withFilterProps = (BaseComponent) => 
//this is where JSX start
    ({list, side}) => {
        const filteredList = list.filter(({side:orig})=>orig===side);
        return <BaseComponent list={filteredList} />;
    };
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
  *@functional component either return JSX 
  *@or it could return other component;
*/

/*
  *@HOC component is assign to functional component that passes props to it
*/
const ExtendedComponent = withFilterProps(renderDisplayList);
const HOC = (props) => <ExtendedComponent {...props} />;

//or direct assigment to default export;
//HOC = (props) => withFilterProps(renderDisplayList) (props);


/*
  *@eqwiwalent to: U will skip one assigment to component simply shorter syntax;
  *@ HOC = (props) => withFilterProps(renderDisplayList) (props);
*/


export default HOC;
